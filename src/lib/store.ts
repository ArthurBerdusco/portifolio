import { promises as fs } from "fs";
import path from "path";

const KEY = "portfolio:content";
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const FILE = path.join(process.cwd(), ".data", "content.json");

export type StorageMode = "redis" | "file" | "none";

/** redis: produção/Upstash · file: desenvolvimento local · none: produção sem banco configurado (somente leitura) */
export function storageMode(): StorageMode {
  if (REDIS_URL && REDIS_TOKEN) return "redis";
  if (process.env.VERCEL) return "none";
  return "file";
}

async function redis(command: unknown[]): Promise<unknown> {
  const res = await fetch(REDIS_URL as string, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis respondeu ${res.status}`);
  const data = (await res.json()) as { result?: unknown; error?: string };
  if (data.error) throw new Error(data.error);
  return data.result;
}

export async function readRaw(): Promise<unknown | null> {
  const mode = storageMode();
  try {
    if (mode === "redis") {
      const result = await redis(["GET", KEY]);
      return typeof result === "string" ? JSON.parse(result) : null;
    }
    if (mode === "file") {
      return JSON.parse(await fs.readFile(FILE, "utf8"));
    }
  } catch {
    // sem conteúdo salvo ou indisponível: o site usa o conteúdo padrão
  }
  return null;
}

export async function writeRaw(value: unknown): Promise<void> {
  const mode = storageMode();
  const json = JSON.stringify(value);
  if (mode === "redis") {
    await redis(["SET", KEY, json]);
    return;
  }
  if (mode === "file") {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, json, "utf8");
    return;
  }
  throw new Error(
    "Armazenamento não configurado. Conecte um banco Upstash Redis ao projeto na Vercel (veja o README) para salvar alterações."
  );
}

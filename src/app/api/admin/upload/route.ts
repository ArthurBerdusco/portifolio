import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isAuthed } from "@/lib/auth";

const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
  "application/pdf": "pdf",
};
const MAX = 4 * 1024 * 1024; // limite de corpo das funções da Vercel é ~4,5 MB

export async function POST(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Sessão expirada." }, { status: 401 });

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });

  const ext = ALLOWED[file.type];
  if (!ext) return NextResponse.json({ error: "Formato não aceito. Use JPG, PNG, WebP, AVIF ou PDF." }, { status: 415 });
  if (file.size > MAX) return NextResponse.json({ error: "Arquivo acima de 4 MB." }, { status: 413 });

  const base =
    file.name
      .replace(/\.[^.]+$/, "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "arquivo";
  const name = `${base}-${Date.now().toString(36)}.${ext}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`portfolio/${name}`, file, { access: "public", contentType: file.type });
    return NextResponse.json({ url: blob.url });
  }

  if (process.env.NODE_ENV !== "production") {
    const dir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()));
    return NextResponse.json({ url: `/uploads/${name}` });
  }

  return NextResponse.json(
    { error: "Upload não configurado. Ative o Vercel Blob no projeto (BLOB_READ_WRITE_TOKEN) ou cole a URL da imagem." },
    { status: 501 }
  );
}

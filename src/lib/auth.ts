import { cookies } from "next/headers";

export const COOKIE = "admin_session";
const SEVEN_DAYS = 60 * 60 * 24 * 7;

export const adminConfigured = () => Boolean(process.env.ADMIN_PASSWORD);

const secret = () => `${process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || ""}::portfolio-admin`;

async function sign(message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function passwordMatches(input: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  // compara os HMACs para ter tamanho fixo e evitar vazar o comprimento da senha
  const [a, b] = await Promise.all([sign(`pw:${input}`), sign(`pw:${expected}`)]);
  return safeEqual(a, b);
}

export async function createSessionToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + SEVEN_DAYS;
  return `${exp}.${await sign(`session:${exp}`)}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token || !adminConfigured()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  return safeEqual(sig, await sign(`session:${exp}`));
}

export async function isAuthed(): Promise<boolean> {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE)?.value);
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SEVEN_DAYS,
};

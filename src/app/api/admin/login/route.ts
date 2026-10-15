import { NextResponse } from "next/server";
import { adminConfigured, COOKIE, createSessionToken, passwordMatches, sessionCookieOptions } from "@/lib/auth";

export async function POST(req: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Defina a variável de ambiente ADMIN_PASSWORD para ativar o backoffice." }, { status: 503 });
  }
  const body = (await req.json().catch(() => ({}))) as { password?: unknown };
  const ok = typeof body.password === "string" && (await passwordMatches(body.password));
  if (!ok) {
    await new Promise((r) => setTimeout(r, 700)); // freia tentativas em sequência
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await createSessionToken(), sessionCookieOptions);
  return res;
}

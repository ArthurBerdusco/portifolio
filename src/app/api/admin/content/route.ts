import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { getContentFresh, normalize } from "@/lib/content";
import { defaultContent } from "@/lib/default-content";
import { storageMode, writeRaw } from "@/lib/store";

const unauthorized = () => NextResponse.json({ error: "Sessão expirada. Entre novamente." }, { status: 401 });

export async function GET() {
  if (!(await isAuthed())) return unauthorized();
  return NextResponse.json({ content: await getContentFresh(), storage: storageMode() });
}

export async function PUT(req: Request) {
  if (!(await isAuthed())) return unauthorized();
  const raw = await req.text();
  if (raw.length > 1_500_000) return NextResponse.json({ error: "Conteúdo grande demais (limite de 1,5 MB)." }, { status: 413 });
  let body: { content?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }
  const content = normalize(body.content);
  try {
    await writeRaw(content);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Falha ao salvar." }, { status: 500 });
  }
  revalidateTag("content");
  return NextResponse.json({ ok: true, content });
}

/** Restaura o conteúdo padrão. */
export async function DELETE() {
  if (!(await isAuthed())) return unauthorized();
  try {
    await writeRaw(defaultContent);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Falha ao restaurar." }, { status: 500 });
  }
  revalidateTag("content");
  return NextResponse.json({ ok: true, content: normalize(defaultContent) });
}

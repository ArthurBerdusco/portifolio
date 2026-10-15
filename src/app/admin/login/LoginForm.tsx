"use client";

import { useState } from "react";

export default function LoginForm({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.href = "/admin";
      return;
    }
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    setError(data.error || "Não foi possível entrar.");
    setBusy(false);
  }

  return (
    <main className="grid min-h-screen place-items-center bg-boxwood px-5">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-paper p-7 shadow-2xl">
        <h1 className="text-2xl font-bold">Backoffice</h1>
        <p className="mt-1 text-sm text-ink-soft">Entre para editar o conteúdo do portfólio.</p>

        {!configured && (
          <p className="mt-5 rounded-lg bg-amber-100 p-3 text-sm text-amber-900">
            Defina a variável de ambiente <code className="font-mono">ADMIN_PASSWORD</code> e reinicie o servidor para ativar o acesso.
          </p>
        )}

        <label htmlFor="pw" className="mt-6 block text-sm font-medium">
          Senha
        </label>
        <input
          id="pw"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
        />
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-700">
            {error}
          </p>
        )}
        <button disabled={busy || !password || !configured} className="btn btn-ink mt-6 w-full !py-3 disabled:opacity-50">
          {busy ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}

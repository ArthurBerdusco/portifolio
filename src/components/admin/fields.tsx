"use client";

import { useId, useRef, useState } from "react";
import { FiArrowDown, FiArrowUp, FiPlus, FiTrash2, FiUpload } from "react-icons/fi";

export const inputCls =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-soft/60 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20";

export function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return arr;
  const copy = [...arr];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

export function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-ink-soft">{hint}</span>}
    </div>
  );
}

export function TextInput({
  label,
  value,
  onChange,
  hint,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input id={id} className={inputCls} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      {hint && <span className="mt-1 block text-xs text-ink-soft">{hint}</span>}
    </div>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  hint,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <textarea id={id} rows={rows} className={`${inputCls} resize-y leading-relaxed`} value={value} onChange={(e) => onChange(e.target.value)} />
      {hint && <span className="mt-1 block text-xs text-ink-soft">{hint}</span>}
    </div>
  );
}

export function SelectInput<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <select id={id} className={inputCls} value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Toggle({ label, checked, onChange, hint }: { label: string; checked: boolean; onChange: (v: boolean) => void; hint?: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input type="checkbox" className="mt-1 h-4 w-4 accent-[#2F6B4F]" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>
        <span className="block text-sm font-medium">{label}</span>
        {hint && <span className="block text-xs text-ink-soft">{hint}</span>}
      </span>
    </label>
  );
}

/** Lista separada por vírgula (ex.: tecnologias). */
export function TagsInput({ label, items, onChange, hint }: { label: string; items: string[]; onChange: (v: string[]) => void; hint?: string }) {
  const [text, setText] = useState(items.join(", "));
  return (
    <TextInput
      label={label}
      value={text}
      hint={hint ?? "Separe com vírgulas."}
      onChange={(v) => {
        setText(v);
        onChange(v.split(",").map((s) => s.trim()).filter(Boolean));
      }}
    />
  );
}

export function IconButton({ title, onClick, danger, disabled }: { title: string; onClick: () => void; danger?: boolean; disabled?: boolean }) {
  const Icon = title === "Subir" ? FiArrowUp : title === "Descer" ? FiArrowDown : FiTrash2;
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      className={`grid h-8 w-8 place-items-center rounded-md border border-line bg-white text-sm transition-colors disabled:opacity-30 ${
        danger ? "hover:border-red-300 hover:bg-red-50 hover:text-red-700" : "hover:bg-paper-2"
      }`}
    >
      <Icon aria-hidden />
    </button>
  );
}

export function AddButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-2 rounded-lg border border-dashed border-ink/30 px-3.5 py-2 text-sm font-medium hover:border-leaf hover:text-leaf">
      <FiPlus aria-hidden /> {children}
    </button>
  );
}

/** Lista de textos (um por linha), com reordenar e remover. */
export function StringList({
  label,
  items,
  onChange,
  multiline,
  addLabel = "Adicionar item",
  hint,
}: {
  label: string;
  items: string[];
  onChange: (v: string[]) => void;
  multiline?: boolean;
  addLabel?: string;
  hint?: string;
}) {
  return (
    <fieldset>
      <legend className="mb-1 text-sm font-medium">{label}</legend>
      {hint && <p className="mb-2 text-xs text-ink-soft">{hint}</p>}
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-2">
            {multiline ? (
              <textarea rows={3} className={`${inputCls} resize-y leading-relaxed`} value={it} aria-label={`${label} ${i + 1}`} onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))} />
            ) : (
              <input className={inputCls} value={it} aria-label={`${label} ${i + 1}`} onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))} />
            )}
            <div className="flex shrink-0 gap-1">
              <IconButton title="Subir" disabled={i === 0} onClick={() => onChange(move(items, i, -1))} />
              <IconButton title="Descer" disabled={i === items.length - 1} onClick={() => onChange(move(items, i, 1))} />
              <IconButton title="Remover" danger onClick={() => onChange(items.filter((_, j) => j !== i))} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <AddButton onClick={() => onChange([...items, ""])}>{addLabel}</AddButton>
      </div>
    </fieldset>
  );
}

/** Campo de imagem/arquivo: cola uma URL ou envia um arquivo. */
export function ImageField({
  label,
  value,
  onChange,
  accept = "image/jpeg,image/png,image/webp,image/avif",
  hint,
  preview = true,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  accept?: string;
  hint?: string;
  preview?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const isImg = preview && value && !/\.pdf($|\?)/i.test(value);

  async function upload(file: File) {
    setBusy(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error || "Falha no upload.");
      onChange(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha no upload.");
    } finally {
      setBusy(false);
      if (ref.current) ref.current.value = "";
    }
  }

  return (
    <div>
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <div className="flex items-start gap-3">
        {isImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="h-14 w-14 shrink-0 rounded-lg border border-line bg-paper-2 object-cover" />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex gap-2">
            <input className={inputCls} value={value} placeholder="/caminho/arquivo.jpg ou https://…" aria-label={label} onChange={(e) => onChange(e.target.value)} />
            <button
              type="button"
              onClick={() => ref.current?.click()}
              disabled={busy}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-white px-3 text-sm font-medium hover:bg-paper-2 disabled:opacity-50"
            >
              <FiUpload aria-hidden /> {busy ? "Enviando…" : "Enviar"}
            </button>
            <input ref={ref} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
          </div>
          {hint && <span className="mt-1 block text-xs text-ink-soft">{hint}</span>}
          {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
        </div>
      </div>
    </div>
  );
}

/** Item recolhível de uma lista (projeto, experiência, etc.). */
export function ItemShell({
  title,
  subtitle,
  onUp,
  onDown,
  onRemove,
  first,
  last,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
  first: boolean;
  last: boolean;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group rounded-xl border border-line bg-white">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <span className="text-ink-soft transition-transform group-open:rotate-90" aria-hidden>
          ▸
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold">{title || "Sem título"}</span>
          {subtitle && <span className="block truncate text-xs text-ink-soft">{subtitle}</span>}
        </span>
        <span className="flex gap-1" onClick={(e) => e.stopPropagation()}>
          <IconButton title="Subir" disabled={first} onClick={onUp} />
          <IconButton title="Descer" disabled={last} onClick={onDown} />
          <IconButton
            title="Remover"
            danger
            onClick={() => {
              if (confirm(`Remover "${title || "este item"}"?`)) onRemove();
            }}
          />
        </span>
      </summary>
      <div className="space-y-4 border-t border-line p-4">{children}</div>
    </details>
  );
}

export function Card({ title, children, description }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-lg font-bold">{title}</h3>
      {description && <p className="mt-1 text-sm text-ink-soft">{description}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

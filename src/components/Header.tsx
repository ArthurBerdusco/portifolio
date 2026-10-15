import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import type { Profile } from "@/lib/types";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#formacao", label: "Formação" },
  { href: "/#contato", label: "Contato" },
];

export default function Header({ profile }: { profile: Profile }) {
  const short = profile.name.split(" ").slice(0, 2).join(" ");
  const initials = short
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <header className="sticky top-0 z-40 border-b border-boxwood-700 bg-boxwood/95 text-paper backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brass text-sm font-bold text-boxwood">{initials}</span>
          {short}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-paper/75 transition-colors hover:text-brass">
              {l.label}
            </Link>
          ))}
          <a href={profile.resumeUrl} download className="btn btn-ghost-light !py-1.5">
            <FiDownload aria-hidden /> Currículo
          </a>
        </nav>

        {/* Menu mobile sem JavaScript */}
        <details className="group relative lg:hidden">
          <summary className="btn btn-ghost-light cursor-pointer list-none !py-1.5 [&::-webkit-details-marker]:hidden">Menu</summary>
          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-boxwood-700 bg-boxwood p-2 shadow-xl">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm text-paper/85 hover:bg-boxwood-700">
                {l.label}
              </Link>
            ))}
            <a href={profile.resumeUrl} download className="mt-1 block rounded-lg bg-brass px-3 py-2 text-sm font-semibold text-boxwood">
              Baixar currículo
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

import { FiAward } from "react-icons/fi";
import type { Certification, Education as Edu } from "@/lib/types";
import { Logo } from "./Experience";

export default function Education({ education, certifications }: { education: Edu[]; certifications: Certification[] }) {
  return (
    <section id="formacao" className="section">
      <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Formação acadêmica</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.id} className="flex gap-4 py-6">
                <Logo src={e.logo} name={e.institution} />
                <div>
                  <h3 className="font-bold leading-snug">{e.course}</h3>
                  <p className="text-leaf">{e.institution}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {e.period}
                    {e.status && ` · ${e.status}`}
                  </p>
                  {e.note && <p className="mt-2 text-sm leading-relaxed text-ink/80">{e.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certificações</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {certifications.map((c) => (
              <li key={c.id} className="flex items-center gap-4 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-2 text-brass-dark">
                  <FiAward aria-hidden />
                </span>
                <div>
                  <p className="font-semibold leading-snug">{c.name}</p>
                  <p className="text-sm text-ink-soft">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

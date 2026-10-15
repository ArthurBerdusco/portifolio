import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/lib/types";
import ProjectMedia from "./ProjectMedia";
import SmartImage from "./SmartImage";

const typeLabel = { web: "Web", mobile: "Mobile", desktop: "Desktop" } as const;

function Links({ p, primary = true }: { p: Project; primary?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {primary && (
        <Link href={`/projetos/${p.id}`} className="btn btn-ink">
          Ver estudo de caso
        </Link>
      )}
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FaGithub aria-hidden /> Código
        </a>
      )}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FiExternalLink aria-hidden /> Demo
        </a>
      )}
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="section bg-paper-2">
      <div className="container-page">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projetos</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Cada projeto tem um estudo de caso com meu papel, a stack, as decisões técnicas e o código no GitHub.
        </p>

        <div className="mt-14 space-y-20">
          {featured.map((p, i) => (
            <article key={p.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectMedia project={p} />
              </div>
              <div>
                <p className="text-sm text-ink-soft">
                  {typeLabel[p.type]} · {p.context}
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-lg font-medium text-leaf">{p.subtitle}</p>
                <p className="mt-4 max-w-prose leading-relaxed text-ink/85">{p.summary}</p>
                <dl className="mt-5 grid max-w-md grid-cols-[5rem_1fr] gap-x-4 gap-y-1.5 text-sm">
                  <dt className="text-ink-soft">Função</dt>
                  <dd className="font-medium">{p.role}</dd>
                  <dt className="text-ink-soft">Equipe</dt>
                  <dd className="font-medium">{p.team}</dd>
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Links p={p} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-24 text-xl font-bold">Outros projetos</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <article key={p.id} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
                  <Link href={`/projetos/${p.id}`} className="relative block aspect-[16/10] bg-paper-2" aria-label={`Abrir ${p.title}`}>
                    {p.images[0] && <SmartImage src={p.images[0].url} alt={p.images[0].alt} fill sizes="(min-width:1024px) 360px, 90vw" className="object-cover object-top" />}
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs text-ink-soft">
                      {typeLabel[p.type]} · {p.context}
                    </p>
                    <h4 className="mt-1 text-lg font-bold">{p.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">{p.summary}</p>
                    <p className="mt-4 text-xs text-ink-soft">{p.stack.slice(0, 4).join(" · ")}</p>
                    <div className="mt-4">
                      <Links p={p} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

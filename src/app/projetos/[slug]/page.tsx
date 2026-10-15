import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { getContent } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartImage from "@/components/SmartImage";

type Params = { params: Promise<{ slug: string }> };

const typeLabel = { web: "Aplicação web", mobile: "Aplicativo mobile", desktop: "Aplicação desktop" } as const;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await getContent();
  const p = projects.find((x) => x.id === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: p.images[0] ? [{ url: p.images[0].url }] : undefined },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const content = await getContent();
  const idx = content.projects.findIndex((x) => x.id === slug);
  if (idx === -1) notFound();
  const p = content.projects[idx];
  const prev = content.projects[idx - 1];
  const next = content.projects[idx + 1];
  const phone = p.type === "mobile";

  const meta = [
    { label: "Tipo", value: typeLabel[p.type] },
    { label: "Contexto", value: p.context },
    { label: "Minha função", value: p.role },
    { label: "Equipe", value: p.team },
    { label: "Status", value: p.status },
  ].filter((m) => m.value);

  return (
    <>
      <Header profile={content.profile} />
      <main>
        <section className="bg-boxwood text-paper">
          <div className="container-page pb-14 pt-10 sm:pb-16">
            <Link href="/#projetos" className="inline-flex items-center gap-2 text-sm text-paper/70 hover:text-brass">
              <FiArrowLeft aria-hidden /> Todos os projetos
            </Link>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">{p.title}</h1>
            <p className="mt-3 max-w-2xl text-xl text-brass">{p.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-brass">
                  <FaGithub aria-hidden /> Ver código no GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                  <FiExternalLink aria-hidden /> Abrir demo
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="section !pb-10">
          <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold">Sobre o projeto</h2>
              <p className="mt-4 max-w-[64ch] text-lg leading-relaxed text-ink/85">{p.description}</p>
              {p.stack.length > 0 && (
                <>
                  <h2 className="mt-10 text-2xl font-bold">Stack</h2>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <dl className="divide-y divide-line self-start border-y border-line">
              {meta.map((m) => (
                <div key={m.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5">
                  <dt className="text-sm text-ink-soft">{m.label}</dt>
                  <dd className="font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {(p.features.length > 0 || p.highlights.length > 0) && (
          <section className="pb-10 pt-6">
            <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
              {p.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold">O que o projeto faz</h2>
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-relaxed text-ink/85 marker:text-brass-dark">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {p.highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold">Destaques técnicos</h2>
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-relaxed text-ink/85 marker:text-brass-dark">
                    {p.highlights.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {p.challenges.length > 0 && (
          <section className="py-10">
            <div className="container-page">
              <h2 className="text-2xl font-bold">Desafios e soluções</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {p.challenges.map((c, i) => (
                  <div key={i} className="grid gap-3 py-6 md:grid-cols-2 md:gap-14">
                    <div>
                      <p className="text-sm text-ink-soft">Desafio</p>
                      <p className="mt-1 font-semibold">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-ink-soft">Solução</p>
                      <p className="mt-1 leading-relaxed text-ink/85">{c.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {p.images.length > 0 && (
          <section className="bg-paper-2 py-16">
            <div className="container-page">
              <h2 className="text-2xl font-bold">Telas</h2>
              <ul className={`mt-8 grid gap-6 ${phone ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-1 sm:grid-cols-2"}`}>
                {p.images.map((im, i) => (
                  <li key={i}>
                    <a href={im.url} target="_blank" rel="noopener noreferrer" className="group block">
                      <div
                        className={`relative overflow-hidden border border-line bg-white ${
                          phone ? "aspect-[9/19] rounded-[1.4rem] border-4 border-ink" : "aspect-[16/10] rounded-lg"
                        }`}
                      >
                        <SmartImage
                          src={im.url}
                          alt={im.alt}
                          fill
                          sizes={phone ? "(min-width:1024px) 220px, 45vw" : "(min-width:640px) 560px, 92vw"}
                          className={phone ? "object-cover object-top" : "object-contain"}
                        />
                      </div>
                      {im.caption && <p className="mt-2.5 text-sm text-ink-soft group-hover:text-ink">{im.caption}</p>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <nav aria-label="Outros projetos" className="container-page grid gap-4 py-14 sm:grid-cols-2">
          {prev ? (
            <Link href={`/projetos/${prev.id}`} className="rounded-xl border border-line p-5 hover:border-ink">
              <span className="text-sm text-ink-soft">Projeto anterior</span>
              <span className="mt-1 block font-display text-lg font-bold">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/projetos/${next.id}`} className="rounded-xl border border-line p-5 text-right hover:border-ink">
              <span className="text-sm text-ink-soft">Próximo projeto</span>
              <span className="mt-1 block font-display text-lg font-bold">{next.title}</span>
            </Link>
          )}
        </nav>
      </main>
      <Footer profile={content.profile} />
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { FiExternalLink, FiLogOut, FiSave } from "react-icons/fi";
import type { SiteContent, Project } from "@/lib/types";
import {
  AddButton,
  Card,
  ImageField,
  ItemShell,
  SelectInput,
  StringList,
  TagsInput,
  TextArea,
  TextInput,
  Toggle,
  move,
} from "./fields";

type Storage = "redis" | "file" | "none";
type Tab = "perfil" | "projetos" | "experiencia" | "formacao" | "habilidades" | "certificacoes";

const TABS: { id: Tab; label: string }[] = [
  { id: "perfil", label: "Perfil" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "habilidades", label: "Habilidades" },
  { id: "certificacoes", label: "Certificações" },
];

const newId = (p: string) => `${p}-${Date.now().toString(36)}`;

export default function AdminPanel({ initial, storage }: { initial: SiteContent; storage: Storage }) {
  const [content, setContent] = useState<SiteContent>(initial);
  const [saved, setSaved] = useState(() => JSON.stringify(initial));
  const [tab, setTab] = useState<Tab>("perfil");
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const dirty = useMemo(() => JSON.stringify(content) !== saved, [content, saved]);

  useEffect(() => {
    if (!dirty) return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const upd = (fn: (d: SiteContent) => void) =>
    setContent((c) => {
      const d = structuredClone(c);
      fn(d);
      return d;
    });

  async function request(method: "PUT" | "DELETE") {
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/content", {
        method,
        headers: { "Content-Type": "application/json" },
        body: method === "PUT" ? JSON.stringify({ content }) : undefined,
      });
      const data = (await res.json()) as { content?: SiteContent; error?: string };
      if (!res.ok || !data.content) throw new Error(data.error || "Não foi possível salvar.");
      setContent(data.content);
      setSaved(JSON.stringify(data.content));
      setStatus({ kind: "ok", text: method === "PUT" ? "Alterações salvas. O site já está atualizado." : "Conteúdo padrão restaurado." });
    } catch (e) {
      setStatus({ kind: "error", text: e instanceof Error ? e.message : "Erro inesperado." });
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  const p = content.profile;
  const setProfile = <K extends keyof SiteContent["profile"]>(k: K, v: SiteContent["profile"][K]) => upd((d) => void (d.profile[k] = v));

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-30 border-b border-boxwood-700 bg-boxwood text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3">
          <h1 className="mr-auto font-display text-lg font-bold">Backoffice</h1>
          {status && (
            <p role="status" className={`text-sm ${status.kind === "ok" ? "text-[#8ee0b0]" : "text-[#ffb4a8]"}`}>
              {status.text}
            </p>
          )}
          {dirty && !status && <p className="text-sm text-brass">Alterações não salvas</p>}
          <a href="/" target="_blank" className="btn btn-ghost-light !py-1.5">
            <FiExternalLink aria-hidden /> Ver site
          </a>
          <button onClick={() => request("PUT")} disabled={busy || !dirty} className="btn btn-brass !py-1.5 disabled:opacity-50">
            <FiSave aria-hidden /> {busy ? "Salvando…" : "Salvar alterações"}
          </button>
          <button onClick={logout} className="btn btn-ghost-light !py-1.5" title="Sair">
            <FiLogOut aria-hidden /> Sair
          </button>
        </div>
      </header>

      {storage !== "redis" && (
        <div className={`px-5 py-2.5 text-center text-sm ${storage === "none" ? "bg-red-100 text-red-900" : "bg-amber-100 text-amber-900"}`}>
          {storage === "none"
            ? "Nenhum banco configurado: você pode editar, mas não conseguirá salvar. Conecte o Upstash Redis na Vercel (veja o README)."
            : "Modo de desenvolvimento: as alterações são salvas no arquivo .data/content.json."}
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-[12rem_1fr]">
        <nav aria-label="Seções" className="flex gap-1 overflow-x-auto md:sticky md:top-24 md:flex-col md:self-start">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              aria-current={tab === t.id ? "page" : undefined}
              className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-left text-sm font-medium transition-colors ${
                tab === t.id ? "bg-boxwood text-paper" : "hover:bg-paper-2"
              }`}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={() => {
              if (confirm("Restaurar todo o conteúdo para o padrão? Isso apaga as suas edições.")) request("DELETE");
            }}
            className="mt-4 hidden rounded-lg px-3.5 py-2 text-left text-xs text-ink-soft hover:bg-paper-2 hover:text-red-700 md:block"
          >
            Restaurar conteúdo padrão
          </button>
        </nav>

        <main className="min-w-0 space-y-6">
          {tab === "perfil" && (
            <>
              <Card title="Apresentação (topo do site)">
                <TextInput label="Nome completo" value={p.name} onChange={(v) => setProfile("name", v)} />
                <TextInput label="Cargo" value={p.role} onChange={(v) => setProfile("role", v)} hint="Aparece no Google e nos dados estruturados do site." />
                <TextArea label="Título principal" rows={2} value={p.headline} onChange={(v) => setProfile("headline", v)} />
                <TextArea label="Texto de apresentação" rows={3} value={p.intro} onChange={(v) => setProfile("intro", v)} />
                <TextInput label="Selo de disponibilidade" value={p.availability} onChange={(v) => setProfile("availability", v)} hint="Deixe vazio para esconder o selo." />
                <ImageField label="Foto" value={p.photo} onChange={(v) => setProfile("photo", v)} hint="Proporção 4:5 (retrato) funciona melhor." />
                <ImageField label="Currículo (PDF)" value={p.resumeUrl} onChange={(v) => setProfile("resumeUrl", v)} accept="application/pdf" preview={false} />
              </Card>

              <Card title="Sobre mim">
                <StringList label="Parágrafos" multiline items={p.about} onChange={(v) => setProfile("about", v)} addLabel="Adicionar parágrafo" />
                <fieldset>
                  <legend className="mb-2 text-sm font-medium">Resumo em tópicos</legend>
                  <div className="space-y-2">
                    {p.facts.map((f, i) => (
                      <div key={i} className="grid grid-cols-[1fr_2fr_auto] items-start gap-2">
                        <input className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm" aria-label="Rótulo" value={f.label} placeholder="Rótulo" onChange={(e) => upd((d) => void (d.profile.facts[i].label = e.target.value))} />
                        <input className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm" aria-label="Valor" value={f.value} placeholder="Valor" onChange={(e) => upd((d) => void (d.profile.facts[i].value = e.target.value))} />
                        <button type="button" onClick={() => upd((d) => void d.profile.facts.splice(i, 1))} className="h-9 rounded-lg border border-line px-2.5 text-sm hover:bg-red-50 hover:text-red-700" aria-label="Remover">
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <AddButton onClick={() => upd((d) => void d.profile.facts.push({ label: "", value: "" }))}>Adicionar tópico</AddButton>
                  </div>
                </fieldset>
              </Card>

              <Card title="Contato e redes">
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextInput label="E-mail" value={p.email} onChange={(v) => setProfile("email", v)} />
                  <TextInput label="Telefone (exibição)" value={p.phone} onChange={(v) => setProfile("phone", v)} />
                  <TextInput label="WhatsApp (só números, com 55)" value={p.whatsapp} onChange={(v) => setProfile("whatsapp", v)} hint="Ex.: 5511932045718" />
                  <TextInput label="Cidade" value={p.location} onChange={(v) => setProfile("location", v)} />
                  <TextInput label="GitHub" value={p.social.github} onChange={(v) => upd((d) => void (d.profile.social.github = v))} />
                  <TextInput label="LinkedIn" value={p.social.linkedin} onChange={(v) => upd((d) => void (d.profile.social.linkedin = v))} />
                </div>
                <TextArea label="Texto da seção de contato" rows={3} value={p.contactIntro} onChange={(v) => setProfile("contactIntro", v)} />
              </Card>

              <Card title="SEO" description="Como o site aparece no Google e ao compartilhar o link.">
                <TextInput label="Título da página" value={p.siteTitle} onChange={(v) => setProfile("siteTitle", v)} />
                <TextArea label="Descrição" rows={2} value={p.siteDescription} onChange={(v) => setProfile("siteDescription", v)} hint="Ideal: até 160 caracteres." />
              </Card>
            </>
          )}

          {tab === "projetos" && (
            <>
              <p className="text-sm text-ink-soft">
                Marque até dois projetos como <strong>destaque</strong> para aparecerem grandes no topo da seção. A ordem aqui é a ordem no site.
              </p>
              <div className="space-y-3">
                {content.projects.map((pr, i) => {
                  const set = <K extends keyof Project>(k: K, v: Project[K]) => upd((d) => void (d.projects[i][k] = v));
                  return (
                    <ItemShell
                      key={pr.id + i}
                      title={pr.title}
                      subtitle={`${pr.featured ? "Destaque · " : ""}/projetos/${pr.id}`}
                      first={i === 0}
                      last={i === content.projects.length - 1}
                      onUp={() => upd((d) => void (d.projects = move(d.projects, i, -1)))}
                      onDown={() => upd((d) => void (d.projects = move(d.projects, i, 1)))}
                      onRemove={() => upd((d) => void d.projects.splice(i, 1))}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextInput label="Título" value={pr.title} onChange={(v) => set("title", v)} />
                        <TextInput label="Endereço (slug)" value={pr.id} onChange={(v) => set("id", v)} hint="Parte final da URL. Só letras minúsculas, números e hífen." />
                        <TextInput label="Subtítulo" value={pr.subtitle} onChange={(v) => set("subtitle", v)} />
                        <TextInput label="Contexto" value={pr.context} onChange={(v) => set("context", v)} placeholder="Projeto integrador · Senac" />
                        <SelectInput
                          label="Tipo"
                          value={pr.type}
                          onChange={(v) => set("type", v)}
                          options={[
                            { value: "web", label: "Web" },
                            { value: "mobile", label: "Mobile" },
                            { value: "desktop", label: "Desktop" },
                          ]}
                        />
                        <TextInput label="Status" value={pr.status} onChange={(v) => set("status", v)} placeholder="Concluído" />
                        <TextInput label="Minha função" value={pr.role} onChange={(v) => set("role", v)} />
                        <TextInput label="Equipe" value={pr.team} onChange={(v) => set("team", v)} placeholder="4 desenvolvedores" />
                        <TextInput label="Link do GitHub" value={pr.github} onChange={(v) => set("github", v)} />
                        <TextInput label="Link da demo" value={pr.demo} onChange={(v) => set("demo", v)} hint="Opcional. Se vazio, o botão não aparece." />
                      </div>
                      <Toggle label="Projeto em destaque" checked={pr.featured} onChange={(v) => set("featured", v)} hint="Aparece grande, com mockup, no topo da lista." />
                      <TextArea label="Resumo (cards)" rows={2} value={pr.summary} onChange={(v) => set("summary", v)} />
                      <TextArea label="Descrição (estudo de caso)" rows={5} value={pr.description} onChange={(v) => set("description", v)} />
                      <TagsInput label="Stack" items={pr.stack} onChange={(v) => set("stack", v)} />
                      <StringList label="O que o projeto faz" items={pr.features} onChange={(v) => set("features", v)} />
                      <StringList label="Destaques técnicos" items={pr.highlights} onChange={(v) => set("highlights", v)} />

                      <fieldset>
                        <legend className="mb-2 text-sm font-medium">Desafios e soluções</legend>
                        <div className="space-y-3">
                          {pr.challenges.map((c, ci) => (
                            <div key={ci} className="space-y-2 rounded-lg border border-line bg-paper p-3">
                              <TextInput label="Desafio" value={c.challenge} onChange={(v) => upd((d) => void (d.projects[i].challenges[ci].challenge = v))} />
                              <TextArea label="Solução" rows={2} value={c.solution} onChange={(v) => upd((d) => void (d.projects[i].challenges[ci].solution = v))} />
                              <button type="button" className="text-xs text-red-700 hover:underline" onClick={() => upd((d) => void d.projects[i].challenges.splice(ci, 1))}>
                                Remover este par
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2">
                          <AddButton onClick={() => upd((d) => void d.projects[i].challenges.push({ challenge: "", solution: "" }))}>Adicionar desafio</AddButton>
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="mb-1 text-sm font-medium">Imagens</legend>
                        <p className="mb-2 text-xs text-ink-soft">A primeira imagem é a capa do projeto.</p>
                        <div className="space-y-3">
                          {pr.images.map((im, ii) => (
                            <div key={ii} className="space-y-2 rounded-lg border border-line bg-paper p-3">
                              <ImageField label={`Imagem ${ii + 1}`} value={im.url} onChange={(v) => upd((d) => void (d.projects[i].images[ii].url = v))} />
                              <div className="grid gap-2 sm:grid-cols-2">
                                <TextInput label="Legenda" value={im.caption} onChange={(v) => upd((d) => void ((d.projects[i].images[ii].caption = v), (d.projects[i].images[ii].alt = v)))} />
                                <div className="flex items-end gap-2 pb-0.5 text-xs">
                                  <button type="button" disabled={ii === 0} className="rounded-md border border-line px-2.5 py-2 hover:bg-paper-2 disabled:opacity-30" onClick={() => upd((d) => void (d.projects[i].images = move(d.projects[i].images, ii, -1)))}>
                                    ↑ Subir
                                  </button>
                                  <button type="button" disabled={ii === pr.images.length - 1} className="rounded-md border border-line px-2.5 py-2 hover:bg-paper-2 disabled:opacity-30" onClick={() => upd((d) => void (d.projects[i].images = move(d.projects[i].images, ii, 1)))}>
                                    ↓ Descer
                                  </button>
                                  <button type="button" className="rounded-md border border-line px-2.5 py-2 text-red-700 hover:bg-red-50" onClick={() => upd((d) => void d.projects[i].images.splice(ii, 1))}>
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2">
                          <AddButton onClick={() => upd((d) => void d.projects[i].images.push({ url: "", alt: "", caption: "" }))}>Adicionar imagem</AddButton>
                        </div>
                      </fieldset>
                    </ItemShell>
                  );
                })}
              </div>
              <AddButton
                onClick={() =>
                  upd(
                    (d) =>
                      void d.projects.push({
                        id: newId("novo-projeto"),
                        featured: false,
                        title: "Novo projeto",
                        subtitle: "",
                        summary: "",
                        description: "",
                        type: "web",
                        status: "Concluído",
                        context: "",
                        role: "",
                        team: "",
                        stack: [],
                        features: [],
                        highlights: [],
                        challenges: [],
                        images: [],
                        github: "",
                        demo: "",
                      })
                  )
                }
              >
                Adicionar projeto
              </AddButton>
            </>
          )}

          {tab === "experiencia" && (
            <>
              <div className="space-y-3">
                {content.experience.map((e, i) => (
                  <ItemShell
                    key={e.id}
                    title={e.company}
                    subtitle={`${e.role} · ${e.period}`}
                    first={i === 0}
                    last={i === content.experience.length - 1}
                    onUp={() => upd((d) => void (d.experience = move(d.experience, i, -1)))}
                    onDown={() => upd((d) => void (d.experience = move(d.experience, i, 1)))}
                    onRemove={() => upd((d) => void d.experience.splice(i, 1))}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Empresa" value={e.company} onChange={(v) => upd((d) => void (d.experience[i].company = v))} />
                      <TextInput label="Cargo" value={e.role} onChange={(v) => upd((d) => void (d.experience[i].role = v))} />
                      <TextInput label="Período" value={e.period} onChange={(v) => upd((d) => void (d.experience[i].period = v))} placeholder="12/2019 – atual" />
                    </div>
                    <ImageField label="Logo" value={e.logo} onChange={(v) => upd((d) => void (d.experience[i].logo = v))} />
                    <StringList label="Responsabilidades e resultados" multiline items={e.bullets} onChange={(v) => upd((d) => void (d.experience[i].bullets = v))} />
                  </ItemShell>
                ))}
              </div>
              <AddButton onClick={() => upd((d) => void d.experience.push({ id: newId("exp"), company: "Nova empresa", role: "", period: "", logo: "", bullets: [] }))}>Adicionar experiência</AddButton>
            </>
          )}

          {tab === "formacao" && (
            <>
              <div className="space-y-3">
                {content.education.map((e, i) => (
                  <ItemShell
                    key={e.id}
                    title={e.course}
                    subtitle={`${e.institution} · ${e.period}`}
                    first={i === 0}
                    last={i === content.education.length - 1}
                    onUp={() => upd((d) => void (d.education = move(d.education, i, -1)))}
                    onDown={() => upd((d) => void (d.education = move(d.education, i, 1)))}
                    onRemove={() => upd((d) => void d.education.splice(i, 1))}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Curso" value={e.course} onChange={(v) => upd((d) => void (d.education[i].course = v))} />
                      <TextInput label="Instituição" value={e.institution} onChange={(v) => upd((d) => void (d.education[i].institution = v))} />
                      <TextInput label="Período" value={e.period} onChange={(v) => upd((d) => void (d.education[i].period = v))} />
                      <TextInput label="Status" value={e.status} onChange={(v) => upd((d) => void (d.education[i].status = v))} placeholder="Concluído / Em andamento" />
                    </div>
                    <ImageField label="Logo (opcional)" value={e.logo} onChange={(v) => upd((d) => void (d.education[i].logo = v))} />
                    <TextArea label="Observação" rows={2} value={e.note} onChange={(v) => upd((d) => void (d.education[i].note = v))} />
                  </ItemShell>
                ))}
              </div>
              <AddButton onClick={() => upd((d) => void d.education.push({ id: newId("edu"), institution: "Instituição", course: "Novo curso", period: "", status: "", logo: "", note: "" }))}>Adicionar formação</AddButton>
            </>
          )}

          {tab === "habilidades" && (
            <>
              <p className="text-sm text-ink-soft">Os ícones aparecem automaticamente para as tecnologias conhecidas (Java, Spring Boot, MySQL, Docker…).</p>
              <div className="space-y-3">
                {content.skills.map((g, i) => (
                  <ItemShell
                    key={g.id}
                    defaultOpen
                    title={g.category}
                    first={i === 0}
                    last={i === content.skills.length - 1}
                    onUp={() => upd((d) => void (d.skills = move(d.skills, i, -1)))}
                    onDown={() => upd((d) => void (d.skills = move(d.skills, i, 1)))}
                    onRemove={() => upd((d) => void d.skills.splice(i, 1))}
                  >
                    <TextInput label="Nome do grupo" value={g.category} onChange={(v) => upd((d) => void (d.skills[i].category = v))} />
                    <TagsInput label="Tecnologias" items={g.items} onChange={(v) => upd((d) => void (d.skills[i].items = v))} />
                  </ItemShell>
                ))}
              </div>
              <AddButton onClick={() => upd((d) => void d.skills.push({ id: newId("skill"), category: "Novo grupo", items: [] }))}>Adicionar grupo</AddButton>
            </>
          )}

          {tab === "certificacoes" && (
            <>
              <div className="space-y-3">
                {content.certifications.map((c, i) => (
                  <ItemShell
                    key={c.id}
                    defaultOpen
                    title={c.name}
                    subtitle={c.issuer}
                    first={i === 0}
                    last={i === content.certifications.length - 1}
                    onUp={() => upd((d) => void (d.certifications = move(d.certifications, i, -1)))}
                    onDown={() => upd((d) => void (d.certifications = move(d.certifications, i, 1)))}
                    onRemove={() => upd((d) => void d.certifications.splice(i, 1))}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Certificação" value={c.name} onChange={(v) => upd((d) => void (d.certifications[i].name = v))} />
                      <TextInput label="Emissor" value={c.issuer} onChange={(v) => upd((d) => void (d.certifications[i].issuer = v))} />
                    </div>
                  </ItemShell>
                ))}
              </div>
              <AddButton onClick={() => upd((d) => void d.certifications.push({ id: newId("cert"), name: "Nova certificação", issuer: "" }))}>Adicionar certificação</AddButton>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

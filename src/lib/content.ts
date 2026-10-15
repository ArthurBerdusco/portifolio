import { unstable_cache } from "next/cache";
import { defaultContent } from "./default-content";
import { readRaw } from "./store";
import type {
  Certification,
  ChallengePair,
  Education,
  Experience,
  Profile,
  Project,
  ProjectImage,
  ProjectType,
  SiteContent,
  SkillGroup,
} from "./types";

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, fb = ""): string => (typeof v === "string" ? v : fb);
const bool = (v: unknown, fb = false): boolean => (typeof v === "boolean" ? v : fb);
const strs = (v: unknown, fb: string[] = []): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : fb;
const list = <T>(v: unknown, map: (o: Obj, i: number) => T, fb: T[]): T[] =>
  Array.isArray(v) ? v.filter(isObj).map(map) : fb;

export function slugify(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const uid = (prefix: string, i: number) => `${prefix}-${Date.now().toString(36)}-${i}`;

/** Garante um objeto completo e seguro, mesmo se o que foi salvo estiver incompleto. */
export function normalize(input: unknown): SiteContent {
  const d = defaultContent;
  const s: Obj = isObj(input) ? input : {};
  const p: Obj = isObj(s.profile) ? s.profile : {};
  const soc: Obj = isObj(p.social) ? p.social : {};

  const profile: Profile = {
    name: str(p.name, d.profile.name),
    role: str(p.role, d.profile.role),
    headline: str(p.headline, d.profile.headline),
    intro: str(p.intro, d.profile.intro),
    availability: str(p.availability, d.profile.availability),
    contactIntro: str(p.contactIntro, d.profile.contactIntro),
    about: strs(p.about, d.profile.about),
    facts: list(p.facts, (o) => ({ label: str(o.label), value: str(o.value) }), d.profile.facts),
    location: str(p.location, d.profile.location),
    email: str(p.email, d.profile.email),
    phone: str(p.phone, d.profile.phone),
    whatsapp: str(p.whatsapp, d.profile.whatsapp).replace(/\D/g, ""),
    photo: str(p.photo, d.profile.photo),
    resumeUrl: str(p.resumeUrl, d.profile.resumeUrl),
    social: { github: str(soc.github, d.profile.social.github), linkedin: str(soc.linkedin, d.profile.social.linkedin) },
    siteTitle: str(p.siteTitle, d.profile.siteTitle),
    siteDescription: str(p.siteDescription, d.profile.siteDescription),
  };

  const seen = new Set<string>();
  const projects: Project[] = list(
    s.projects,
    (o, i) => {
      let id = slugify(str(o.id) || str(o.title)) || uid("projeto", i);
      while (seen.has(id)) id = `${id}-${i + 1}`;
      seen.add(id);
      const type = (["web", "mobile", "desktop"] as const).includes(o.type as ProjectType) ? (o.type as ProjectType) : "web";
      return {
        id,
        featured: bool(o.featured),
        title: str(o.title),
        subtitle: str(o.subtitle),
        summary: str(o.summary),
        description: str(o.description),
        type,
        status: str(o.status),
        context: str(o.context),
        role: str(o.role),
        team: str(o.team),
        stack: strs(o.stack),
        features: strs(o.features),
        highlights: strs(o.highlights),
        challenges: list<ChallengePair>(o.challenges, (c) => ({ challenge: str(c.challenge), solution: str(c.solution) }), []),
        images: list<ProjectImage>(o.images, (im) => ({ url: str(im.url), alt: str(im.alt), caption: str(im.caption) }), []).filter(
          (im) => im.url
        ),
        github: str(o.github),
        demo: str(o.demo),
      };
    },
    d.projects
  );

  const experience: Experience[] = list(
    s.experience,
    (o, i) => ({
      id: str(o.id) || uid("exp", i),
      company: str(o.company),
      role: str(o.role),
      period: str(o.period),
      logo: str(o.logo),
      bullets: strs(o.bullets),
    }),
    d.experience
  );

  const education: Education[] = list(
    s.education,
    (o, i) => ({
      id: str(o.id) || uid("edu", i),
      institution: str(o.institution),
      course: str(o.course),
      period: str(o.period),
      status: str(o.status),
      logo: str(o.logo),
      note: str(o.note),
    }),
    d.education
  );

  const skills: SkillGroup[] = list(
    s.skills,
    (o, i) => ({ id: str(o.id) || uid("skill", i), category: str(o.category), items: strs(o.items) }),
    d.skills
  );

  const certifications: Certification[] = list(
    s.certifications,
    (o, i) => ({ id: str(o.id) || uid("cert", i), name: str(o.name), issuer: str(o.issuer) }),
    d.certifications
  );

  return { profile, projects, experience, education, skills, certifications };
}

/** Leitura sem cache (usada pelo backoffice). */
export async function getContentFresh(): Promise<SiteContent> {
  return normalize(await readRaw());
}

/** Leitura em cache (usada pelo site). O cache é invalidado quando o backoffice salva. */
export const getContent = unstable_cache(getContentFresh, ["site-content"], {
  tags: ["content"],
  revalidate: 3600,
});

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://arthurberdusco.vercel.app").replace(/\/$/, "");

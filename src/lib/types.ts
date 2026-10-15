export interface Social {
  github: string;
  linkedin: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  role: string; // cargo/headline curto (nav, SEO)
  headline: string; // título grande do hero
  intro: string; // parágrafo do hero
  availability: string; // selo "aberto a oportunidades"
  contactIntro: string; // texto da seção de contato
  about: string[]; // parágrafos
  facts: Fact[];
  location: string;
  email: string;
  phone: string;
  whatsapp: string; // somente dígitos com DDI, ex.: 5511932045718
  photo: string;
  resumeUrl: string;
  social: Social;
  siteTitle: string;
  siteDescription: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption: string;
}

export interface ChallengePair {
  challenge: string;
  solution: string;
}

export type ProjectType = "web" | "mobile" | "desktop";

export interface Project {
  id: string; // slug usado na URL
  featured: boolean;
  title: string;
  subtitle: string;
  summary: string; // 1–2 frases (cards)
  description: string; // texto do estudo de caso
  type: ProjectType;
  status: string;
  context: string; // ex.: "Projeto integrador · Senac"
  role: string;
  team: string;
  stack: string[];
  features: string[];
  highlights: string[];
  challenges: ChallengePair[];
  images: ProjectImage[];
  github: string;
  demo: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
  status: string;
  logo: string;
  note: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface SiteContent {
  profile: Profile;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  certifications: Certification[];
}

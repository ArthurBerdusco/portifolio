// src/types/project.ts

export interface ProjectLinks {
  github?: string;
  demo?: string;
  deployed?: string;
  documentation?: string;
  video?: string;
  presentation?: string;
  figma?: string;
  website?: string;
}

export interface Technology {
  name: string;
  version: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectDuration {
  start: string;
  end?: string;
}

export interface ProjectTeam {
  size: number;
  role: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  type: 'web' | 'mobile' | 'desktop' | 'fullstack';
  status: 'concluído' | 'em desenvolvimento' | 'planejado';
  technologies: Technology[];
  features: ProjectFeature[];
  links: ProjectLinks;
  images: ProjectImage[];
  thumbnail?: string;
  duration: ProjectDuration;
  highlights: string[];
  role: string;
  team: ProjectTeam;
  challenges: string[];
  solutions: string[];
  learnings: string[];
}
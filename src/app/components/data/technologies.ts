// src/data/technologies.ts
import { IconType } from 'react-icons';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiGithub,
  SiDocker,
  SiPrisma,
  SiExpress,
  SiMysql,
  SiVisualstudiocode,
  SiVite,
  SiFigma,
  SiPostman,
  SiSpringboot,
  SiMicrosoftsqlserver,
  SiInsomnia,
  SiBootstrap,
  SiPython,
} from 'react-icons/si';

import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

export interface Technology {
  name: string;
  icon: IconType;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ferramentas';
  proficiency: 'básico' | 'intermediário' | 'avançado';
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "HTML5",
    icon: SiHtml5,
    category: "frontend",
    proficiency: "avançado"
  },
  {
    name: "CSS3",
    icon: SiCss3,
    category: "frontend",
    proficiency: "avançado"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "frontend",
    proficiency: "avançado"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
    proficiency: "intermediário"
  },
  {
    name: "React",
    icon: SiReact,
    category: "frontend",
    proficiency: "avançado"
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
    category: "frontend",
    proficiency: "avançado"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    proficiency: "intermediário"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
    proficiency: "intermediário"
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    category: "frontend",
    proficiency: "intermediário"
  },
  {
    name: "Sass",
    icon: SiSass,
    category: "frontend",
    proficiency: "intermediário"
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "frontend",
    proficiency: "intermediário"
  },

  // Backend
  {
    name: "Springboot",
    icon: SiSpringboot,
    category: "backend",
    proficiency: "avançado"
  },
  {
    name: "Java",
    icon: SiNodedotjs,
    category: "backend",
    proficiency: "avançado"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "backend",
    proficiency: "intermediário"
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "backend",
    proficiency: "intermediário"
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "backend",
    proficiency: "intermediário"
  },
  {
    name: "Python",
    icon: SiPython,
    category: "backend",
    proficiency: "básico"
  },

  // Database
  {
    name: "MySQL",
    icon: SiMysql,
    category: "database",
    proficiency: "intermediário"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "database",
    proficiency: "básico"
  },
  {
    name: "SQLServer",
    icon: SiMicrosoftsqlserver,
    category: "database",
    proficiency: "básico"
  },
  {
    name: "H2 Database",
    icon: FaDatabase,
    category: "database",
    proficiency: "básico"
  },

  // DevOps e Versionamento
  {
    name: "Git",
    icon: SiGit,
    category: "devops",
    proficiency: "avançado"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "devops",
    proficiency: "avançado"
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "devops",
    proficiency: "básico"
  },

  // Ferramentas
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    category: "ferramentas",
    proficiency: "avançado"
  },
  {
    name: "Figma",
    icon: SiFigma,
    category: "ferramentas",
    proficiency: "intermediário"
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "ferramentas",
    proficiency: "intermediário"
  },
  {
    name: "Insomnia",
    icon: SiInsomnia,
    category: "ferramentas",
    proficiency: "intermediário"
  }
];

// Função auxiliar para agrupar tecnologias por categoria
export const getTechnologiesByCategory = () => {
  return technologies.reduce((acc, technology) => {
    if (!acc[technology.category]) {
      acc[technology.category] = [];
    }
    acc[technology.category].push(technology);
    return acc;
  }, {} as Record<string, Technology[]>);
};

// Tradução das categorias para exibição
export const categoryTranslations = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  devops: "DevOps",
  ferramentas: "Ferramentas"
};
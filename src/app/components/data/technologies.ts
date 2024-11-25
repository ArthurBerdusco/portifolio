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
  colorIcon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ferramentas';
  proficiency: 'básico' | 'intermediário' | 'avançado';
}

export const technologies: Technology[] =   [
  //frontEnd
  {
  name: "HTML5",
  icon: SiHtml5,
  colorIcon: "#E34F26",
  category: "frontend",
  proficiency: "avançado"
},
{
  name: "CSS3",
  icon: SiCss3,
  colorIcon: "#1572B6",
  category: "frontend",
  proficiency: "avançado"
},
{
  name: "JavaScript",
  icon: SiJavascript,
  colorIcon: "#F7DF1E",
  category: "frontend",
  proficiency: "avançado"
},
{
  name: "TypeScript",
  icon: SiTypescript,
  colorIcon: "#3178C6",
  category: "frontend",
  proficiency: "intermediário"
},
{
  name: "React",
  icon: SiReact,
  colorIcon: "#61DAFB",
  category: "frontend",
  proficiency: "avançado"
},
{
  name: "React Native",
  icon: TbBrandReactNative,
  colorIcon: "#61DAFB",
  category: "frontend",
  proficiency: "avançado"
},
{
  name: "Next.js",
  icon: SiNextdotjs,
  colorIcon: "#000000",
  category: "frontend",
  proficiency: "intermediário"
},
{
  name: "Tailwind CSS",
  icon: SiTailwindcss,
  colorIcon: "#06B6D4",
  category: "frontend",
  proficiency: "intermediário"
},
{
  name: "Bootstrap",
  icon: SiBootstrap,
  colorIcon: "#7952B3",
  category: "frontend",
  proficiency: "intermediário"
},
{
  name: "Vite",
  icon: SiVite,
  colorIcon: "#646CFF",
  category: "frontend",
  proficiency: "intermediário"
},

// Backend
{
  name: "Springboot",
  icon: SiSpringboot,
  colorIcon: "#6DB33F",
  category: "backend",
  proficiency: "avançado"
},
{
  name: "Java",
  icon: FaJava,
  colorIcon: "#007396",
  category: "backend",
  proficiency: "avançado"
},
{
  name: "Node.js",
  icon: SiNodedotjs,
  colorIcon: "#339933",
  category: "backend",
  proficiency: "intermediário"
},
{
  name: "Express",
  icon: SiExpress,
  colorIcon: "#000000",
  category: "backend",
  proficiency: "intermediário"
},
{
  name: "Prisma",
  icon: SiPrisma,
  colorIcon: "#2D3748",
  category: "backend",
  proficiency: "intermediário"
},
{
  name: "Python",
  icon: SiPython,
  colorIcon: "#3776AB",
  category: "backend",
  proficiency: "básico"
},

// Database
{
  name: "MySQL",
  icon: SiMysql,
  colorIcon: "#4479A1",
  category: "database",
  proficiency: "intermediário"
},
{
  name: "MongoDB",
  icon: SiMongodb,
  colorIcon: "#47A248",
  category: "database",
  proficiency: "básico"
},
{
  name: "SQLServer",
  icon: SiMicrosoftsqlserver,
  colorIcon: "#CC2927",
  category: "database",
  proficiency: "básico"
},
{
  name: "H2 Database",
  icon: FaDatabase,
  colorIcon: "#0000FF",
  category: "database",
  proficiency: "básico"
},

// DevOps e Versionamento
{
  name: "Git",
  icon: SiGit,
  colorIcon: "#F05032",
  category: "devops",
  proficiency: "avançado"
},
{
  name: "GitHub",
  icon: SiGithub,
  colorIcon: "#181717",
  category: "devops",
  proficiency: "avançado"
},
{
  name: "Docker",
  icon: SiDocker,
  colorIcon: "#2496ED",
  category: "devops",
  proficiency: "básico"
},

// Ferramentas
{
  name: "VS Code",
  icon: SiVisualstudiocode,
  colorIcon: "#007ACC",
  category: "ferramentas",
  proficiency: "avançado"
},
{
  name: "Figma",
  icon: SiFigma,
  colorIcon: "#F24E1E",
  category: "ferramentas",
  proficiency: "intermediário"
},
{
  name: "Postman",
  icon: SiPostman,
  colorIcon: "#FF6C37",
  category: "ferramentas",
  proficiency: "intermediário"
},
{
  name: "Insomnia",
  icon: SiInsomnia,
  colorIcon: "#4000BF",
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
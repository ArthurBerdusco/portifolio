import { Project } from '@/app/components/types';
import {
  SiMysql,
  SiSpring,
  SiReact,
  SiDatabricks,
  SiThymeleaf,

} from 'react-icons/si';

import {
  FaJava,
  FaReact
} from 'react-icons/fa'

import imagem1 from '../../../../public/projeto1.webp';
import imagem2 from '../../../../public/projeto2.webp';
import imagem3 from '../../../../public/projeto3.avif';
import imagem4 from '../../../../public/projeto4.png';
import imagem5 from '../../../../public/projeto5.png';


export const projects: Project[] = [
  {
    id: 1,
    title: "RPG Harry Potter",
    subtitle: "Jogo RPG em terminal baseado no universo Harry Potter",
    description: "Jogo RPG desenvolvido em Java utilizando interface em terminal, com sistema de batalhas e enigmas",
    longDescription: "Um jogo RPG textual desenvolvido em Java puro, ambientado no universo de Harry Potter. O jogo apresenta um sistema de batalhas por turnos, enigmas para resolver e uma narrativa envolvente, tudo isso controlado através do terminal. Foi o primeiro projeto integrador do curso, focando em fundamentos de programação.",
    type: "desktop",
    status: "concluído",
    technologies: [
      { name: "Java", version: "8" }
    ],
    features: [
      {
        title: "Sistema de Batalhas",
        description: "Batalhas por turno com diferentes feitiços e estratégias"
      },
      {
        title: "Enigmas",
        description: "Sistema de puzzles e enigmas baseados no universo Harry Potter"
      },
      {
        title: "História Interativa",
        description: "Narrativa com diferentes caminhos e decisões"
      }
    ],
    links: {
      github: "https://github.com/seu-usuario/rpg-potter"
    },
    duration: {
      start: "2022-01",
      end: "2022-03"
    },
    highlights: [
      "Implementação completa de sistema de batalhas",
      "Narrativa interativa com múltiplos finais",
      "Sistema de progressão de personagem"
    ],
    role: "Desenvolvedor Backend",
    team: {
      size: 4,
      role: "Desenvolvedor"
    },
    challenges: [
      "Implementação de lógica de batalhas por turno",
      "Criação de sistema de enigmas interativos",
      "Gerenciamento de estado do jogo no terminal"
    ],
    solutions: [
      "Utilização de padrões de projeto para gerenciar estados",
      "Implementação de sistema modular para enigmas",
      "Uso de estruturas de dados para controle de progresso"
    ],
    learnings: [
      "Fundamentos de Java",
      "Lógica de programação",
      "Estruturas de controle e loops",
      "Orientação a objetos básica"
    ],
    images: [
      {
        url: imagem1.src,
        alt: 'Ola mundo',
        caption: 'kkk'
      }
    ]
  },
  {
    id: 2,
    title: "ToyStore PDV",
    subtitle: "Sistema PDV para loja de brinquedos",
    description: "Sistema de ponto de venda completo desenvolvido em Java Swing",
    longDescription: "PDV completo para loja de brinquedos desenvolvido com Java Swing e MySQL. O sistema inclui gestão de estoque, vendas, métodos de pagamento e relatórios, utilizando padrão DAO para acesso ao banco de dados.",
    type: "desktop",
    status: "concluído",
    technologies: [
      { name: "Java", version: "8" },
      { name: "Java Swing", version: "8" },
      { name: "MySQL", version: "5.7" }
    ],
    features: [
      {
        title: "Gestão de Estoque",
        description: "Controle completo de produtos e inventário"
      },
      {
        title: "Ponto de Venda",
        description: "Interface de vendas com múltiplos métodos de pagamento"
      },
      {
        title: "Relatórios",
        description: "Geração de relatórios de vendas e estoque"
      }
    ],
    links: {
      github: "https://github.com/seu-usuario/toystore-pdv"
    },
    duration: {
      start: "2022-04",
      end: "2022-06"
    },
    highlights: [
      "Interface gráfica intuitiva",
      "Sistema completo de gestão de estoque",
      "Múltiplos métodos de pagamento"
    ],
    role: "Desenvolvedor Full Stack",
    team: {
      size: 4,
      role: "Desenvolvedor"
    },
    challenges: [
      "Desenvolvimento de interface gráfica responsiva",
      "Implementação de padrão DAO",
      "Gestão de transações de banco de dados"
    ],
    solutions: [
      "Utilização de layouts do Swing para responsividade",
      "Implementação de camada de persistência com DAO",
      "Controle transacional para operações críticas"
    ],
    learnings: [
      "Desenvolvimento de interfaces gráficas",
      "Padrões de projeto DAO",
      "Banco de dados relacional",
      "CRUD operations"
    ],
    images: [
      {
        url: imagem2.src,
        alt: 'Ola mundo',
        caption: 'kkk'
      }
    ]
  },

  {
    id: 3,
    title: "PC Builder Advisor",
    subtitle: "Website de recomendação de builds de PC",
    description: "Sistema web para recomendação de configurações de computador baseado no perfil de uso",
    longDescription: "Aplicação web desenvolvida com Java Servlet que auxilia usuários na montagem de computadores, oferecendo recomendações personalizadas baseadas no perfil de uso, seja para gaming ou trabalho, utilizando banco de dados H2.",
    type: "web",
    status: "concluído",
    technologies: [
      { name: "Java", version: "8" },
      { name: "Servlet", version: "4.0" },
      { name: "H2 Database", version: "1.4" }
    ],
    features: [
      {
        title: "Recomendação Personalizada",
        description: "Sistema inteligente de sugestão de componentes"
      },
      {
        title: "Perfis de Uso",
        description: "Configurações otimizadas para diferentes necessidades"
      },
      {
        title: "Comparação de Builds",
        description: "Sistema de comparação entre diferentes configurações"
      }
    ],
    links: {
      github: "https://github.com/seu-usuario/pc-builder"
    },
    duration: {
      start: "2022-07",
      end: "2022-09"
    },
    highlights: [
      "Sistema de recomendação baseado em uso",
      "Interface web responsiva",
      "Banco de dados embarcado"
    ],
    role: "Desenvolvedor Backend",
    team: {
      size: 4,
      role: "Backend Developer"
    },
    challenges: [
      "Desenvolvimento web com Servlet puro",
      "Implementação de lógica de recomendação",
      "Gestão de sessões de usuário"
    ],
    solutions: [
      "Arquitetura MVC com Servlets",
      "Algoritmo de matching para recomendações",
      "Uso de cookies e sessões"
    ],
    learnings: [
      "Desenvolvimento web com Java",
      "Servlets e ciclo de vida web",
      "Gestão de sessões",
      "Banco de dados embedded"
    ],
    images: [
      {
        url: imagem3.src,
        alt: 'Ola mundo',
        caption: 'kkk'
      }
    ]
  },
  {
    id: 4,
    title: "Spring E-commerce",
    subtitle: "Plataforma de e-commerce com Spring Boot",
    description: "E-commerce completo desenvolvido com Spring Boot e Thymeleaf",
    longDescription: "Plataforma de e-commerce desenvolvida com Spring Boot, incluindo área administrativa e loja virtual. Sistema completo com gestão de produtos, carrinho de compras, autenticação de usuários e controle de estoque.",
    type: "fullstack",
    status: "concluído",
    technologies: [
      { name: "Spring Boot", version: "2.5" },
      { name: "Thymeleaf", version: "3.0" },
      { name: "MySQL", version: "8.0" },
      { name: "Spring Security", version: "5.5" }
    ],
    features: [
      {
        title: "Área Administrativa",
        description: "Painel completo de gestão de produtos e pedidos"
      },
      {
        title: "Loja Virtual",
        description: "Interface de compras com carrinho e checkout"
      },
      {
        title: "Gestão de Usuários",
        description: "Sistema de autenticação e autorização"
      }
    ],
    links: {
      github: "https://github.com/seu-usuario/spring-ecommerce"
    },
    duration: {
      start: "2023-01",
      end: "2023-03"
    },
    highlights: [
      "Sistema completo de e-commerce",
      "Autenticação segura",
      "Gestão de estoque em tempo real"
    ],
    role: "Desenvolvedor Full Stack",
    team: {
      size: 4,
      role: "Full Stack Developer"
    },
    challenges: [
      "Implementação de carrinho de compras",
      "Segurança com Spring Security",
      "Gestão de sessões de usuário"
    ],
    solutions: [
      "Uso de sessões para carrinho",
      "Configuração de autenticação e autorização",
      "Implementação de serviços RESTful"
    ],
    learnings: [
      "Spring Boot e seu ecossistema",
      "Thymeleaf templating",
      "Spring Security",
      "Desenvolvimento full stack"
    ],
    images: [
      {
        url: imagem4.src,
        alt: 'Ola mundo',
        caption: 'kkk'
      }
    ]
  },
  {
    id: 5,
    title: "School Van Connect",
    subtitle: "App mobile para conexão entre motoristas escolares e responsáveis",
    description: "Aplicativo React Native para conectar motoristas de van escolar e pais",
    longDescription: "Aplicativo mobile desenvolvido em React Native com backend em Spring Boot, facilitando a conexão entre motoristas de van escolar e pais. O sistema permite que motoristas gerenciem seus clientes e que pais encontrem transportadores escolares confiáveis.",
    type: "mobile",
    status: "concluído",
    technologies: [
      { name: "React Native", version: "0.68" },
      { name: "Spring Boot", version: "2.6" },
      { name: "H2 Database", version: "1.4" }
    ],
    features: [
      {
        title: "Gestão de Clientes",
        description: "Sistema para motoristas gerenciarem seus clientes"
      },
      {
        title: "Busca de Motoristas",
        description: "Sistema de busca e avaliação de motoristas"
      },
      {
        title: "Chat Integrado",
        description: "Sistema de comunicação entre pais e motoristas"
      }
    ],
    links: {
      github: "https://github.com/seu-usuario/school-van-connect"
    },
    duration: {
      start: "2023-04",
      end: "2023-06"
    },
    highlights: [
      "Aplicativo completo com backend",
      "Sistema de avaliações",
      "Chat em tempo real"
    ],
    role: "Desenvolvedor Mobile",
    team: {
      size: 4,
      role: "Mobile Developer"
    },
    challenges: [
      "Desenvolvimento mobile multiplataforma",
      "Integração com backend Spring",
      "Implementação de chat em tempo real"
    ],
    solutions: [
      "Utilização de React Native para código único",
      "APIs RESTful para comunicação",
      "WebSocket para chat em tempo real"
    ],
    learnings: [
      "Desenvolvimento mobile com React Native",
      "Integração mobile-backend",
      "UX/UI mobile",
      "Websockets e comunicação real-time"
    ],
    images: [
      {
        url: imagem5.src,
        alt: 'Ola mundo',
        caption: 'kkk'
      }
    ]
  }
];
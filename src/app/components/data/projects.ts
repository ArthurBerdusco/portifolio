import { Project } from '@/app/components/types';

import mestreDosMagos1 from '@/projeto1/inicio do jogo.png';
import mestreDosMagos2 from '@/projeto1/sala de aula.png';
import mestreDosMagos3 from '@/projeto1/hall da escola.png';
import mestreDosMagos4 from '@/projeto1/batalha com dragao.png';
import mestreDosMagos5 from '@/projeto1/sala do zelador.png'
import mestreDosMagos6 from '@/projeto1/desafio final.png';

import toyStore1 from '@/projeto2/tela de venda.png'
import toyStore2 from '@/projeto2/finalizar pagamento.png'
import toyStore3 from '@/projeto2/produtos.png'
import toyStore4 from '@/projeto2/editar produto.png'
import toyStore5 from '@/projeto2/tela clientes.png'
import toyStore6 from '@/projeto2/tela relatorios.png'
import toyStore7 from '@/projeto2/relatorio de venda.png'

import montagemPc1 from '@/projeto3/tela-principal.png';
import montagemPc2 from '@/projeto3/tela-usuario.png';
import montagemPc3 from '@/projeto3/Tela-login.png';
import montagemPc4 from '@/projeto3/tela-categorias.png';
import montagemPc5 from '@/projeto3/tela-de-cadastro.png';
import montagemPc6 from '@/projeto3/tela-especificacoes-pro.png';
import montagemPc7 from '@/projeto3/tela-especificacoes.png';
import montagemPc8 from '@/projeto3/er-logico.png';
import montagemPc9 from '@/projeto3/diagrama-uml.png';
import montagemPc10 from '@/projeto3/er-conceitual.png';

import ecommerce1 from '@/projeto4/principal.png';
import ecommerce2 from '@/projeto4/tela produto.png';
import ecommerce3 from '@/projeto4/carrinho.png';
import ecommerce4 from '@/projeto4/forma pagamento.png';
import ecommerce5 from '@/projeto4/resumo pedido.png';
import ecommerce6 from '@/projeto4/meus pedidos.png';
import ecommerce7 from '@/projeto4/detalhe pedido.png';
import ecommerce8 from '@/projeto4/backoffice home.png';
import ecommerce9 from '@/projeto4/backoffice usuarios.png';
import ecommerce10 from '@/projeto4/backoffice usuario editar.png';
import ecommerce11 from '@/projeto4/backoffice produtos.png';
import ecommerce12 from '@/projeto4/backoffice produto editar.png';
import ecommerce13 from '@/projeto4/backoffice pedidos.png';
import ecommerce14 from '@/projeto4/backoffice pedido editar.png';

import otio1 from '@/projeto5/login.jpeg';
import otio2 from '@/projeto5/cadastro.jpeg';
import otio3 from '@/projeto5/perueiro_home.jpeg';
import otio4 from '@/projeto5/perueiro_perfil.jpeg';
import otio5 from '@/projeto5/perueiro_escolasatendidas.jpeg';
import otio6 from '@/projeto5/perueiro_escolas_procurar.jpeg';
import otio7 from '@/projeto5/perueiro_escola_criancas.jpeg';
import otio8 from '@/projeto5/perueiro_minhavan.jpeg';
import otio9 from '@/projeto5/perueiro_ofertas.jpeg';
import otio10 from '@/projeto5/perueiro_organizarcriancas.jpeg';
import otio11 from '@/projeto5/responsavel_home.jpeg';
import otio12 from '@/projeto5/responsavel_crianca_perfil.jpeg';
import otio13 from '@/projeto5/responsavel_crianca_ausencias.jpeg';
import otio14 from '@/projeto5/responsavel_crianca_perueiro.jpeg';
import otio15 from '@/projeto5/responsavel_perfil.jpeg';

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
      github: "https://github.com/ArthurBerdusco/senac-projeto-1"
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
        url: mestreDosMagos1.src,
        alt: 'Tela inicial do jogo, mostrando o cenário de introdução.',
        caption: 'Início da aventura do jogo.'
      },
      {
        url: mestreDosMagos2.src,
        alt: 'Sala de aula, com elementos e personagens interativos.',
        caption: 'Explore o aprendizado e interações.'
      },
      {
        url: mestreDosMagos3.src,
        alt: 'Hall central da escola, com vários detalhes visuais.',
        caption: 'Navegue pelo hall e descubra segredos.'
      },
      {
        url: mestreDosMagos4.src,
        alt: 'Batalha contra um dragão poderoso no cenário do jogo.',
        caption: 'Teste suas habilidades na batalha final.'
      },
      {
        url: mestreDosMagos5.src,
        alt: 'Sala do zelador, repleta de elementos misteriosos.',
        caption: 'Descubra segredos escondidos na sala.'
      },
      {
        url: mestreDosMagos6.src,
        alt: 'O desafio final, confrontando o chefe principal.',
        caption: 'Enfrente o desafio épico e prove sua força.'
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
      github: "https://github.com/ArthurBerdusco/senac-projeto-2"
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
        url: toyStore1.src,
        alt: 'Tela principal da loja, exibindo os produtos disponíveis.',
        caption: 'Visualize e compre produtos de forma rápida.'
      },
      {
        url: toyStore2.src,
        alt: 'Tela de finalizar pagamento, com opções de métodos de pagamento.',
        caption: 'Finalize suas compras de maneira segura.'
      },
      {
        url: toyStore3.src,
        alt: 'Seção de produtos, mostrando todos os itens disponíveis.',
        caption: 'Explore os produtos disponíveis na loja.'
      },
      {
        url: toyStore4.src,
        alt: 'Tela para editar um produto na interface da loja.',
        caption: 'Edite as informações dos produtos facilmente.'
      },
      {
        url: toyStore5.src,
        alt: 'Tela de clientes, mostrando informações e registros.',
        caption: 'Gerencie e acompanhe seus clientes na plataforma.'
      },
      {
        url: toyStore6.src,
        alt: 'Tela de relatórios, com análises e gráficos detalhados.',
        caption: 'Acompanhe métricas e desempenho da sua loja.'
      },
      {
        url: toyStore7.src,
        alt: 'Relatório de vendas, com todos os detalhes das transações.',
        caption: 'Analise os relatórios e tome decisões estratégicas.'
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
      github: "https://github.com/ArthurBerdusco/senac-projeto-3"
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
        url: montagemPc1.src,
        alt: 'Tela principal do sistema, com navegação e atalhos essenciais.',
        caption: 'Acesse todas as funcionalidades do sistema rapidamente.'
      },
      {
        url: montagemPc2.src,
        alt: 'Tela do usuário, com informações e configurações pessoais.',
        caption: 'Gerencie sua conta e preferências no sistema.'
      },
      {
        url: montagemPc3.src,
        alt: 'Tela de login, solicitando credenciais do usuário.',
        caption: 'Faça login de forma rápida e segura.'
      },
      {
        url: montagemPc4.src,
        alt: 'Tela de categorias, facilitando a busca por produtos.',
        caption: 'Navegue facilmente entre categorias disponíveis.'
      },
      {
        url: montagemPc5.src,
        alt: 'Tela de cadastro de novos usuários ou produtos.',
        caption: 'Adicione facilmente novos cadastros ao sistema.'
      },
      {
        url: montagemPc6.src,
        alt: 'Tela de especificações profissionais detalhadas.',
        caption: 'Acompanhe especificações técnicas avançadas.'
      },
      {
        url: montagemPc7.src,
        alt: 'Tela de especificações comuns, com detalhes visuais.',
        caption: 'Detalhes práticos e essenciais das especificações.'
      },
      {
        url: montagemPc8.src,
        alt: 'Representação do ER lógico, mostrando entidades e relacionamentos.',
        caption: 'Entenda a estrutura de dados e suas conexões.'
      },
      {
        url: montagemPc9.src,
        alt: 'Diagrama UML do sistema, representando classes e interações.',
        caption: 'Visualize a arquitetura e relacionamentos das classes.'
      },
      {
        url: montagemPc10.src,
        alt: 'Diagrama ER conceitual, com foco no design do banco de dados.',
        caption: 'Entenda a estrutura conceitual das entidades e relacionamentos.'
      }
    ]
  },
  {
    id: 4,
    title: "E-commerce",
    subtitle: "Plataforma de e-commerce com Spring Boot",
    description: "E-commerce completo desenvolvido com Spring Boot e Thymeleaf",
    longDescription: "Plataforma de e-commerce desenvolvida com Spring Boot, incluindo área administrativa e loja virtual. Sistema completo com gestão de produtos, carrinho de compras, autenticação de usuários e controle de estoque.",
    type: "web",
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
      github: "https://github.com/ArthurBerdusco/senac-projeto-4"
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
        url: ecommerce1.src,
        alt: 'Tela principal da loja, com navegação e destaques.',
        caption: 'Explore os produtos e ofertas principais.'
      },
      {
        url: ecommerce2.src,
        alt: 'Tela do produto, com detalhes e imagens.',
        caption: 'Confira todas as informações sobre o produto.'
      },
      {
        url: ecommerce3.src,
        alt: 'Tela do carrinho, mostrando os itens adicionados.',
        caption: 'Revise e edite os produtos no seu carrinho.'
      },
      {
        url: ecommerce4.src,
        alt: 'Tela de formas de pagamento disponíveis.',
        caption: 'Escolha a forma de pagamento que preferir.'
      },
      {
        url: ecommerce5.src,
        alt: 'Resumo do pedido, com detalhes e valores.',
        caption: 'Confira todos os detalhes antes de finalizar.'
      },
      {
        url: ecommerce6.src,
        alt: 'Tela dos pedidos anteriores, com histórico completo.',
        caption: 'Acompanhe todos os seus pedidos realizados.'
      },
      {
        url: ecommerce7.src,
        alt: 'Detalhe do pedido, mostrando informações específicas.',
        caption: 'Visualize todos os detalhes do seu pedido.'
      },
      {
        url: ecommerce8.src,
        alt: 'Home do backoffice, painel de controle do administrador.',
        caption: 'Gerencie a loja e acompanhe as operações.'
      },
      {
        url: ecommerce9.src,
        alt: 'Backoffice de usuários, com gerenciamento de contas.',
        caption: 'Adicione, edite ou remova usuários facilmente.'
      },
      {
        url: ecommerce10.src,
        alt: 'Tela de edição de informações do usuário no backoffice.',
        caption: 'Atualize os dados e configurações do usuário.'
      },
      {
        url: ecommerce11.src,
        alt: 'Gerenciamento de produtos no backoffice.',
        caption: 'Administre todos os produtos da loja.'
      },
      {
        url: ecommerce12.src,
        alt: 'Tela para editar informações de produtos no backoffice.',
        caption: 'Modifique os detalhes dos produtos conforme necessário.'
      },
      {
        url: ecommerce13.src,
        alt: 'Gerenciamento de pedidos no backoffice.',
        caption: 'Acompanhe e atualize todos os pedidos da loja.'
      },
      {
        url: ecommerce14.src,
        alt: 'Tela de edição do pedido no backoffice.',
        caption: 'Edite os pedidos e acompanhe todos os detalhes.'
      }
    ]
  },
  {
    id: 5,
    title: "Van escolar",
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
      github: "https://github.com/ArthurBerdusco/projeto5"
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
        url: otio11.src,
        alt: 'Home do Responsável, com resumo das informações e acesso rápido.',
        caption: 'Acompanhe todas as atividades e detalhes importantes.'
      },
      {
        url: otio2.src,
        alt: 'Tela de cadastro do aplicativo, com informações pessoais.',
        caption: 'Cadastre-se para ter acesso completo ao sistema.'
      },
      {
        url: otio3.src,
        alt: 'Tela inicial do Perueiro, mostrando status e principais informações.',
        caption: 'Gerencie facilmente suas atividades e conexões.'
      },
      {
        url: otio4.src,
        alt: 'Perfil do Perueiro com detalhes e configurações.',
        caption: 'Atualize suas informações pessoais e perfil.'
      },
      {
        url: otio5.src,
        alt: 'Seção das escolas atendidas pelo Perueiro.',
        caption: 'Gerencie e visualize todas as escolas que atende.'
      },
      {
        url: otio6.src,
        alt: 'Tela para procurar escolas desejadas pelo Perueiro.',
        caption: 'Encontre novas oportunidades e conexões facilmente.'
      },
      {
        url: otio7.src,
        alt: 'Detalhes das crianças cadastradas pela escola atendida.',
        caption: 'Organize e acompanhe todas as crianças na rota.'
      },
      {
        url: otio8.src,
        alt: 'Minha Van: Tela do Perueiro para gerenciar sua frota.',
        caption: 'Configure e acompanhe todos os detalhes das vans.'
      },
      {
        url: otio9.src,
        alt: 'Ofertas do Perueiro disponíveis no sistema.',
        caption: 'Visualize todas as ofertas e propostas para conexões.'
      },
      {
        url: otio10.src,
        alt: 'Organize crianças de forma eficiente no sistema.',
        caption: 'Gerencie e organize facilmente todas as crianças.'
      },
      {
        url: otio1.src,
        alt: 'Tela de login do sistema, onde o usuário autentica.',
        caption: 'Faça login para acessar todas as funcionalidades.'
      },
      {
        url: otio12.src,
        alt: 'Perfil da criança do Responsável com informações específicas.',
        caption: 'Acompanhe todos os detalhes e atualizações importantes.'
      },
      {
        url: otio13.src,
        alt: 'Seção de ausências das crianças na escola.',
        caption: 'Gerencie ausências e atualize a frequência facilmente.'
      },
      {
        url: otio14.src,
        alt: 'Perfil das conexões entre Responsáveis e Perueiros.',
        caption: 'Facilite a comunicação e a interação entre eles.'
      },
      {
        url: otio15.src,
        alt: 'Perfil do Responsável, com todas as informações essenciais.',
        caption: 'Acompanhe detalhes e gerencie suas conexões.'
      }
    ]
  }
];

export default function getProject(id: string): Project {
  const project = projects.find((x) => x.id === Number(id));
  if (!project) {
    throw new Error("Project not found");
  }
  return project;
}

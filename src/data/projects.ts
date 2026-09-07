import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "pro-esporte-sabara",
    title: "Pro-Esporte Sabará",
    period: "10/2025 — presente",
    description:
      "Projeto interdisciplinar para divulgação de eventos esportivos e recomendação de treinos personalizados, com versões web e mobile. Participei do levantamento de requisitos, da modelagem do banco de dados com Sequelize e da integração entre front-end, back-end e o app mobile.",
    tags: ["React Native", "Node.js", "Express", "Sequelize", "MySQL"],
    accent: "#6cc79a",
    linkLabel: "repositório →",
    linkUrl: "https://github.com/Gu-Kleitin/Pro-Esporte",
  },
  {
    id: "catalogo-calistenia",
    title: "Catálogo de Calistenia",
    period: "2026",
    description:
      "Aplicação full stack para catalogar exercícios de calistenia e visualizar árvores de progressão e regressão entre movimentos. Modelei mais de 70 exercícios em MySQL com suas relações de dificuldade e implementei a visualização da árvore em SVG, além de uma API REST com CRUD completo e migrações incrementais.",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "MySQL"],
    accent: "#e0a458",
    linkLabel: "repositório →",
    linkUrl: "https://github.com/Gu-Kleitin/Catalogo-Calistenia",
    hasTreeAccent: true,
  },
  {
    id: "champions-league-api",
    title: "Champions League API",
    period: "2025",
    description:
      "API REST para consulta de clubes, jogadores e estatísticas da UEFA Champions League, construída com arquitetura em camadas para separar responsabilidades. Projeto focado em aprofundar organização e manutenção de APIs.",
    tags: ["Node.js", "TypeScript"],
    accent: "#7ba7d8",
    linkLabel: "readme →",
    linkUrl:
      "https://github.com/Gu-Kleitin/API-Champions-League/blob/main/readme.md",
  },
  {
    id: "gerenciador-podcasts",
    title: "Gerenciador de Podcasts (sem frameworks)",
    period: "2025",
    description:
      "API RESTful escrita com o módulo HTTP nativo do Node.js, sem frameworks — rotas GET, POST, PUT e DELETE implementadas na mão, com testes manuais de endpoints e validação de status codes e payloads no Postman.",
    tags: ["Node.js", "TypeScript", "HTTP nativo"],
    accent: "#c982b7",
    linkLabel: "readme →",
    linkUrl:
      "https://github.com/Gu-Kleitin/API_Gerenciador_de_Podcasts_ts_com_Node_sem_Frameworks/blob/main/readme.md",
  },
  {
    id: "sistema-bancario",
    title: "Sistema Bancário",
    period: "2025",
    description:
      "Sistema em Python para gerenciamento de usuários e contas, com depósito, saque e extrato usando listas e dicionários. Projeto de base para aprofundar lógica de programação e orientação a objetos.",
    tags: ["Python", "POO"],
    accent: "#d68b6b",
    linkLabel: "repositório →",
    linkUrl: "https://github.com/Gu-Kleitin/Sistema_Bancario/tree/corrigindo",
  },
];
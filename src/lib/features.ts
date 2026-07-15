export type Feature = {
  icon: string;
  title: string;
  description: string;
  wide?: boolean;
};

export const features: Feature[] = [
  {
    icon: "fa-film",
    title: "Catálogo sempre atualizado",
    description:
      "Explore milhares de filmes, séries e documentários, com novos lançamentos e títulos adicionados regularmente.",
  },
  {
    icon: "fa-tv",
    title: "Assista em qualquer dispositivo",
    description:
      "Acesse sua conta pela TV, computador, tablet ou smartphone e continue assistindo exatamente de onde parou.",
  },
  {
    icon: "fa-download",
    title: "Downloads para assistir offline",
    description:
      "Baixe seus filmes e séries favoritos para assistir quando quiser, mesmo sem conexão com a internet.",
  },
  {
    icon: "fa-user-group",
    title: "Perfis personalizados",
    description:
      "Crie perfis para toda a família com recomendações, histórico de exibição e listas individuais para cada usuário.",
  },
  {
    icon: "fa-star",
    title: "Recomendações inteligentes",
    description:
      "Descubra novos filmes, séries e documentários com sugestões personalizadas baseadas no que você mais assiste.",
  },
  {
    icon: "fa-clapperboard",
    title: "Imagem e som de alta qualidade",
    description:
      "Aproveite seus conteúdos favoritos com suporte para Full HD, 4K Ultra HD e áudio de alta qualidade.",
    wide: true,
  },
];
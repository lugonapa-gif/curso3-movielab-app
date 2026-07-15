export type Plan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  icon: string;
  features: string[];
  missing?: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Básico",
    description:
      "Ideal para quem deseja aproveitar filmes, séries e documentários com excelente custo-benefício.",
    monthlyPrice: 19,
    icon: "fa-play",
    features: [
      "Catálogo completo",
      "Qualidade HD",
      "1 tela simultânea",
      "Recomendações personalizadas",
    ],
    missing: [
      "Downloads offline",
      "Qualidade 4K Ultra HD",
    ],
    cta: "Assinar Agora",
    ctaHref: "/contato",
  },
  {
    id: "pro",
    name: "Padrão",
    description:
      "Ideal para quem deseja mais qualidade e compartilhar a experiência em casa.",
    monthlyPrice: 39,
    icon: "fa-tv",
    highlighted: true,
    features: [
      "Tudo do plano Básico",
      "Qualidade Full HD",
      "2 telas simultâneas",
      "Downloads offline",
      "Perfis personalizados",
      "Sem anúncios",
    ],
    cta: "Assinar Padrão",
    ctaHref: "/contato",
  },
  {
    id: "enterprise",
    name: "Premium",
    description:
      "A experiência completa para quem busca máxima qualidade de imagem e som.",
    monthlyPrice: 59,
    icon: "fa-crown",
    features: [
      "Tudo do plano Padrão",
      "Qualidade 4K Ultra HD",
      "Áudio espacial",
      "4 telas simultâneas",
      "Downloads ilimitados",
      "Conteúdos exclusivos",
    ],
    cta: "Assinar Premium",
    ctaHref: "/contato",
  },
];

export const comparisonRows = [
  {
    feature: "Qualidade de vídeo",
    starter: "HD",
    pro: "Full HD",
    enterprise: "4K Ultra HD",
  },
  {
    feature: "Telas simultâneas",
    starter: "1",
    pro: "2",
    enterprise: "4",
  },
  {
    feature: "Downloads offline",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Perfis personalizados",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Áudio espacial",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Conteúdos exclusivos",
    starter: false,
    pro: false,
    enterprise: true,
  },
] as const;

export const pricingFaqs = [
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim. Você pode cancelar sua assinatura quando desejar, sem multas ou taxas adicionais. O acesso permanece disponível até o término do período contratado.",
  },
  {
    question: "Em quantos dispositivos posso assistir ao mesmo tempo?",
    answer:
      "Cada plano oferece uma quantidade diferente de telas simultâneas. O plano Básico permite 1 tela, o Padrão até 2 telas e o Premium até 4 telas ao mesmo tempo.",
  },
  {
    question: "Posso assistir aos conteúdos sem internet?",
    answer:
      "Sim. Os planos Padrão e Premium permitem baixar filmes, séries e documentários para assistir offline em dispositivos compatíveis.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito, cartões de débito, PIX e carteiras digitais. Todos os pagamentos são processados em um ambiente seguro e criptografado.",
  },
] as const;
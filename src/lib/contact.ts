export const contactChannels = [
  {
    icon: "fa-envelope",
    label: "E-mail",
    value: "suporte@movielab.com",
    href: "mailto:suporte@movielab.com",
    description: "Retorno em até 24 horas",
  },
  {
    icon: "fa-headset",
    label: "Central de Atendimento",
    value: "Equipe de Suporte",
    href: "/contato",
    description: "Atendimento especializado para assinantes",
  },
  {
    icon: "fa-circle-question",
    label: "Central de Ajuda",
    value: "Perguntas Frequentes",
    href: "/precos#faq",
    description: "Respostas para as dúvidas mais frequentes",
  },
] as const;

export const officeHours = {
  weekdays: "Segunda a Domingo, das 8h às 22h (BRT)",
  status: "Atendimento disponível",
  timezone: "America/Sao_Paulo",
} as const;

export const subjectOptions = [
  {
    value: "assinatura",
    label: "Assinatura",
  },
  {
    value: "cobranca",
    label: "Cobrança",
  },
  {
    value: "suporte",
    label: "Suporte Técnico",
  },
  {
    value: "conteudo",
    label: "Sugestão de Conteúdo",
  },
  {
    value: "parceria",
    label: "Parcerias",
  },
] as const;
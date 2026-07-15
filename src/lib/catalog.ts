export type CatalogItem = {
  id: string;
  title: string;
  genre: string;
  year: number;
  duration: string;
  rating: number;
  image: string;
  featured?: boolean;
};

export const catalog: CatalogItem[] = [
  {
    id: "eclipse-final",
    title: "Eclipse Final",
    genre: "Ação",
    year: 2026,
    duration: "2h 12min",
    rating: 9.4,
    image:
      "https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    id: "alem-da-noite",
    title: "Além da Noite",
    genre: "Suspense",
    year: 2025,
    duration: "1h 56min",
    rating: 8.9,
    image:
      "https://images.unsplash.com/photo-1670871361579-54da7b070608?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "codigo-origem",
    title: "Código Origem",
    genre: "Ficção Científica",
    year: 2026,
    duration: "2h 18min",
    rating: 9.2,
    image:
      "https://images.unsplash.com/photo-1636793298539-63fda2e150fd?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "ultima-missao",
    title: "Última Missão",
    genre: "Ação",
    year: 2025,
    duration: "2h 05min",
    rating: 8.8,
    image:
      "https://images.unsplash.com/photo-1583872341575-610c859c7a57?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "cidade-sombras",
    title: "Cidade das Sombras",
    genre: "Drama",
    year: 2026,
    duration: "2h 09min",
    rating: 9.1,
    image:
      "https://images.unsplash.com/photo-1705844010832-87554d5903bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "fronteira-zero",
    title: "Fronteira Zero",
    genre: "Aventura",
    year: 2025,
    duration: "2h 01min",
    rating: 8.7,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "oceano-profundo",
    title: "Oceano Profundo",
    genre: "Documentário",
    year: 2025,
    duration: "1h 43min",
    rating: 9.5,
    image:
      "https://images.unsplash.com/photo-1665356753521-da6c796c0001?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "imperio-estelar",
    title: "Império Estelar",
    genre: "Ficção Científica",
    year: 2026,
    duration: "2h 26min",
    rating: 9.3,
    image:
      "https://images.unsplash.com/photo-1527092035324-6319ef0fcf7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
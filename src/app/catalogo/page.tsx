import type { Metadata } from "next";
import Link from "next/link";
import { CatalogSection } from "@/components/CatalogSection";

export const metadata: Metadata = {
  title: "Catálogo | MovieLab",
  description:
    "Explore o catálogo MovieLab com filmes, séries e documentários.",
};

export default function CatalogoPage() {
  return (
    <>
      <section className="border-b border-zinc-800 bg-zinc-950 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Catálogo MovieLab
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Filmes, séries e documentários para todos os momentos.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Explore nossa seleção de títulos organizados por gênero. Descubra
            novos lançamentos, grandes sucessos e conteúdos para maratonar
            quando quiser.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CatalogSection />
        </div>
      </section>

      <section className="border-t border-zinc-800 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Gostou do catálogo?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Assine um dos planos MovieLab e tenha acesso ilimitado a todo o
            catálogo, com lançamentos, clássicos e conteúdos exclusivos.
          </p>

          <Link
            href="/precos"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 font-semibold text-white transition hover:bg-red-500"
          >
            Ver planos
          </Link>
        </div>
      </section>
    </>
  );
}
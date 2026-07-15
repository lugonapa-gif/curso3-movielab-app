import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80"
          alt="Cinema"
          fill
          priority
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-[#E50914]/40 bg-[#E50914]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#E50914]">
            Streaming Premium
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
            Filmes, séries e histórias para todos os momentos.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore um catálogo repleto de sucessos, lançamentos e produções
            exclusivas. Assista quando quiser, onde estiver e viva uma nova
            experiência de entretenimento.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/precos"
              className="inline-flex items-center gap-3 rounded-md bg-[#E50914] px-8 py-3 font-bold text-white transition duration-300 hover:bg-[#C40812]"
            >
              <i className="fa-solid fa-play" />
              Assinar agora
            </Link>

            <Link
              href="/#features"
              className="inline-flex items-center gap-3 rounded-md bg-white/15 px-8 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/25"
            >
              <i className="fa-solid fa-circle-info" />
              Saiba mais
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-tv" />
              Conteúdo em 4K
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-download" />
              Downloads offline
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-mobile-screen-button" />
              Todos os dispositivos
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
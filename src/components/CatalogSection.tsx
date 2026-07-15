import Image from "next/image";
import Link from "next/link";
import { catalog } from "@/lib/catalog";

export function CatalogSection() {
  return (
    <section>
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Em destaque
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-white">
          Encontre sua próxima maratona
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
          Dos grandes sucessos aos lançamentos mais aguardados, explore uma
          seleção de títulos para todos os estilos e momentos.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {catalog.map((movie) => (
          <article
            key={movie.id}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-900/15"
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {movie.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  Destaque
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white">
                  {movie.title}
                </h3>

                <span className="flex items-center gap-1 text-sm font-semibold text-red-400">
                  <i className="fa-solid fa-star text-xs" />
                  {movie.rating}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-300">
                {movie.genre}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                {movie.year} • {movie.duration}
              </p>

              <Link
                href="/precos"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-red-500"
              >
                <i className="fa-solid fa-play text-xs" />
                Assistir agora
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
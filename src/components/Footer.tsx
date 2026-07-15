import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-zinc-800 bg-black py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-2xl font-extrabold text-white">
            Movie<span className="text-red-500">Lab</span>
          </p>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Descubra filmes, séries, documentários e grandes lançamentos em uma
            experiência completa de entretenimento para assistir quando e onde
            quiser.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Navegação
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Início
              </Link>
            </li>

            <li>
              <Link href="/catalogo" className="transition hover:text-white">
                Catálogo
              </Link>
            </li>

            <li>
              <Link href="/precos" className="transition hover:text-white">
                Planos
              </Link>
            </li>

            <li>
              <Link href="/contato" className="transition hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Explorar
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/catalogo" className="transition hover:text-white">
                Filmes
              </Link>
            </li>

            <li>
              <Link href="/catalogo" className="transition hover:text-white">
                Séries
              </Link>
            </li>

            <li>
              <Link href="/catalogo" className="transition hover:text-white">
                Documentários
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-zinc-600 sm:px-6 lg:px-8">
        © 2026 MovieLab • Todos os direitos reservados.
      </p>
    </footer>
  );
}
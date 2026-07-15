export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-red-800 via-red-700 to-zinc-950 p-8 shadow-2xl shadow-red-950/40 sm:p-12 md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Receba novidades do MovieLab
            </h2>

            <p className="mt-4 text-lg text-zinc-200">
              Cadastre seu e-mail para receber novidades, lançamentos, dicas e
              conteúdos exclusivos sobre filmes, séries e o universo do
              entretenimento.
            </p>
          </div>

          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-end"
            action="#"
            method="post"
          >
            <div className="flex-1 text-left">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-white"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seuemail@email.com"
                className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:shrink-0"
            >
              Quero receber
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
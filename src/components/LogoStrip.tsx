import { logoNames } from "@/lib/site";

export function LogoStrip() {
  return (
    <section
      className="border-b border-slate-800 bg-[#141414] py-14"
      aria-label="Estúdios parceiros"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Assista aos maiores sucessos dos melhores estúdios
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {logoNames.map((name) => (
            <span
              key={name}
              className="cursor-default text-lg font-bold tracking-wide text-slate-500 transition duration-300 hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
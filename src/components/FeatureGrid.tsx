import { features } from "@/lib/features";
import { FeatureCard } from "./FeatureCard";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="border-b border-zinc-800 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Recursos
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tudo o que você precisa para aproveitar o MovieLab
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Descubra uma experiência completa de entretenimento com filmes, séries e documentários organizados para você assistir quando e onde quiser.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
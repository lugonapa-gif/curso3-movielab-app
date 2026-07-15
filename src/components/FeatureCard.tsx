import type { Feature } from "@/lib/features";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-red-600/40 hover:shadow-2xl hover:shadow-red-950/20 ${
        feature.wide ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
        <i
          className={`fa-solid ${feature.icon} text-xl`}
          aria-hidden="true"
        />
      </div>

      <h3 className="text-xl font-bold text-white transition group-hover:text-red-400">
        {feature.title}
      </h3>

      <p className="mt-3 leading-relaxed text-zinc-400">
        {feature.description}
      </p>
    </article>
  );
}
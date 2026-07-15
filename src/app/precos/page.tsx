import type { Metadata } from "next";
import { PricingComparison, PricingCta } from "@/components/PricingComparison";
import { PricingFaq } from "@/components/PricingFaq";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Escolha o plano MovieLab ideal para você e aproveite filmes, séries e documentários com a melhor qualidade.",
};

export default function PrecosPage() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, #E50914, transparent)",
        }}
        aria-hidden="true"
      />

      <section className="border-b border-zinc-800 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            Planos
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Escolha o plano perfeito para você
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Assista aos seus filmes, séries e documentários favoritos quando e
            onde quiser. Compare os benefícios de cada plano e encontre a opção
            ideal para sua experiência no MovieLab.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Compare nossos planos
            </h2>

            <p className="mt-3 text-zinc-400">
              Veja rapidamente as diferenças entre cada assinatura.
            </p>
          </div>

          <div className="mt-12">
            <PricingComparison />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Perguntas frequentes
            </h2>

            <p className="mt-3 text-zinc-400">
              Tire suas dúvidas antes de escolher seu plano.
            </p>
          </div>

          <div className="mt-12">
            <PricingFaq />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingCta />
        </div>
      </section>
    </>
  );
}
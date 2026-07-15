import type { Metadata } from "next";
import Link from "next/link";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a equipe MovieLab para tirar dúvidas, obter suporte ou enviar sugestões.",
};

export default function ContatoPage() {
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
            Contato
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Estamos prontos para ajudar você
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Tire dúvidas sobre sua assinatura, envie sugestões ou entre em
            contato com nossa equipe de suporte. Responderemos o mais rápido
            possível.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-white">
              Canais de atendimento
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Escolha a forma de contato mais conveniente para você.
            </p>

            <div className="mt-8">
              <ContactChannels />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white">
                Envie sua mensagem
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Nossa equipe está disponível para esclarecer dúvidas, resolver
                problemas e receber sugestões para melhorar sua experiência no
                MovieLab.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-zinc-600 lg:text-left">
              Atendimento disponível todos os dias para oferecer a melhor
              experiência aos nossos assinantes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-zinc-400">
            Ainda não escolheu seu plano?{" "}
            <Link
              href="/precos"
              className="font-semibold text-red-600 transition hover:text-red-500"
            >
              Conheça nossos planos →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
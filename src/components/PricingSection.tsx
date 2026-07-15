"use client";

import Link from "next/link";
import { useState } from "react";
import { plans } from "@/lib/pricing";

type BillingCycle = "monthly" | "annual";

function formatPrice(monthly: number | null, cycle: BillingCycle) {
  if (monthly === null) return null;
  if (monthly === 0) return "0";
  if (cycle === "annual") return String(Math.round(monthly * 10));
  return String(monthly);
}

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="border-b border-zinc-900 bg-zinc-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Escolha seu plano
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Assista onde quiser, quando quiser.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Filmes, séries e lançamentos exclusivos com a qualidade e a
            experiência que você merece.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-zinc-800 bg-black p-1">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                cycle === "monthly"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Mensal
            </button>

            <button
              type="button"
              onClick={() => setCycle("annual")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                cycle === "annual"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        {cycle === "annual" && (
          <div className="mt-4 text-center">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              Economize o equivalente a 2 meses grátis
            </span>
          </div>
        )}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = formatPrice(plan.monthlyPrice, cycle);
            const isCustom = plan.monthlyPrice === null;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-red-600/60 bg-gradient-to-b from-red-600/10 via-zinc-900 to-black shadow-2xl shadow-red-900/20"
                    : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-600"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <span className="rounded-b-xl bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
                      Mais assistido
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10 text-red-500">
                    <i
                      className={`fa-solid ${plan.icon} text-2xl`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {plan.description}
                  </p>

                  <div className="mt-8 flex items-end gap-2">
                    {isCustom ? (
                      <span className="text-4xl font-extrabold text-white">
                        Sob consulta
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-extrabold text-white">
                          R${price}
                        </span>

                        <span className="pb-2 text-zinc-500">
                          /{cycle === "annual" ? "ano" : "mês"}
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <i
                          className="fa-solid fa-check mt-1 shrink-0 text-red-500"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}

                    {plan.missing?.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zinc-600"
                      >
                        <i
                          className="fa-solid fa-xmark mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-500"
                        : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { subjectOptions } from "@/lib/contact";

type FormState = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  email: "",
  assunto: "assinatura",
  mensagem: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-zinc-900/70 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/15 text-red-500">
          <i className="fa-solid fa-check text-2xl" aria-hidden="true" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          Mensagem enviada!
        </h3>

        <p className="mt-3 text-zinc-400">
          Obrigado,
          <span className="font-semibold text-white">
            {" "}
            {form.nome || " visitante"}
          </span>
          . Nossa equipe responderá em breve através do e-mail{" "}
          <span className="font-semibold text-white">
            {form.email || " informado"}
          </span>
          .
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="mt-8 text-sm font-semibold text-red-500 transition hover:text-red-400"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nome"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Nome
        </label>

        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/30"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          E-mail
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="voce@email.com"
          className="w-full appearance-none rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 pr-10 text-white focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/30"
        />
      </div>

      <div>
        <label
          htmlFor="assunto"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Assunto
        </label>

        <div className="relative">
          <select
            id="assunto"
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
            className="w-full appearance-none rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 pr-10 text-white focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/30"
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <i
            className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Mensagem
        </label>

        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Escreva sua mensagem..."
          className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensagem
            <i
              className="fa-solid fa-paper-plane text-sm"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-white transition hover:opacity-90"
        >
          Movie<span className="text-red-500">Lab</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-red-500 transition hover:border-red-500 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <i
              className={`fa-solid ${
                open ? "fa-xmark" : "fa-bars"
              } text-lg`}
              aria-hidden="true"
            />

            <span className="sr-only">
              {open ? "Fechar menu" : "Abrir menu"}
            </span>
          </button>

          {open && (
            <nav
              id="mobile-nav"
              aria-label="Principal (mobile)"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-52 overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 transition last:border-none hover:bg-zinc-900 hover:text-red-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
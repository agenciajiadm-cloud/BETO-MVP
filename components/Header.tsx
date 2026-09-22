"use client";

import { useState } from "react";
import Link from "next/link";
import { LINKEDIN } from "@/lib/story";

const links = [
  { href: "/#negocio", label: "Operação" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/ecommerce", label: "Serviços" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto bg-transparent text-preto md:border-b md:border-branco/15 md:bg-petroleo md:text-branco">
        <div className="container-rm flex h-12 items-center justify-between md:h-16">
          <Link
            href="/#negocio"
            onClick={(e) => {
              close();
              if (typeof window === "undefined") return;
              if (window.location.pathname !== "/") return;
              e.preventDefault();
              if (window.location.hash !== "#negocio") {
                history.replaceState(null, "", "#negocio");
              }
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            className="text-[20px] font-medium leading-none tracking-[-0.02em] md:text-[22px]"
          >
            <span className="md:hidden">BETO</span>
            <span className="hidden md:inline">Roberto Machado</span>
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/35"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-[3px] block h-[1.5px] w-5 origin-center bg-preto transition-transform duration-200 md:bg-branco ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[13px] block h-[1.5px] w-5 origin-center bg-preto transition-transform duration-200 md:bg-branco ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="pointer-events-auto border-t border-black/10 bg-branco text-preto md:border-branco/15 md:bg-fundo md:text-branco">
          <div className="container-rm flex flex-col gap-5 py-8 text-[15px] tracking-[-0.02em] md:items-end md:py-10 md:text-[16px]">
            {links.map((item) =>
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="hover:opacity-70"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="hover:opacity-70"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="btn-pill btn-ghost w-fit"
            >
              Conversar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

import Link from "next/link";
import { LINKEDIN } from "@/lib/story";

export function Footer() {
  return (
    <footer className="border-t border-branco/10 bg-fundo text-branco">
      <div className="container-rm flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-medium tracking-[-0.02em]">Roberto Machado</p>
          <p className="mt-2 text-sm text-branco/55">
            Estratégia e operações digitais
          </p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-branco/55">
          Do diagnóstico ao resultado, um e-commerce mais forte.
        </p>
        <div className="flex gap-6 text-sm tracking-[-0.02em]">
          <Link href="/ecommerce" className="hover:opacity-70">
            E-commerce
          </Link>
          <Link href="/funil" className="hover:opacity-70">
            Funil
          </Link>
          <Link href="/experiencia" className="hover:opacity-70">
            Experiência
          </Link>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:opacity-70">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { LINKEDIN } from "@/lib/story";

export function Footer() {
  return (
    <footer className="bg-preto text-branco">
      <div className="container-rm flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold">Roberto Machado</p>
          <p className="mt-1 text-sm text-branco/60">
            Estratégia e operações digitais
          </p>
        </div>
        <p className="max-w-sm text-sm text-branco/60">
          Do diagnóstico ao resultado, um e-commerce mais forte.
        </p>
        <div className="flex gap-5 text-sm">
          <Link href="/ecommerce" className="hover:underline">
            E-commerce
          </Link>
          <Link href="/funil" className="hover:underline">
            Funil
          </Link>
          <Link href="/experiencia" className="hover:underline">
            Experiência
          </Link>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

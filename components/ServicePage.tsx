import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LINKEDIN } from "@/lib/story";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  reads: string[];
  leaves: string[];
};

export function ServicePage({ eyebrow, title, lead, reads, leaves }: Props) {
  return (
    <>
      <Header />
      <main className="relative pt-[var(--header-h)]">
        <section className="container-rm grid items-center gap-16 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-[-0.02em] text-petroleo">{eyebrow}</p>
            <h1 className="mt-8 text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-mute">{lead}</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-fill mt-10"
            >
              Conversar
            </a>
          </div>
          <img
            src="/roberto.jpg"
            alt="Roberto Machado"
            className="aspect-[4/3] w-full rounded-[10px] border border-[var(--hairline)] object-cover object-top"
          />
        </section>
        <section className="container-rm grid gap-16 pb-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-[-0.02em] text-petroleo">O que eu leio</p>
            <ul className="mt-5 space-y-3">
              {reads.map((item) => (
                <li key={item} className="border-b border-[var(--hairline)] pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium tracking-[-0.02em] text-petroleo">O que sai do trabalho</p>
            <ul className="mt-5 space-y-3">
              {leaves.map((item) => (
                <li key={item} className="border-b border-[var(--hairline)] pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="container-rm pb-20">
          <Link href="/#trabalhar" className="text-sm tracking-[-0.02em] text-petroleo hover:opacity-70">
            Voltar para a história
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

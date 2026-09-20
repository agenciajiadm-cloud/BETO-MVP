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
      <main className="bg-cinza pt-[var(--header-h)]">
        <section className="container-rm grid items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-petroleo">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-md text-mute">{lead}</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-petroleo px-4 py-2 text-sm text-branco"
            >
              Conversar
            </a>
          </div>
          <img
            src="/roberto.jpg"
            alt="Roberto Machado"
            className="aspect-[4/3] w-full object-cover object-top"
          />
        </section>
        <section className="container-rm grid gap-12 pb-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-petroleo">O que eu leio</p>
            <ul className="mt-4 space-y-3">
              {reads.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-petroleo">O que sai do trabalho</p>
            <ul className="mt-4 space-y-3">
              {leaves.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="container-rm pb-16">
          <Link href="/#trabalhar" className="text-sm text-petroleo underline">
            Voltar para a história
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { formats, LINKEDIN, sectors, services, type Quadrant } from "@/lib/story";

type Props = {
  quadrant: Quadrant;
  index: number;
  stage: number;
};

function Box({ on, children }: { on: boolean; children: ReactNode }) {
  return <article className={`talk-box ${on ? "is-on" : ""}`}>{children}</article>;
}

function Boxes({ index, stage }: { index: number; stage: number }) {
  if (index === 8) {
    return (
      <>
        <Box on={stage === 0}>
          <p className="text-sm text-petroleo">Setores</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {sectors.map((s) => (
              <li key={s} className="border-b border-[var(--hairline)] py-2 text-left">
                {s}
              </li>
            ))}
          </ul>
        </Box>
        <Box on={stage === 1}>
          <p className="text-sm text-petroleo">Case</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] md:text-2xl">Galeria Tapera</h3>
          <p className="mt-2 text-sm text-mute">
            O cenário. O desafio. O que foi feito. O que mudou.
          </p>
        </Box>
        <Box on={stage === 2}>
          <p className="text-sm text-petroleo">Leitura</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] md:text-2xl">
            Problemas reais. Operações reais.
          </h3>
        </Box>
      </>
    );
  }

  if (index === 9) {
    return (
      <>
        <Box on={stage === 0}>
          <p className="text-sm text-petroleo">Formatos</p>
          <ul className="mt-3 space-y-2 text-sm">
            {formats.map((f) => (
              <li key={f} className="border-b border-[var(--hairline)] pb-2">
                {f}
              </li>
            ))}
          </ul>
        </Box>
        <Box on={stage === 1}>
          <p className="text-sm text-petroleo">Três portas</p>
          <div className="mt-3 space-y-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block border-b border-[var(--hairline)] pb-3">
                <p className="font-medium tracking-[-0.02em] text-petroleo">{s.name}</p>
                <p className="mt-1 text-sm text-mute">{s.line}</p>
              </Link>
            ))}
          </div>
        </Box>
        <Box on={stage === 2}>
          <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">Vamos conversar.</h3>
          <p className="mt-2 text-sm text-mute">Escolha o caminho ou fale direto.</p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="btn-pill btn-fill mt-5"
          >
            Conversar comigo
          </a>
        </Box>
      </>
    );
  }

  if (index === 10) {
    return (
      <>
        <Box on={stage === 0}>
          <img
            src="/roberto.jpg"
            alt="Roberto Machado"
            className="mb-5 aspect-[16/9] w-full rounded-[10px] object-cover object-top md:aspect-[4/3]"
          />
          <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">Pessoas constroem operações.</h3>
          <p className="mt-2 text-sm text-mute">
            Eu gosto de negócios difíceis de explicar em uma frase.
          </p>
        </Box>
        <Box on={stage === 1}>
          <p className="text-sm text-petroleo">Trajetória</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] md:text-2xl">
            Experiência, projetos, aprendizados.
          </h3>
          <p className="mt-2 text-sm text-mute">
            Mais de duas décadas entre loja, lead e a mesa da decisão.
          </p>
        </Box>
        <Box on={stage === 2}>
          <p className="text-sm text-petroleo">Propósito</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] md:text-2xl">Mais que currículo.</h3>
          <p className="mt-2 text-sm text-mute">
            Conectar estratégia, tecnologia, pessoas e operação para construir negócios
            mais sólidos e duradouros.
          </p>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box on={stage === 0}>
        <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">Tudo conectado. Vamos conversar?</h3>
        <p className="mt-2 text-sm text-mute">Seu negócio digital já possui muitas dessas peças.</p>
      </Box>
      <Box on={stage === 1}>
        <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
          A pergunta é: elas estão trabalhando juntas?
        </h3>
        <p className="mt-2 text-sm text-mute">Negócios digitais não crescem por partes.</p>
      </Box>
      <Box on={stage === 2}>
        <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">Vamos olhar sua operação juntos?</h3>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="btn-pill btn-fill mt-5"
        >
          Conversar comigo
        </a>
      </Box>
    </>
  );
}

export function TalkSector({ quadrant, index, stage }: Props) {
  return (
    <div className="container-rm flex h-full max-w-3xl flex-col items-center justify-center px-2 pb-10 pt-[calc(var(--header-h)+1.25rem)] text-center md:items-stretch md:px-0 md:py-16 md:text-left">
      <h2 className="text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] md:text-[48px]">{quadrant.name}</h2>
      <p className="mx-auto mt-5 max-w-md text-base text-mute md:mx-0 md:text-xl">{quadrant.subtitle}</p>
      <div className="talk-stack mt-8">
        <Boxes index={index} stage={stage} />
      </div>
    </div>
  );
}

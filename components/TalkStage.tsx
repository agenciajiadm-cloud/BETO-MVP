"use client";

import Link from "next/link";
import { formats, LINKEDIN, sectors, services } from "@/lib/story";

type Props = {
  quadrant: number;
  stage: number;
};

export function TalkStage({ quadrant, stage }: Props) {
  if (quadrant === 8) {
    if (stage === 0) {
      return (
        <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
          {sectors.map((s) => (
            <li key={s} className="border border-cinza bg-branco px-3 py-2">
              {s}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="mt-6 border-l-2 border-petroleo pl-4">
        <p className="text-xs text-petroleo">Case</p>
        <p className="mt-1 text-lg font-semibold">Galeria Tapera</p>
        <p className="mt-2 text-sm text-mute">
          O cenário, o desafio, o que foi feito e o que mudou.
        </p>
      </div>
    );
  }

  if (quadrant === 9) {
    if (stage === 0) {
      return (
        <ul className="mt-6 space-y-2 text-sm">
          {formats.map((f) => (
            <li key={f} className="border-b border-cinza pb-2">
              {f}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="mt-6 space-y-3">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="block border-b border-cinza pb-3">
            <p className="font-semibold text-petroleo">{s.name}</p>
            <p className="text-sm text-mute">{s.line}</p>
          </Link>
        ))}
      </div>
    );
  }

  if (quadrant === 11 && stage === 2) {
    return (
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex bg-petroleo px-4 py-2 text-sm text-branco"
      >
        Conversar comigo
      </a>
    );
  }

  return null;
}

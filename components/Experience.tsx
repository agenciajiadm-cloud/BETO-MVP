"use client";

import { quadrants } from "@/lib/story";
import { useReducedMotion, useSectorDrive } from "@/lib/use-sector-drive";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectorVisual } from "./SectorVisual";
import { TalkSector } from "./TalkSector";

export function Experience() {
  const reduce = useReducedMotion();
  const drive = useSectorDrive(reduce);
  const current = quadrants[drive.quadrant];
  const stage = current.stages[drive.stage];

  if (reduce) {
    return (
      <>
        <Header />
        <main className="pt-[var(--header-h)]">
          {quadrants.map((q) => (
            <section key={q.slug} id={q.slug} className="container-rm py-20">
              <h2 className="text-3xl font-medium tracking-[-0.02em]">{q.name}</h2>
              <p className="mt-5 text-xl font-medium tracking-[-0.02em]">{q.stages[0].title}</p>
              <p className="mt-2 text-mute">{q.stages[0].body}</p>
            </section>
          ))}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="deck-port">
        <div
          className="deck-track"
          style={{
            transform: `translate3d(0, calc(var(--slide) * -${drive.quadrant}), 0)`,
          }}
        >
          {quadrants.map((q, qi) => {
            const active = qi === drive.quadrant;
            const localStage = active ? drive.stage : qi < drive.quadrant ? 2 : 0;
            const local = active ? stage : q.stages[localStage];

            return (
              <section
                key={q.slug}
                id={q.slug}
                data-sector={qi}
                data-mode={q.mode}
                className="deck-slide"
              >
                {q.mode === "talk" ? (
                  <TalkSector quadrant={q} index={qi} stage={localStage} />
                ) : (
                  <div className="container-rm flex h-full flex-col items-center justify-center px-5 pb-10 pt-[calc(var(--header-h)+1.25rem)] text-center md:grid md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:items-center md:justify-stretch md:gap-12 md:px-0 md:py-16 md:text-left">
                    <div>
                      <h2 className="text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] md:text-[48px]">
                        {q.name}
                      </h2>
                      <div
                        key={`${q.id}-${localStage}`}
                        className={`mt-5 ${active ? "stage-in" : ""} md:mt-6`}
                      >
                        <h3 className="mx-auto max-w-md text-lg font-medium leading-snug tracking-[-0.02em] md:mx-0 md:text-[28px]">
                          {local.title}
                        </h3>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-mute md:mt-3 md:text-base">
                          {local.body}
                        </p>
                      </div>
                    </div>

                    <SectorVisual
                      sectorId={q.id}
                      stage={localStage}
                      onPick={(n) => active && drive.setStage(n)}
                    />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

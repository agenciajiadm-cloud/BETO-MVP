"use client";

import type { StoryPoint } from "@/lib/use-story-scroll";

type Props = {
  point: StoryPoint;
  night: boolean;
};

export function IsoCity({ point, night }: Props) {
  const index = point.quadrant * 3 + point.stage;
  const broken = point.quadrant === 2;
  const scale = 1 + Math.min(index, 8) * 0.012;

  return (
    <div className="relative grid h-full w-full place-items-center" aria-hidden>
      <div
        className="overflow-hidden"
        style={{
          width: "min(68vw, 720px)",
          aspectRatio: "16 / 10",
          transform: `scale(${scale})`,
          filter: broken
            ? "grayscale(0.45) contrast(1.1)"
            : night
              ? "grayscale(0.12) contrast(1.05)"
              : "none",
          transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease",
        }}
      >
        <img src="/house.jpg" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

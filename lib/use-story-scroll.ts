"use client";

import { useEffect, useState } from "react";
import { quadrants } from "./story";

export type StoryPoint = {
  quadrant: number;
  stage: number;
  local: number;
  global: number;
  growth: number;
};

const COUNT = quadrants.length;

export function useStoryScroll(reduce: boolean): StoryPoint {
  const [point, setPoint] = useState<StoryPoint>({
    quadrant: 0,
    stage: 0,
    local: 0,
    global: 0,
    growth: 0,
  });

  useEffect(() => {
    if (reduce) return;

    const read = () => {
      const vh = window.innerHeight || 1;
      const y = window.scrollY;
      const raw = y / vh;
      const max = COUNT * 3 - 0.001;
      const clamped = Math.min(max, Math.max(0, raw));
      const index = Math.floor(clamped);
      const quadrant = Math.min(COUNT - 1, Math.floor(index / 3));
      const stage = index % 3;
      const local = clamped - index;
      const global = clamped / (COUNT * 3);
      const growth = Math.min(1, clamped / 24);

      setPoint({ quadrant, stage, local, global, growth });
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [reduce]);

  return point;
}

export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduce;
}

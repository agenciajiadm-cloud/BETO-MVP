"use client";

import { useEffect, useRef, useState } from "react";
import { quadrants } from "./story";

const LAST = quadrants.length - 1;
const LOCK_MS = 640;

function indexFromHash() {
  if (typeof window === "undefined") return 0;
  const slug = window.location.hash.replace("#", "");
  const i = quadrants.findIndex((q) => q.slug === slug);
  return i >= 0 ? i : 0;
}

export function useSectorDrive(reduce: boolean) {
  const [quadrant, setQuadrant] = useState(0);
  const [stage, setStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const stageRef = useRef(0);
  const quadrantRef = useRef(0);
  const lock = useRef(false);

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    quadrantRef.current = quadrant;
  }, [quadrant]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduce) return;

    document.documentElement.classList.add("is-deck");
    document.body.classList.add("is-deck");
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const start = indexFromHash();
    setQuadrant(start);
    setStage(0);
    quadrantRef.current = start;
    stageRef.current = 0;

    return () => {
      document.documentElement.classList.remove("is-deck");
      document.body.classList.remove("is-deck");
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;

    const hold = () => {
      lock.current = true;
      window.setTimeout(() => {
        lock.current = false;
      }, LOCK_MS);
    };

    const syncHash = (index: number) => {
      const slug = quadrants[index]?.slug;
      if (!slug) return;
      const next = `#${slug}`;
      if (window.location.hash !== next) {
        history.replaceState(null, "", next);
      }
    };

    const go = (nextQ: number, nextS: number) => {
      setQuadrant(nextQ);
      setStage(nextS);
      quadrantRef.current = nextQ;
      stageRef.current = nextS;
      syncHash(nextQ);
      hold();
    };

    const step = (dir: 1 | -1) => {
      if (lock.current) return;
      const q = quadrantRef.current;
      const s = stageRef.current;

      if (dir === 1) {
        if (s < 2) {
          go(q, s + 1);
          return;
        }
        if (q < LAST) go(q + 1, 0);
        return;
      }

      if (s > 0) {
        go(q, s - 1);
        return;
      }
      if (q > 0) go(q - 1, 2);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      step(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "A" || tag === "BUTTON") return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        step(1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        step(-1);
      }
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const y = e.changedTouches[0]?.clientY ?? touchY;
      const dy = touchY - y;
      if (Math.abs(dy) < 48) return;
      step(dy > 0 ? 1 : -1);
    };

    const jumpToSlug = (slug: string) => {
      const i = quadrants.findIndex((q) => q.slug === slug);
      if (i < 0) return;
      go(i, 0);
    };

    const onHash = () => {
      jumpToSlug(window.location.hash.replace("#", ""));
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const url = new URL(href, window.location.origin);
      const homeSlug = quadrants[0]?.slug ?? "negocio";
      const isHomeReset =
        url.pathname === "/" &&
        (url.hash === "" || url.hash === "#" || url.hash === `#${homeSlug}`);

      if (isHomeReset && window.location.pathname === "/") {
        e.preventDefault();
        go(0, 0);
        return;
      }

      if (!href.includes("#")) return;
      const slug = href.split("#")[1];
      if (!quadrants.some((q) => q.slug === slug)) return;
      e.preventDefault();
      jumpToSlug(slug);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, [reduce]);

  return {
    quadrant,
    stage,
    isMobile,
    setStage: (n: number) => {
      setStage(Math.max(0, Math.min(2, n)));
    },
    total: quadrants.length,
  };
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

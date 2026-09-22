"use client";

import { useEffect } from "react";

export function Atmosphere() {
  useEffect(() => {
    const sync = () => {
      document.documentElement.classList.toggle("is-hidden", document.hidden);
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere-wash" />
      <div className="atmosphere-grid" />
      <div className="atmosphere-grain" />
    </div>
  );
}

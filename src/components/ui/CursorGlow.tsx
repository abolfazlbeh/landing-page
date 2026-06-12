"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (el) {
        el.style.transform = `translate(${posRef.current.x - 300}px, ${posRef.current.y - 300}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(var(--accent-rgb), 0.07) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

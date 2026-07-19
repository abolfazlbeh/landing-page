"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function CursorGlow() {
  const glowRef  = useRef<HTMLDivElement>(null);
  const posRef   = useRef({ x: 0, y: 0 });
  const rafRef   = useRef<number>(0);
  const pathname = usePathname();

  const isPersonal = pathname === "/personal";

  // Update the gradient colour whenever the route changes
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    el.style.background = isPersonal
      ? "radial-gradient(circle, rgba(var(--gold-rgb), 0.07) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(var(--accent-rgb), 0.07) 0%, transparent 70%)";
  }, [isPersonal]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      el.style.transform = `translate(${posRef.current.x - 300}px, ${posRef.current.y - 300}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const colorVar = isPersonal ? "var(--gold-rgb)" : "var(--accent-rgb)";

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(${colorVar}, 0.07) 0%, transparent 70%)`,
        willChange: "transform",
        transition: "background 0.6s ease",
      }}
    />
  );
}

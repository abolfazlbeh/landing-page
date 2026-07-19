"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Pill toggle that switches between /business and /personal.
 * Used at the top of both hero sections.
 */
export default function HeroToggle() {
  const pathname = usePathname();
  const isBusiness = pathname === "/business" || pathname === "/";

  return (
    <div
      className="inline-flex items-center rounded-full p-1"
      style={{
        border: "1px solid var(--border-strong)",
        backgroundColor: "rgba(var(--accent-rgb), 0.04)",
        backdropFilter: "blur(12px)",
      }}
      role="group"
      aria-label="Switch between Business and Personal"
    >
      <Link
        href="/business"
        aria-current={isBusiness ? "page" : undefined}
        className="relative px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2"
        style={
          isBusiness
            ? {
                background: "linear-gradient(135deg, #0891B2, #22D3EE)",
                color: "#F0F2F5",
                boxShadow: "0 2px 12px rgba(6,182,212,0.30)",
              }
            : { color: "var(--text-muted)" }
        }
      >
        Business
      </Link>

      <Link
        href="/personal"
        aria-current={!isBusiness ? "page" : undefined}
        className="relative px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2"
        style={
          !isBusiness
            ? {
                background: "linear-gradient(135deg, #D4A853, #F59E0B)",
                color: "#08090F",
                boxShadow: "0 2px 12px rgba(212,168,83,0.30)",
              }
            : { color: "var(--text-muted)" }
        }
      >
        Personal
      </Link>
    </div>
  );
}

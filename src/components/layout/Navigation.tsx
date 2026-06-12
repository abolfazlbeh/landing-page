"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "For Merchants", href: "#merchants" },
  { label: "Developers", href: "#developers" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    /*
     * The <header> is always full-width and fixed.
     * When scrolled: it becomes a transparent positioning shell with padding,
     *   and the inner pill container gets glass + rounded corners + shadow.
     * When at top: full-width transparent bar, no pill.
     */
    <header
      role="banner"
      className="fixed top-0 inset-x-0 z-50 flex items-start justify-center transition-all duration-500"
      style={{
        padding: scrolled ? "12px 16px 0" : "0",
        // No background on the shell — it lives on the pill
      }}
    >
      {/* ── PILL / NAV CONTAINER ── */}
      <div
        className="w-full flex items-center justify-between transition-all duration-500"
        style={{
          maxWidth: scrolled ? "1100px" : "none",
          height: scrolled ? "56px" : "72px",
          padding: scrolled ? "0 20px" : "0 2rem",
          // Full-width before scroll, pill after
          borderRadius: scrolled ? "999px" : "0px",
          // Glass on scroll
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.05) inset"
            : "none",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 rounded-sm flex-shrink-0"
          aria-label="DeMere home"
        >
          <span
            className="font-black tracking-tight transition-all duration-500"
            style={{
              fontSize: scrolled ? "18px" : "20px",
              color: "var(--text-primary)",
            }}
          >
            De<span className="text-gradient-teal">Mere</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 rounded-sm px-1 whitespace-nowrap"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: theme toggle + CTA */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <a
            href="#get-started"
            className="hidden lg:inline-flex btn-primary text-sm"
            style={{ padding: scrolled ? "8px 18px" : undefined }}
          >
            Start Accepting Payments
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-[72px] backdrop-blur-xl z-40 flex flex-col px-6 py-8 gap-6"
          style={{ backgroundColor: "var(--nav-bg)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold transition-colors"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#get-started"
            className="btn-primary text-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Start Accepting Payments
          </a>
        </div>
      )}
    </header>
  );
}

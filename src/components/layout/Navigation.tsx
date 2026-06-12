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
    const handleScroll = () => setScrolled(window.scrollY > 32);
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
    <header
      role="banner"
      className="fixed top-0 inset-x-0 z-50 h-[72px] flex items-center transition-all duration-[400ms]"
      style={{
        backdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-narrow w-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 rounded-sm"
          style={{ "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
          aria-label="DeMere home"
        >
          <span className="text-xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            De<span className="text-gradient-teal">Mere</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 rounded-sm px-1"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#get-started" className="hidden lg:inline-flex btn-primary text-sm">
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
          <a href="#get-started" className="btn-primary text-center mt-4" onClick={() => setMenuOpen(false)}>
            Start Accepting Payments
          </a>
        </div>
      )}
    </header>
  );
}

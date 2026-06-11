"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 h-[72px] flex items-center transition-all duration-400 ease-expo-out ${
        scrolled
          ? "backdrop-blur-xl bg-abyss/80 border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow w-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
          aria-label="DeMere home"
        >
          <span className="text-xl font-black text-snow tracking-tight">
            De<span className="text-gradient-teal">Mere</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-silver-mist text-sm font-medium hover:text-snow transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm px-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#get-started"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          Start Accepting Payments
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-silver-mist hover:text-snow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-[72px] bg-abyss/95 backdrop-blur-xl z-40 flex flex-col px-6 py-8 gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-snow hover:text-teal-bright transition-colors"
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

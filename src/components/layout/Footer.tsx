"use client";

import { usePathname } from "next/navigation";
import { ExternalLink, MessageCircle, Send, Share2 } from "lucide-react";

const businessLinks = {
  product: [
    { label: "How It Works",   href: "#how-it-works" },
    { label: "Pricing",        href: "#pricing"      },
    { label: "For Merchants",  href: "#merchants"    },
    { label: "For Developers", href: "#developers"   },
    { label: "PayPax Wallet",  href: "#wallet"       },
  ],
  resources: [
    { label: "Documentation",    href: "https://docs.paypax.xyz" },
    { label: "GitHub",           href: "https://github.com/paypax" },
    { label: "Business Overview", href: "#" },
    { label: "WPGP Protocol",    href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy",   href: "#" },
  ],
};

const personalLinks = {
  product: [
    { label: "How It Works",  href: "#how-it-works" },
    { label: "Wallet",        href: "#wallet"       },
    { label: "Multi-Chain",   href: "#multi-chain"  },
    { label: "Security",      href: "#security"     },
    { label: "For Business",  href: "/business"     },
  ],
  resources: [
    { label: "Download iOS",     href: "#" },
    { label: "Download Android", href: "#" },
    { label: "Documentation",    href: "https://docs.paypax.xyz" },
    { label: "WPGP Protocol",    href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy",   href: "#" },
  ],
};

const socialLinks = [
  { label: "Twitter / X", href: "https://twitter.com/paypax_io", icon: Share2     },
  { label: "GitHub",      href: "https://github.com/paypax",     icon: ExternalLink },
  { label: "Discord",     href: "#",                             icon: MessageCircle },
  { label: "Telegram",    href: "#",                             icon: Send         },
];

export default function Footer() {
  const pathname   = usePathname();
  const isPersonal = pathname === "/personal";

  const links = isPersonal ? personalLinks : businessLinks;

  const tagline = isPersonal
    ? "The non-custodial wallet for the WPGP payment network. Pay merchants in seconds, earn tokens, own your keys."
    : "The open payment gateway for merchants. Accept stablecoins directly, no middlemen.";

  return (
    <footer role="contentinfo" className="footer-root border-t">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="footer-logo text-xl font-black tracking-tight block mb-4"
              aria-label="PayPax home"
            >
              Pay
              {isPersonal
                ? <span className="text-gradient-gold">Pax</span>
                : <span className="text-gradient-teal">Pax</span>
              }
            </a>
            <p className="footer-body text-sm leading-relaxed mb-6">{tagline}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="footer-icon p-2 rounded-sm transition-colors focus-visible:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(["Product", "Resources", "Legal"] as const).map((col) => {
            const key = col.toLowerCase() as keyof typeof businessLinks;
            return (
              <div key={col}>
                <h3 className="footer-label text-xs font-semibold uppercase tracking-widest mb-4">
                  {col}
                </h3>
                <ul className="space-y-3">
                  {links[key].map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="footer-link text-sm transition-colors focus-visible:outline-none rounded-sm"
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="footer-divider flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="footer-label text-xs">© 2026 PayPax. All rights reserved.</p>
          <span className="footer-label text-xs flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: isPersonal ? "var(--gold)" : "var(--accent)" }}
            />
            Powered by WPGP
          </span>
        </div>
      </div>
    </footer>
  );
}

import { ExternalLink, MessageCircle, Send, Share2 } from "lucide-react";

const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "For Merchants", href: "#merchants" },
    { label: "For Developers", href: "#developers" },
    { label: "DeMere Wallet", href: "#wallet" },
  ],
  resources: [
    { label: "Documentation", href: "https://docs.demere.io" },
    { label: "GitHub", href: "https://github.com/wpgp" },
    { label: "Business Overview", href: "#" },
    { label: "WPGP Protocol", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { label: "Twitter / X", href: "https://twitter.com/demere_io", icon: Share2 },
  { label: "GitHub",      href: "https://github.com/wpgp",       icon: ExternalLink },
  { label: "Discord",     href: "#",                              icon: MessageCircle },
  { label: "Telegram",    href: "#",                              icon: Send },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="footer-root border-t"
    >
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="/" className="footer-logo text-xl font-black tracking-tight block mb-4" aria-label="DeMere home">
              De<span className="text-gradient-teal">Mere</span>
            </a>
            <p className="footer-body text-sm leading-relaxed mb-6">
              The open payment gateway for merchants. Accept stablecoins directly, no middlemen.
            </p>
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
            const key = col.toLowerCase() as keyof typeof footerLinks;
            return (
              <div key={col}>
                <h3 className="footer-label text-xs font-semibold uppercase tracking-widest mb-4">
                  {col}
                </h3>
                <ul className="space-y-3">
                  {footerLinks[key].map((l) => (
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

        {/* Bottom */}
        <div className="footer-divider flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="footer-label text-xs">© 2026 DeMere. All rights reserved.</p>
          <span className="footer-label text-xs flex items-center gap-2">
            <span className="footer-dot w-1.5 h-1.5 rounded-full animate-pulse" />
            Powered by WPGP
          </span>
        </div>
      </div>
    </footer>
  );
}

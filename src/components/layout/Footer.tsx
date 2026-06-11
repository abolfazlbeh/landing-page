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
  {
    label: "Twitter / X",
    href: "https://twitter.com/demere_io",
    icon: Share2,
  },
  {
    label: "GitHub",
    href: "https://github.com/wpgp",
    icon: ExternalLink,
  },
  {
    label: "Discord",
    href: "#",
    icon: MessageCircle,
  },
  {
    label: "Telegram",
    href: "#",
    icon: Send,
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.04] bg-deep-sea"
      role="contentinfo"
    >
      <div className="container-narrow py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-xl font-black text-snow tracking-tight block mb-4"
              aria-label="DeMere home"
            >
              De<span className="text-gradient-teal">Mere</span>
            </a>
            <p className="text-sm text-silver-mist leading-relaxed mb-6">
              The open payment gateway for merchants. Accept stablecoins
              directly, no middlemen.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2 text-pewter hover:text-teal-bright transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-pewter uppercase tracking-widest mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver-mist hover:text-snow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-pewter uppercase tracking-widest mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver-mist hover:text-snow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-pewter uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver-mist hover:text-snow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-pewter">
            © 2026 DeMere. All rights reserved.
          </p>
          <span className="text-xs text-pewter flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
            Powered by WPGP
          </span>
        </div>
      </div>
    </footer>
  );
}

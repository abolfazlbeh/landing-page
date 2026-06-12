import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import ThemeProvider from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "DeMere — Accept Crypto Payments Directly. No Middlemen.",
  description:
    "DeMere is the open payment gateway for merchants. Accept stablecoins with fees under 1%, instant settlement, and no chargebacks. Powered by the WPGP protocol on BNB Chain, Base, and Polygon.",
  keywords: [
    "crypto payment gateway",
    "accept crypto payments",
    "DeMere payments",
    "stablecoin payments",
    "merchant crypto",
    "USDC payment gateway",
    "WPGP protocol",
    "accept crypto payments no chargebacks",
    "low fee crypto gateway",
    "instant settlement blockchain payments",
  ],
  openGraph: {
    title: "DeMere — The Open Payment Gateway",
    description:
      "Accept crypto payments directly. 0.75% fees. Instant settlement. No middlemen. Powered by WPGP.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DeMere" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeMere — The Open Payment Gateway",
    description:
      "Accept crypto payments directly. 0.75% fees. Instant settlement. No middlemen. Powered by WPGP.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Satoshi */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        {/* JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/*
          Anti-flash script: runs synchronously before React hydrates.
          Reads localStorage and sets data-theme on <html> immediately,
          so the correct theme CSS variables are applied before first paint.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('demere-theme');
                  var theme = (saved === 'light' || saved === 'dark')
                    ? saved
                    : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

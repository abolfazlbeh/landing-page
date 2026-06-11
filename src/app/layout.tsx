import type { Metadata } from "next";
import "./globals.css";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeMere — The Open Payment Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeMere — The Open Payment Gateway",
    description:
      "Accept crypto payments directly. 0.75% fees. Instant settlement. No middlemen. Powered by WPGP.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-abyss text-snow antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

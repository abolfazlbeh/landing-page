# DeMere Landing Page — Design Guideline & Content Strategy

> **Project:** demere-landing
> **Brand:** DeMere
> **Protocol:** WPGP (Web3 Payment Gateway Protocol)
> **Purpose:** Marketing landing page for DeMere — the company behind WPGP
> **Target Audience:** Merchants, business owners, developers, wallet providers, and investors evaluating DeMere's payment infrastructure
> **Date:** June 2026

---

## 1. Design Philosophy

### Brand Identity: DeMere

**DeMere** is the brand and company name. **WPGP** is the underlying protocol. The landing page leads with the DeMere brand — it's what merchants remember, what developers search for, and what the business is built around. WPGP is referenced as the protocol powering DeMere's infrastructure.

**Naming Convention:**
- **DeMere** — The brand, company, product. Used in headlines, CTAs, navigation, logo.
- **WPGP** — The open protocol. Referenced in technical sections, documentation links, developer content.
- Example: "DeMere lets you accept crypto payments. Powered by the WPGP open protocol."

### Core Principles

**Confident & Minimal.**
Inspired by Phantom, ctrl.xyz, and 0.xyz — we lead with clarity, not noise. Every section earns its place. White space is a feature, not waste.

**Motion with Purpose.**
Inspired by Noomo Labs and Chromia — subtle animations guide the eye, reveal content progressively, and create a sense of technological sophistication. No gratuitous particle effects. Every animation communicates something.

**Dark-First, Light-Accented.**
Deep backgrounds with high-contrast text and vibrant accent gradients. This positions DeMere as modern, premium, and crypto-native without feeling "hacker terminal."

**Trust Through Transparency.**
Numbers, comparisons, and on-chain verifiability are the core trust signals — not logos of partners we don't have yet. The protocol speaks for itself.

---

## 2. Visual Identity

### Color Palette — "Midnight Teal"

A distinctive palette built around deep ocean tones and warm gold accents. This sets DeMere apart from the generic "blue crypto" aesthetic while conveying financial trust and technological depth.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background Primary** | Abyss | `#080B10` | Main page background |
| **Background Secondary** | Deep Sea | `#0D1117` | Card backgrounds, sections |
| **Background Tertiary** | Slate Deep | `#151C25` | Elevated surfaces, code blocks |
| **Surface** | Night Teal | `#0F2027` | Hero gradient base, special sections |
| **Text Primary** | Snow | `#F0F2F5` | Headlines, primary content |
| **Text Secondary** | Silver Mist | `#94A3B8` | Body text, descriptions |
| **Text Muted** | Pewter | `#64748B` | Captions, labels |
| **Accent Primary** | Teal Bright | `#14B8A6` | Primary CTAs, links, highlights |
| **Accent Secondary** | Gold Warm | `#D4A853` | Secondary emphasis, premium feel |
| **Gradient Start** | Teal Deep | `#0D9488` | Gradient start (buttons, borders) |
| **Gradient End** | Cyan Electric | `#06B6D4` | Gradient end |
| **Gold Gradient Start** | Amber | `#D4A853` | Premium/token-related accents |
| **Gold Gradient End** | Honey | `#F59E0B` | Premium gradient end |
| **Success** | Mint | `#34D399` | Positive metrics, confirmations |
| **Danger** | Coral | `#F87171` | Negative comparisons, warnings |
| **Border** | Frost | `#F0F2F508` | Card borders (3% opacity) |
| **Glow Teal** | Teal Glow | `#14B8A615` | Hover states (8% opacity) |
| **Glow Gold** | Gold Glow | `#D4A85310` | Premium hover states (6% opacity) |

### Gradient Definitions

- **Primary (Teal):** `linear-gradient(135deg, #0D9488, #06B6D4)` — Primary CTAs, hero accents
- **Premium (Gold):** `linear-gradient(135deg, #D4A853, #F59E0B)` — Token rewards, premium features
- **Background Flow:** `linear-gradient(180deg, #0D1117, #080B10)` — Section transitions
- **Hero Ambient:** `radial-gradient(ellipse at 30% 50%, #0D948815, transparent 60%)` — Subtle hero glow
- **Text Highlight:** `linear-gradient(90deg, #14B8A6, #06B6D4)` — Headline emphasis (sparingly)
- **Card Border:** `linear-gradient(135deg, #F0F2F510, #F0F2F503)` — Glassmorphic card edges

### Typography — Satoshi + General Sans

**Primary Font: Satoshi** (Indian Type Foundry, open source)
A modernist sans-serif that blends grotesk-style letterforms with geometric precision. It carries a distinctive personality while remaining highly legible — setting DeMere apart from the generic Inter/Outfit crowd.

**Secondary Font: General Sans** (for body text alternative if needed)
Clean, modern, with slightly warmer character than Inter. Pairs well with Satoshi.

**Mono Font: JetBrains Mono** (code, data, addresses)

| Role | Font | Weight | Size (Desktop) | Size (Mobile) |
|------|------|--------|----------------|---------------|
| **Display / Hero** | Satoshi | 900 (Black) | 72px / 80px line | 40px / 48px line |
| **H1** | Satoshi | 700 (Bold) | 56px / 64px | 36px / 44px |
| **H2 (Section Title)** | Satoshi | 700 | 40px / 48px | 28px / 36px |
| **H3 (Card Title)** | Satoshi | 500 (Medium) | 24px / 32px | 20px / 28px |
| **Body Large** | Satoshi | 400 (Regular) | 18px / 28px | 16px / 26px |
| **Body** | Satoshi | 400 | 16px / 24px | 15px / 24px |
| **Caption** | Satoshi | 500 | 14px / 20px | 13px / 18px |
| **Mono (Code/Data)** | JetBrains Mono | 400 | 14px / 20px | 13px / 18px |

**Why Satoshi:**
- Distinctive without being eccentric — reads as premium and intentional
- Not overused in crypto (unlike Inter, Outfit, or Space Grotesk)
- Geometric characters give it a modern fintech feel
- Open source (free for commercial use)
- Variable font available (performance-friendly)
- Works beautifully at both large display sizes and small body text

### Spacing System

Base unit: **4px**. All spacing is multiples of 4.

- Section padding: `120px` top/bottom (desktop), `64px` (mobile)
- Container max-width: `1200px`, centered
- Card padding: `32px` (desktop), `24px` (mobile)
- Component gap: `24px` standard, `48px` between groups
- Grid: 12-column, `24px` gutter

### Border Radius

- Small (badges, tags): `6px`
- Medium (buttons, inputs): `12px`
- Large (cards): `16px`
- XL (hero elements): `24px`

---

## 3. Animation & Interaction Guidelines

### Principles (Inspired by Noomo Labs & Chromia)

- **Entrance animations:** Elements fade in + translate up (20px) on scroll into viewport. Stagger children by 100ms.
- **Hover states:** Subtle glow effect on cards (box-shadow expansion). Buttons scale 1.02x with color shift.
- **Number counters:** Key metrics animate from 0 to final value when scrolled into view.
- **Parallax (light):** Hero background elements move at 0.3x scroll speed. No heavy parallax on content.
- **Scroll-triggered reveals:** Sections reveal as user scrolls. Use Intersection Observer with 20% threshold.
- **Cursor interactions:** Optional — subtle gradient follows cursor on hero section (like 0.xyz). Disable on mobile.

### Timing & Easing

- Default duration: `400ms`
- Entrance duration: `600ms`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Stagger delay: `100ms` between siblings

### Performance Rules

- No animation on elements below the fold until they enter viewport
- Use `transform` and `opacity` only (GPU-composited properties)
- Disable complex animations on `prefers-reduced-motion`
- No animation on mobile that causes layout shifts
- Lazy-load images and heavy assets

---

## 4. Component Design Language

### Cards

- Background: `#161B22` with `1px` border (`#FFFFFF0A`)
- Border radius: `16px`
- Padding: `32px`
- Hover: border shifts to gradient (`#3B82F630` → `#7C3AED30`), subtle glow shadow
- Optional: glassmorphism with `backdrop-filter: blur(12px)` on semi-transparent bg

### Buttons

**Primary CTA:**
- Background: gradient (`#0D9488` → `#06B6D4`) — Teal to Cyan
- Text: Snow white (`#F0F2F5`), Satoshi 500 weight
- Padding: `14px 28px`
- Border-radius: `12px`
- Hover: brightness(1.1) + scale(1.02) + teal glow shadow
- Active: scale(0.98)

**Secondary CTA:**
- Background: transparent
- Border: `1px solid #F0F2F515`
- Text: Snow white, Satoshi 500 weight
- Hover: background shifts to `#F0F2F508`, border brightens to teal

**Ghost:**
- No border, no background
- Text: Teal Bright (`#14B8A6`)
- Hover: underline or background `#14B8A608`

**Premium CTA (for token-related actions):**
- Background: gradient (`#D4A853` → `#F59E0B`) — Gold to Amber
- Text: Abyss (`#080B10`), Satoshi 600 weight
- Used sparingly for token rewards or premium features

### Navigation

- Fixed top, transparent on hero, blur background on scroll
- DeMere logo left, nav links center (desktop), CTA right
- Mobile: hamburger menu with full-screen overlay
- Active link: accent teal color underline
- Height: `72px` (desktop), `64px` (mobile)

### Stats / Metrics Display

- Large mono number (48px, bold)
- Caption below (14px, muted)
- Optional: animated counter on scroll
- Arrange in 3-4 column grid
- Subtle dividers between items

### Comparison Tables

- Dark card background
- Alternating row shade (very subtle)
- WPGP column highlighted with accent border or background tint
- Checkmarks in emerald, X marks in muted red
- Sticky header on scroll

---

## 5. Page Structure & Content Sections

The landing page is a single-page scrolling experience with distinct sections. Each section has one job and one CTA.

---

### Section 1: Hero

**Job:** Immediately communicate what DeMere is and why it matters. Capture attention in 3 seconds.

**Layout:** Full viewport height. Centered content. Subtle animated background (geometric mesh or flowing teal particles — very faint).

**Content:**

- **Tagline (above heading, muted, accent color):** `Powered by the WPGP Open Protocol`
- **Headline:** `Accept Crypto Payments. No Middlemen. No Delays.`
- **Subheadline:** `DeMere is the payment gateway where every transaction settles directly between customer wallet and merchant wallet — in seconds, with fees under 1%.`
- **Primary CTA:** `Start Accepting Payments` → docs / integration guide
- **Secondary CTA:** `Read the Overview` → business overview doc
- **Visual:** Abstract 3D illustration or animated diagram showing wallet → smart contract → merchant flow (simplified, teal-toned)

**Key Metrics Strip (below hero, edge-to-edge):**

| Metric | Value |
|--------|-------|
| Platform Fee | 0.75% (BNB) / 0.2% (L2s) |
| Settlement | < 5 seconds |
| Chargebacks | Impossible |
| Supported Chains | 3 (V2) |

---

### Section 2: Problem Statement

**Job:** Create tension. Show the merchant the pain they're living with today.

**Layout:** Two-column on desktop (text left, visual right). Stacked on mobile.

**Content:**

- **Section Label:** `The Problem`
- **Headline:** `Traditional Gateways Take Too Much and Give Too Little`
- **Body:**
  - 2.9% + $0.30 per transaction
  - 2-7 business days to get your own money
  - Chargebacks up to 120 days after a sale
  - Account frozen without warning
  - Cross-border fees stacked on top
- **Visual:** Animated infographic showing money flowing through 5 intermediaries (issuing bank → card network → processor → gateway → acquiring bank) — each taking a cut. Contrast with WPGP's single-hop path.

---

### Section 3: How WPGP Works

**Job:** Explain the solution in plain terms. Build confidence that it's real and simple.

**Layout:** 3-step horizontal flow (desktop), vertical stack (mobile). Each step is a card with icon + text.

**Content:**

- **Section Label:** `How It Works`
- **Headline:** `Three Steps. Direct Settlement. No Middle.`

**Step 1 — Merchant Signs**
- Icon: Key / signature
- Text: `Your backend signs a payment intent — amount, token, and invoice ID. This authorizes your wallet to receive payment.`

**Step 2 — Customer Pays**
- Icon: Wallet / tap
- Text: `Customer approves in their wallet. For stablecoins, a bundler submits the transaction — the customer pays zero gas.`

**Step 3 — Instant Settlement**
- Icon: Check / lightning
- Text: `The smart contract verifies, splits fees, and sends funds directly to your wallet. Done in seconds.`

**Below steps:** Animated flow diagram showing the full cycle (simplified version of the architecture diagram from business overview). Use teal accent color for the flow lines.

---

### Section 4: Fee Comparison

**Job:** Make the cost advantage undeniable. Numbers speak louder than claims.

**Layout:** Comparison table + visual chart.

**Content:**

- **Section Label:** `Pricing`
- **Headline:** `Pay Less. Keep More. No Surprises.`

**Comparison Table:**

| | Coinbase Commerce | BitPay | NOWPayments | DeMere (BNB) | DeMere (Base/Polygon) |
|---|---|---|---|---|---|
| Fee | 1% | 1% | 0.5% | 0.75% | 0.2% |
| Settlement | Minutes–Hours | 1 day | Minutes | Seconds | Seconds |
| Custody | Custodial | Custodial | Custodial | Non-custodial | Non-custodial |
| Hidden Fees | Withdrawal fees | FX spread + min invoice | Network fees | None | None |
| Account Risk | Can freeze | Can freeze | Can freeze | None (on-chain rights) | None (on-chain rights) |
| Open Protocol | No (proprietary) | No (proprietary) | No (proprietary) | Yes (WPGP) | Yes (WPGP) |
| Token Rewards | None | None | None | Yes (WPGP tokens) | Yes (WPGP tokens) |

**Fee Calculator (Interactive):**
- Slider: "Monthly payment volume: $____"
- Output: "You'd save $____ per month vs existing crypto gateways with DeMere"
- Shows: Coinbase Commerce cost vs DeMere cost side by side

**Bottom note:** `Fee is capped at $100 max per transaction. Non-custodial means your funds are never held by DeMere or any third party — ever.`

---

### Section 5: For Merchants

**Job:** Show merchants how easy integration is and what they get.

**Layout:** Feature grid (2x3 or 3x2 cards).

**Content:**

- **Section Label:** `For Merchants`
- **Headline:** `Built for Every Business`

**Feature Cards:**

1. **WooCommerce Plugin**
   - `Install and accept payments in 15 minutes. WordPress powers 43% of the web.`

2. **Shopify App**
   - `Native integration for 4.4M+ Shopify stores. One-click setup.`

3. **POS Device SDK**
   - `Accept in-person payments via QR codes and NFC. Works on tablets and phones.`

4. **Developer SDKs**
   - `TypeScript, Python, PHP, Ruby, Go. Custom integration in hours, not weeks.`

5. **Instant Settlement**
   - `Funds arrive in your wallet within seconds. No holding periods. No rolling reserves.`

6. **Token Rewards (Gold accent)**
   - `Earn WPGP tokens on every payment. Your effective fee decreases as the token grows.`

---

### Section 6: For Developers

**Job:** Attract developers and wallet providers. Show the protocol is open and easy to build on.

**Layout:** Split — left side has text + CTAs, right side shows a minimal code snippet visual (styled, not copyable code block — just visual).

**Content:**

- **Section Label:** `For Developers`
- **Headline:** `Open Protocol. Build Anything.`
- **Body:** `DeMere is powered by the WPGP open protocol. Any wallet, any frontend, any backend can integrate. No API keys. No approval process. The smart contract is the standard.`

**Integration Paths:**
- TypeScript SDK (`@wpgp/business-sdk`)
- Direct contract call (ABI is public)
- Deep link / QR code integration

**CTAs:**
- `View Documentation` → docs.demere.io
- `GitHub` → github.com/wpgp

**Visual:** Stylized code editor showing a simplified integration snippet (3-4 lines, illustrative — not meant to be copied directly from the landing page)

---

### Section 7: Multi-Chain

**Job:** Show WPGP works across multiple chains and merchants can choose.

**Layout:** Three cards side by side, each representing a chain.

**Content:**

- **Section Label:** `Multi-Chain`
- **Headline:** `One Protocol. Multiple Chains. Your Choice.`

**Chain Cards:**

| Chain | Fee | Settlement | Best For |
|-------|-----|-----------|----------|
| BNB Chain | 0.75% | ~3 seconds | General commerce |
| Base | 0.2% | ~2 seconds | Coinbase ecosystem, developers |
| Polygon | 0.2% | ~2 seconds | High volume, lowest cost |

**Bottom note:** `Same smart contract architecture. Same SDK. Same merchant experience. Choose the chain that fits your business.`

---

### Section 8: Trust & Security

**Job:** Address the "is this safe?" question head-on.

**Layout:** Icon grid (2x3) with brief explanations.

**Content:**

- **Section Label:** `Security`
- **Headline:** `Transparent, Auditable, Unstoppable`

**Trust Points:**

1. **Non-Custodial** — `No one holds your funds. Ever. Direct wallet-to-wallet settlement.`
2. **On-Chain Verification** — `Every payment is cryptographically verified by the smart contract.`
3. **Replay Protected** — `Unique nonces prevent duplicate charges. Impossible to double-spend.`
4. **Atomic Transactions** — `Either everything succeeds, or nothing changes. No partial states.`
5. **Open Source** — `Every line of contract code is public and auditable.`
6. **Permissionless Bundlers** — `No single point of failure. If one bundler is down, another picks up.`

---

### Section 9: DeMere Wallet

**Job:** Introduce the consumer wallet that completes the ecosystem. Show it's real and usable.

**Layout:** Split — phone mockup (right), text + feature list (left). Gold accent for the wallet since it's the consumer product.

**Content:**

- **Section Label:** `DeMere Wallet`
- **Headline:** `The Wallet Your Customers Already Love`
- **Body:** `DeMere Wallet is the non-custodial mobile wallet built for the WPGP payment experience. Customers pay merchants in seconds — no gas fees, no complexity, full custody of their funds.`

**Key Features:**

1. **Gasless Payments** — `Pay with USDC or USDT without holding BNB or ETH. DeMere covers the gas.`
2. **Non-Custodial** — `HD wallet with full self-custody. Your keys, your funds. Always.`
3. **Multi-Chain** — `Works on BNB Chain, Base, and Polygon. One wallet, any merchant.`
4. **QR & Deep Link** — `Scan a QR code at checkout, approve in one tap, done.`
5. **Token Rewards** — `Earn WPGP tokens on every payment. Build value just by paying.`
6. **Open Ecosystem** — `Any compatible wallet can pay DeMere merchants. DeMere Wallet is the best experience, but never the only option.`

**CTAs:**
- `Download for iOS` → App Store
- `Download for Android` → Play Store

**Visual:** Phone mockup showing wallet UI with payment confirmation screen. Teal and gold accents.

**Note:** Emphasize that DeMere Wallet is the reference implementation, but any ERC-4337 compatible wallet can pay DeMere merchants. The protocol is open.

---

### Section 10: CTA / Footer

**Job:** Convert. Give the visitor a clear next action.

**Layout:** Full-width gradient background section (teal-to-cyan gradient, subtle), centered content.

**Content:**

- **Headline:** `Ready to Accept Payments Without the Middlemen?`
- **Subline:** `Join the protocol. Start in minutes.`
- **Primary CTA:** `Get Started` → integration guide / docs
- **Secondary CTA:** `Download DeMere Wallet` → wallet download page

**Footer:**
- DeMere logo
- Links: Docs | GitHub | Business Overview | DeMere Wallet
- Social: Twitter/X | Discord | Telegram
- Legal: Terms | Privacy
- Protocol badge: `Powered by WPGP`
- Copyright: `© 2026 DeMere`

---

## 6. Reference Site Analysis

### What We Take from Each Reference

| Site | What We Borrow | What We Skip |
|------|---------------|--------------|
| **Phantom** | Clean hero with single clear message. Feature sections with icon + short text. Trust through simplicity. "Download" CTA clarity. | Card-heavy financial app aesthetic. Consumer wallet tone (too casual for B2B). |
| **Chromia** | Bold headline typography. Roadmap timeline design. Use case cards with hover states. Community section. Dark theme execution. | Long page with too many sections. "Build Brilliant" vagueness. Overly technical jargon. |
| **0.xyz** | Cursor-following gradient on hero. Minimal sections that breathe. Bold metric displays. Developer-first tone. | Extremely minimal (we need more content). Single-product focus. |
| **Noomo Labs** | Scroll-triggered animations. Parallax depth on hero. Reveal-on-scroll for sections. Creative use of 3D elements. | Agency portfolio style. Too experimental for a payment protocol. Heavy motion budget. |
| **ctrl.xyz** | Multi-product navigation. Chain ecosystem positioning. Stats bar with real numbers. Dark gradient backgrounds with accent pops. | Multi-product complexity. Too many CTAs competing. Dense information architecture. |

### Visual Mood

**Keywords:** Precise. Confident. Open. Dark. Gradient accents. Breathing space. Purposeful motion.

**NOT:** Playful. Cute. Neon-overloaded. Dashboard-heavy. Corporate blue. Generic crypto (no rockets, moons, or lambos).

---

## 7. Responsive Breakpoints

| Breakpoint | Name | Layout Notes |
|-----------|------|--------------|
| `≥1440px` | Desktop XL | Max-width container, extra breathing room |
| `≥1024px` | Desktop | Standard 12-col grid, side-by-side layouts |
| `≥768px` | Tablet | 2-col grids collapse to stacked where needed |
| `<768px` | Mobile | Single column, hamburger nav, reduced padding |

### Mobile-Specific Rules

- Hero headline: max 2 lines
- Navigation: full-screen overlay menu
- Cards: full-width, stacked vertically
- Tables: horizontal scroll or restructure to cards
- Animations: reduced (no parallax, simpler reveals)
- Touch targets: minimum 44px × 44px
- Section padding: 64px top/bottom (vs 120px desktop)

---

## 8. Technical Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR/SSG for SEO, React ecosystem, fast builds |
| **Styling** | TailwindCSS | Utility-first, dark mode built-in, responsive |
| **Animation** | Framer Motion | Scroll-triggered, performant, React-native |
| **3D / Visuals** | Three.js (optional, hero only) | Lightweight 3D elements if needed |
| **Deployment** | Vercel | Zero-config Next.js hosting, edge CDN |
| **Analytics** | Plausible or Fathom | Privacy-respecting, lightweight |
| **Font** | Satoshi (CDN Fonts / self-hosted) | Distinctive modernist sans-serif, not overused |
| **Icons** | Lucide | Consistent, lightweight, tree-shakeable |

### Performance Targets

- Lighthouse Performance: ≥ 95
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total bundle (JS): < 150KB gzipped
- No layout shifts from font loading (use `font-display: swap` + preload)

---

## 9. Content Tone & Voice

### Writing Style

- **Direct.** No filler words. Every sentence delivers value.
- **Confident but not arrogant.** State facts, don't hype. "0.75% fee" not "insanely low fees."
- **Merchant-first language.** "Your wallet," "your money," "your business." Not "our protocol" or "we deliver."
- **Plain English.** Avoid jargon unless the audience expects it. "Seconds, not days" is better than "sub-block-time finality."
- **Specific over vague.** "0.75% with a $100 cap" beats "low fees." Numbers build trust.

### Headlines Pattern

- Hero: Problem → Solution in one line
- Sections: Benefit-first, then explain
- Cards: Action + Outcome

### Word Choices

| Instead of... | Use... |
|---------------|--------|
| Utilize | Use |
| Leverage | Use / Build on |
| Cutting-edge | Modern |
| Revolutionary | Different / New approach |
| Seamless | Simple / Direct |
| Ecosystem | Network |
| Onboard | Start / Join |
| Trustless | Direct (no middlemen) |
| Permissionless | Open |

---

## 10. SEO & Meta Strategy

### Page Title
`DeMere — Accept Crypto Payments Directly. No Middlemen.`

### Meta Description
`DeMere is the open payment gateway for merchants. Accept stablecoins with fees under 1%, instant settlement, and no chargebacks. Powered by the WPGP protocol on BNB Chain, Base, and Polygon.`

### Open Graph

- **og:title:** `DeMere — The Open Payment Gateway`
- **og:description:** `Accept crypto payments directly. 0.75% fees. Instant settlement. No middlemen. Powered by WPGP.`
- **og:image:** Hero visual or branded card (1200x630px)
- **og:type:** `website`

### Target Keywords

- Primary: `crypto payment gateway`, `accept crypto payments`, `DeMere payments`
- Secondary: `stablecoin payments`, `merchant crypto`, `USDC payment gateway`, `WPGP protocol`
- Long-tail: `accept crypto payments no chargebacks`, `low fee crypto gateway`, `instant settlement blockchain payments`

### Structured Data

- Organization schema (DeMere)
- SoftwareApplication schema (for the WPGP protocol)
- FAQ schema (if FAQ section added)

---

## 11. Asset Requirements

### Illustrations / Visuals Needed

| Asset | Description | Usage |
|-------|-------------|-------|
| **Hero Visual** | Abstract 3D mesh or flow diagram showing wallet-to-wallet payment | Hero section background/right side |
| **Flow Diagram** | Animated 3-step process (sign → pay → settle) | How It Works section |
| **Problem Infographic** | Traditional payment chain (5 intermediaries) vs WPGP (direct) | Problem section |
| **Chain Logos** | BNB Chain, Base, Polygon — official logos | Multi-Chain section |
| **Feature Icons** | 12 custom icons (WooCommerce, Shopify, POS, SDK, settlement, tokens, security items) | Feature grids |
| **Comparison Visual** | Bar chart or visual showing fee savings | Pricing section |
| **OG Image** | Branded 1200x630 card | Social sharing |

### Logo

- Primary: "DeMere" wordmark + icon mark
- Tagline variant: "DeMere" with "Powered by WPGP" below (small, muted)
- Icon only: For favicon, small displays
- Light version: For dark backgrounds (primary use — teal accent on snow white)
- Dark version: For light backgrounds (rare use)
- Minimum size: 24px height
- Clear space: Minimum 1x icon-height on all sides

### Favicon

- 32x32 PNG
- 180x180 Apple Touch Icon
- SVG favicon for modern browsers

---

## 12. Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- Color contrast ratio: ≥ 4.5:1 for body text, ≥ 3:1 for large text
- All interactive elements keyboard-accessible
- Focus indicators visible (accent color outline)
- Images: meaningful alt text or `aria-hidden` for decorative
- Animations respect `prefers-reduced-motion`
- Semantic HTML (proper heading hierarchy, landmarks)
- Skip-to-content link
- Form inputs: associated labels
- Touch targets: minimum 44×44px on mobile

---

## 13. Summary: Page Flow at a Glance

```
┌─────────────────────────────────────────────────────┐
│  NAVIGATION (fixed, transparent → blur)             │
│  DeMere Logo | How It Works | Pricing | Docs | CTA │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § HERO                                             │
│  "Powered by WPGP" tag                              │
│  Headline + Sub + 2 CTAs + Metrics Strip            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § PROBLEM                                          │
│  Pain points + Traditional vs Direct visual         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § HOW IT WORKS                                     │
│  3 Steps + Animated flow diagram                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § PRICING                                          │
│  Comparison table (crypto gateways) + Calculator    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § FOR MERCHANTS                                    │
│  Feature grid (6 cards)                             │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § FOR DEVELOPERS                                   │
│  Open protocol + SDK paths + CTAs                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § MULTI-CHAIN                                      │
│  3 chain cards with specs                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § SECURITY                                         │
│  6 trust points with icons                          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § DEMERE WALLET                                    │
│  Phone mockup + features + download CTAs            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  § FINAL CTA                                        │
│  Headline + 2 buttons (teal gradient bg)            │
│                                                     │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
│  DeMere Logo | Links | Social | "Powered by WPGP"  │
└─────────────────────────────────────────────────────┘
```

---

*Document version: 1.0*
*Last updated: June 2026*
*Next step: Initialize Next.js project and implement section by section.*

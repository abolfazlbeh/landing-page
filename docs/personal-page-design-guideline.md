# PayPax Personal Page — Design Guideline & Story Flow

> **Route:** `/personal`
> **Brand:** PayPax · **Product:** PayPax Wallet
> **Protocol:** WPGP (Web3 Payment Gateway Protocol)
> **Audience:** Everyday people who want to pay with crypto without the friction — gas, seed-phrase anxiety, chain confusion.
> **Accent:** Gold (`--gold` / `--gold-rgb`), in contrast to the teal business page.
> **Date:** July 2026

---

## 0. Intent

The business page argues with numbers. **The personal page tells a story.**

Where `/business` convinces merchants with fees and settlement speed, `/personal`
makes a single person *feel* what it's like to pay with PayPax — the tap, the
instant confirmation, the quiet reward, the sense that their money is theirs.

The page is a scroll-driven narrative in **five acts**. As the visitor scrolls,
they follow one character through a day, and the product reveals itself inside
real moments of that day — never as a spec sheet, always as lived experience.

**Guiding sentence for every design decision:**
*"Would this make someone believe paying could actually feel this good?"*

---

## 1. Design Language (Personal Variant)

Inherits everything from the master guideline (`design-guideline.md`) with these
personal-page deltas.

### Palette Shift — Gold-First

| Role | Token | Dark | Light |
|------|-------|------|-------|
| Primary accent | `--gold` | `#D4A853` | `#B45309` |
| Accent light | `--gold-light` | `#F59E0B` | `#D97706` |
| Accent RGB (glows) | `--gold-rgb` | `212, 168, 83` | `180, 83, 9` |
| Gradient | `bg-gradient-gold` | `linear-gradient(135deg,#D4A853,#F59E0B)` | — |
| Text gradient | `.text-gradient-gold` | applied to hero emphasis words | — |

Teal (`--accent`) is **not** removed — it remains the color of the *merchant* side
of any diagram (the wallet the money flows *to*). This keeps the two-sided story
visually honest: gold is "you," teal is "them."

### Typography

Same stack — **Satoshi** display + body, **JetBrains Mono** for numbers/tokens.
Personal page leans harder on the **900 (Black)** display weight for emotional,
oversized statements ("Money that feels like yours.").

### Motion Budget (Higher Than Business)

The personal page is allowed a **richer motion budget** because it's a story, not
a reference. Every act earns its animation. All motion still respects
`prefers-reduced-motion` and uses only GPU-composited `transform` / `opacity`.

---

## 2. Scroll Choreography & 3D System

The spine of the page is **scroll-as-narrator**. Scroll position drives the story;
nothing autoplays. Reuse and extend the patterns already in the codebase.

### Reusable Motion Primitives (already built)

| Primitive | Component | Role on personal page |
|-----------|-----------|------------------------|
| Word-by-word rise | `SplitTextReveal` | Act headlines |
| Scroll word-highlight | `ScrollTextHighlight` | Act 6 closing narration |
| Pinned zoom + horizontal pan | `ImpactCarousel` pattern | Informs `HeroAndReel` (Act 1+2) |
| Scroll-scrubbed timeline | `TapToPay` (new) | Act 3 "the tap" payment moment |
| Full-bleed parallax + Ken Burns | `StatementBreak` (new) | Act 4 statement break |
| Sticky column + stepping features | `StickyFeaturePanel` | Act 5 feature reveal |
| Tilt on hover | `MagneticCard` | Act 5 cards, Act 1 phone |
| Count from zero | `AnimatedCounter` | Act 6 lifetime-impact numbers |

### New 3D Layer (personal-only)

- **Parallax phone (hero):** the PayPax Wallet device sits on a 3-layer parallax
  rig — background glow (`0.2x` scroll), phone body (`0.5x`), floating UI chips
  (`0.8x`). Creates depth without a 3D engine.
- **Perspective card tilt:** Act 5 cards use `transform: perspective(900px)
  rotateX/rotateY` driven by pointer position (extends `MagneticCard`). Tilt is
  capped at 8° and disabled on touch.
- **Scroll-linked device rotation:** as Act 2 enters, the phone rotates from
  `rotateY(-18deg)` to `rotateY(0)` — as if the customer turns the screen toward
  you. Pure CSS transform tied to an Intersection-Observer progress value.
- **Depth-of-field:** background photos sit behind a `backdrop-blur` layer that
  sharpens (`blur(8px) → blur(0)`) as a section becomes active.

### Timing

- Entrance: `600ms`, ease `cubic-bezier(0.16, 1, 0.3, 1)`.
- Scroll-linked transforms: no duration — bound 1:1 to scroll progress, smoothed
  with a single `requestAnimationFrame` loop (same approach as `ImpactCarousel`).
- Stagger between siblings: `100ms`.

### Performance Guardrails

- One shared RAF loop per pinned section; never a loop per element.
- `will-change: transform` only on actively animating layers.
- Lazy-mount below-the-fold acts; heavy 3D rigs hydrate on first intersection.
- Full motion disabled under `prefers-reduced-motion` → content fades in statically.

---

## 3. The Six-Act Story (Page Sections)

Each act = one full narrative beat. One job, one emotion, one CTA-worthy moment.

---

### Act 1 + Act 2 — "Meet PayPax" → "A Day With PayPax" (One Continuous Scroll Sequence)

> **These two acts are a single pinned scroll-driven sequence, not two independent
> sections.** The hero card does not "end" — it *becomes* the Act 2 reel.
> This is the same pattern PayPal uses: the framed card in the hero zooms to
> full-bleed as you scroll, and the headline words scatter outward in sync.
> The visitor never feels a page transition — only continuous forward motion.

**The unified scroll timeline** (one pinned `<section>`, ~350–400vh tall):

| Scroll progress | Phase | What happens |
|-----------------|-------|--------------|
| `0.00` | **Hero at rest** | Toggle + headline centered. Phone card framed, centered, rounded corners, gold border. `Paid · 3s · $0 gas` badge floating beneath. |
| `0.00 → 0.20` | **Card zoom + scatter** | Card scales up (`scale 1 → full bleed`), `border-radius` collapses to `0`, gold border fades. Headline words drift outward along their own vectors and fade — they don't rise up, they *radiate apart* as the card expands through them. |
| `0.20` | **Full bleed** | Card fills the entire viewport. Seamless handoff — the hero has become the reel canvas. |
| `0.20 → 1.00` | **Reel pan** | Full-bleed image transitions horizontally through 4 life moments. Each slide: full-bleed photo, gold accent bar top, dark gradient overlay bottom, oversized mono stat, one plain-English line. |

**The 4 reel moments:**
1. **Morning coffee** — tap to pay at a café counter. Stat: `3s`.
2. **Corner shop** — scan QR, zero gas. Stat: `$0 gas`.
3. **Split with friends** — sending USDC at dinner. Stat: `1 tap`.
4. **End of week** — token rewards accrued. Stat: `+18 WPGP`.

**Key effects:**
- **Scroll-driven card zoom** — `scale` + `border-radius` both bound 1:1 to scroll `t`. Fully reversible.
- **Headline word scatter** — each word translates outward along its own vector as `t → 0.2`, opacity fades. Words radiate apart, not upward.
- **Ambient glow bloom** — background gold glow expands with the card, fades as the photo takes over.
- **Reduced-motion fallback** — static hero with CTA, then stacked photo grid for the 4 moments.

*Component: `HeroAndReel` — replaces both `HeroPersonal` and the planned `DayInLifeReel`
as a single unified component with one shared RAF loop.*

---

### Act 3 — "The Tap" (Scroll-Scrubbed Payment Moment)

**Emotion:** Visceral delight — "wait, *I* just did that."
**Job:** Don't explain the payment. Let the visitor *perform* one.

This is the page's signature moment. Instead of describing how paying works, we
hand the visitor the controls: their scroll **scrubs a single payment forward,
frame by frame**, in first-person POV. Scroll down and the payment advances;
scroll up and it rewinds. The user isn't watching a demo — they're driving it.

**The scrubbed timeline (bound 1:1 to scroll progress, `0 → 1`):**

| Progress | Beat | What the visitor sees |
|----------|------|-----------------------|
| `0.00–0.20` | **Lift** | A first-person hand raises the phone toward a checkout terminal. Phone tilts from `rotateX(35deg)` flat to upright. |
| `0.20–0.40` | **Recognise** | The merchant + amount bloom onto the screen. A gold NFC ripple pulses outward from the phone's top edge. |
| `0.40–0.60` | **Hold** | A gold radial "authorising" ring sweeps `0 → 360°`, scrubbed by scroll. The visitor literally holds the payment by holding their scroll. |
| `0.60–0.80` | **Settle** | Hundreds of gold particles converge from screen edges and coalesce into a single checkmark. Particle positions are interpolated from scroll `t`. |
| `0.80–1.00` | **Confirmed** | Checkmark locks, a `Paid · 3s` receipt slides up, and a `+2.5 WPGP` reward chip drifts in. Screen exhales into calm. |

**New effects (unique to this act):**

- **Scroll-scrubbed cinematic timeline** — a pinned canvas where every visual is a
  pure function of scroll `t`; no autoplay, fully reversible. Extends the shared
  RAF pattern from `HeroAndReel` but drives a *timeline*, not a zoom+pan.
- **Particle convergence** — lightweight 2D canvas (or transform-only DOM sprites,
  capped at ~120) whose target positions lerp toward the checkmark as `t → 0.8`.
- **First-person device rig** — the phone is the only actor; camera-style
  `perspective` + `rotateX` sells the "it's in your hand" POV.
- **Haptic-style pulse** — the NFC ripple and confirm-lock use a snappy
  `cubic-bezier(0.34, 1.56, 0.64, 1)` overshoot to mimic a physical tap response.

**Copy (minimal, appears only at the ends):**

- Entry cue (fades out by `t=0.1`): *"Scroll to pay."*
- Exit line (fades in after `t=0.85`): **`That's it. You just paid.`**

**Reduced-motion / no-JS fallback:** collapses to three static frames — terminal,
confirmation, reward — with the same copy. No scrubbing, no particles.

*New component: `TapToPay` (see checklist). Retires `HowItWorksPersonal` from the
personal page — the felt experience replaces the explanatory diagram.*

---

### Act 4 — "Made for Real Life" (Full-Bleed Statement Break)


**Emotion:** Aspiration + belonging.
**Job:** A cinematic breath. After the intensity of *the tap*, let the page exhale
with a single bold truth over a real photograph — no lists, no diagrams, no CTA.
This is the beat that proves the page is *not just walls of text*.

- **Full-bleed background photo** — edge-to-edge, `100vw × 100vh` (or `min-h-[80vh]`).
  Warm, candid, human: someone paying at a night market abroad, handing coffee
  across a counter, splitting a bill with friends at a table. Real life, mid-moment.
- **One bold statement**, Satoshi Black, oversized (`clamp(40px, 7vw, 96px)`),
  centered or lower-left, with a key phrase in `text-gradient-gold`:
  > **`Money should move as freely as you do.`**
- Optional single supporting line beneath, muted white:
  *"Across borders, chains, and coffee counters — your money keeps up."*
- **Legibility scrim:** dark bottom-up gradient
  (`linear-gradient(to top, rgba(6,6,18,0.85), transparent 70%)`) over the photo,
  plus a thin gold hairline accent at the top edge.

**Effects:**

- **Parallax depth:** background image scrolls at `0.4x`, the text layer at `1x`,
  so the words float over a slower-moving world.
- **Ken Burns drift:** the photo slowly scales `1.0 → 1.08` and pans a few pixels
  as the section passes through the viewport — subtle, cinematic, never dizzying.
- **Scrim reveal:** the gradient scrim deepens and the statement rises + fades in
  (`translateY(24px) → 0`, opacity `0 → 1`) as the section crosses `~30%` viewport.

**Why here:** it sits between the visceral *doing* (Act 3) and the rational
*reassurance* (Act 5), giving the scroll an emotional summit before the feature
detail. It's the page's poster frame — the one screenshot people share.

**Reduced-motion fallback:** static photo, static scrim, statement fades in once.
No parallax, no Ken Burns.

*New component: `StatementBreak` — reusable full-bleed image + overlay statement
(a second instance could later anchor other narrative pauses).*

---

### Act 5 — "Why It Feels Different" (Sticky Feature Reveal)

**Emotion:** Reassurance + delight.
**Job:** Land the differentiators as *felt benefits*, not features.

- `StickyFeaturePanel`: phone/visual pinned left, feature copy steps on the right.
- Perspective card tilt on each feature as it becomes active (3D beat).

| Feature | Felt benefit |
|---------|--------------|
| Gasless | "Never buy a second coin just to spend the first." |
| Self-custody | "Your keys. Your money. No one can freeze it." |
| Multi-chain | "One wallet — BNB, Base, Polygon. You never think about it." |
| One-tap pay | "Scan, approve, done. Faster than tapping a card." |
| Token rewards | "Every payment quietly pays you back." |
| Open network | "Pay any PayPax merchant, anywhere." |

---

### Act 6 — "Your Money, Your Life" (Emotional Close + CTA)

**Emotion:** Belonging + resolve to act.
**Job:** Tie the brand to the visitor's life and convert.

- Full-width gold-tinted gradient background.
- `AnimatedCounter` lifetime-impact strip: gas saved, seconds not waited, tokens
  earned — counting up as it enters view.
- Closing statement (Satoshi Black): **`Money that finally feels like yours.`**
- Primary CTA: `Download PayPax Wallet` (App Store + Play Store).
- Secondary: `Explore for Business` → `/business` (cross-link).
- Footer note reinforcing the bond: *"PayPax Wallet is the best way to pay a
  PayPax merchant — but never the only one. The network is open."*

---

## 4. Component & Asset Checklist

### Components

| Status | Component | Act |
|--------|-----------|-----|
| Built | `HeroPersonal` | 1 |
| To build | `HeroAndReel` (unified Act 1+2 scroll sequence — replaces `HeroPersonal`) | 1+2 |
| To build | `TapToPay` (scroll-scrubbed payment moment) | 3 |
| To build | `StatementBreak` (full-bleed parallax image + statement) | 4 |
| To build | `PersonalFeatures` (extends `StickyFeaturePanel`) | 5 |
| To build | `PersonalClose` (uses `AnimatedCounter`) | 6 |
| Reuse | `HeroToggle`, `CursorGlow`, `SplitTextReveal`, `ScrollTextHighlight`, `MagneticCard` | — |
| Retired | `HowItWorksPersonal` (replaced by `TapToPay` on `/personal`) | — |

### Assets

| Asset | Description | Act |
|-------|-------------|-----|
| Hero phone render | Wallet confirmation screen, portrait, transparent bg | 1 |
| 4 lifestyle photos | Coffee, shop, friends, weekend — warm, candid, real people | 2 |
| Tap phone render | Payment + confirmation states for the scrubbed rig, transparent bg | 3 |
| Particle sprite / checkmark | Gold particle + lock-in checkmark for convergence effect | 3 |
| Statement hero photo | Full-bleed, high-res (≥2000px wide), warm candid real-life moment | 4 |
| Feature phone frames | One UI state per differentiator | 5 |
| OG image (personal) | "Money that feels like yours" branded card 1200×630 | meta |

All photos follow the master guideline mood: **warm, candid, real** — never stock-y
or staged. People mid-moment, not posing.

---

## 5. Voice, Accessibility & Success

### Voice (Personal)

Warmer and more human than the business page. Still direct, still specific,
but it speaks to a *person's day*, not a company's balance sheet.

| Business voice | Personal voice |
|----------------|----------------|
| "0.75% with a $100 cap" | "You never pay to pay." |
| "Non-custodial settlement" | "Your money stays yours." |
| "Sub-5-second finality" | "Done before you pocket your phone." |

Keep the master guideline's word-swaps (Use not Utilize, Open not Permissionless).
Avoid hype. Let the moments carry the feeling.

### Accessibility

- WCAG 2.1 AA — gold on dark must clear 4.5:1 for body, 3:1 for large text.
  (Light mode uses the deeper `#B45309` gold precisely for this reason.)
- All scroll-driven acts have a static, readable fallback under
  `prefers-reduced-motion`.
- Story content is real semantic HTML — the narrative reads top-to-bottom even
  with all JS/animation stripped.
- Every decorative photo `aria-hidden`; meaningful ones get alt text.
- Toggle, CTAs, and cards are fully keyboard-navigable with visible gold focus rings.
- Pinned sections never trap scroll or keyboard focus.

### Success Signals

- A visitor can describe *how paying feels* after one scroll-through — not just
  what the fee is.
- Lighthouse Performance ≥ 95 despite the richer motion budget.
- Personal → wallet-download CTA is the primary conversion; `/business` cross-link
  is the secondary path.
- The page reads as *one continuous story*, not a stack of independent sections.

---

*Document version: 1.0*
*Last updated: July 2026*
*Companion to: `design-guideline.md` (master) · implements route `/personal`.*

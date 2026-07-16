# PayPax Landing — Image Assets Guide

> **Project:** demere-landing
> **Purpose:** A single source of truth for every image placeholder in the
> landing page. For each slot: where it's used, target dimensions, a plain
> description, and two ready-to-use prompts — one to **generate** the image
> from scratch, one to **modify** an existing uploaded photo to fit.
> **Date:** July 2026

---

## How to use this document

1. Pick an image slot below.
2. Either:
   - **Generate** — paste the *Generation prompt* into an image model
     (Midjourney, DAL·E, Flux, Firefly, etc.), or
   - **Modify** — upload your own photo and paste the *Modification prompt*
     into an editing model (Nano Banana, Firefly, Photoshop generative, etc.).
3. Export as **WebP, 85% quality**, at the target size (or 2× for retina).
4. Drop it in the path listed and swap the placeholder as noted per section.

### Where to source & modify images

**1. Find a base photo**

*Free (commercial-use, no attribution required):*
- **Unsplash** (unsplash.com) — best for candid, warm, real-life shots.
- **Pexels** (pexels.com) — strong lifestyle / payment scenes.
- **Pixabay** (pixabay.com) — larger, more mixed quality.

*Paid (higher consistency for a polished brand):*
- **Stocksy** (stocksy.com) — genuinely candid, not "stock-y". Best fit for our mood.
- **Adobe Stock / Getty / Shutterstock** — huge; filter by "authentic" / "candid" collections.

*Search tip:* search the **description** line of each slot, not the prompt.
e.g. "contactless payment café", "split bill friends phone", "QR code payment shop",
"night market travel phone", "golden hour market lights".

**2. Modify / adapt it** (upload the photo, apply the slot's *Modification prompt*)
- **Adobe Firefly** (firefly.adobe.com) — generative fill, recolor, crop.
- **Photoshop** (generative fill + Camera Raw) — most control for grading + the dark scrims our overlays need.
- **Nano Banana / Gemini image editing**, **Krea**, **Magnific** — restyle toward a mood.
- **Photopea** (photopea.com) — free browser Photoshop; crop to ratio, add bottom gradient scrim.

**3. Or generate from scratch** (use the slot's *Generation prompt*)
- **Midjourney** — best photographic realism / candid feel.
- **Flux** (fal.ai, Replicate, Krea) — excellent realism, good hands.
- **DALL·E 3 / Firefly** — fine, slightly more "produced" looking.

**4. Optimise before shipping**
- **Squoosh** (squoosh.app) — export **WebP at 85%**, resize to target (or 2× for retina).

*End-to-end:* source on Unsplash/Pexels → crop + grade in Photopea/Firefly using the
Modification prompt → compress in Squoosh → drop in `public/images/...` and swap the
placeholder per the section notes. **Always blur/remove readable text, real card
numbers, and brand logos** from sourced photos before shipping.

---

### Shared visual direction (applies to every image)

- **Mood:** warm, candid, real, mid-moment. Never stiff, posed, or stock-y.
- **Light:** soft natural or warm ambient light. Shallow depth of field.
- **People:** diverse, natural, relaxed. Hands and gestures over faces where possible.
- **Palette to complement the UI:**
  - Business page (`/business`) — deep teal/cyan accents on dark. Cool but warm-lit subjects.
  - Personal page (`/personal`) — warm **gold/amber** accents on dark. Cozy, human, golden-hour feel.
- **Avoid:** logos of real brands, readable real card numbers, crypto clichés
  (rockets, moons, lambos, glowing coins), heavy filters, text baked into the image.
- **Negative prompt (reuse anywhere):** `text, watermark, logo, brand names,
  distorted hands, extra fingers, lowres, oversaturated, HDR halos, stock-photo
  cheesiness, rocket, moon, lamborghini`

---

## Directory layout

```
public/images/
├── hero-orb.svg               (existing — vector, no action)
├── payment-flow.svg           (existing — vector, no action)
├── problem-traditional.svg    (existing — vector, no action)
├── chains/                    (existing — bnb/base/polygon logos)
├── business/                  (create — business-page photos)
└── personal/                  (create — personal-page photos)
```

---

# Business page images (`/business`)

## 1. Hero — Merchant portrait

- **Component:** `src/components/sections/Hero.tsx`
- **Suggested path:** `public/images/business/merchant.webp`
- **Size / ratio:** 400 × 530px, portrait **3:4**
- **Description:** A shop or café owner smiling behind their counter, warm and
  candid. The anchor image of the business hero — it should read "real small
  business, doing well."

**Generation prompt**
> Candid portrait of a friendly café owner in their thirties smiling behind a
> wooden counter, warm morning light from a side window, soft bokeh of a cozy
> shop behind them, shallow depth of field, natural skin tones, documentary
> photography style, portrait orientation 3:4, teal-and-warm color grade.

**Modification prompt**
> Crop this photo to a 3:4 portrait focused on the person behind the counter.
> Warm the lighting slightly, add gentle background blur, and grade toward a
> premium fintech look with subtle teal shadows and warm highlights. Keep it
> natural — no heavy filters.

---

## 2. Hero — Customer scanning QR

- **Component:** `src/components/sections/Hero.tsx`
- **Suggested path:** `public/images/business/scan-qr.webp`
- **Size / ratio:** 200 × 200px, **square 1:1**
- **Description:** Close-up of hands holding a smartphone scanning a QR code to
  pay. Secondary floating image in the hero cluster.

**Generation prompt**
> Close-up of two hands holding a modern smartphone scanning a QR code at a
> checkout, screen glowing softly, warm indoor light, shallow depth of field,
> square 1:1 crop, focus on the phone and hands, no readable text on screen,
> clean documentary style.

**Modification prompt**
> Crop tightly to a 1:1 square around the hands and phone. Blur any readable
> QR/screen text into an abstract glow. Warm the tone slightly and increase
> subject-background separation.

---

## 3. Problem — The pain of legacy payments

- **Component:** `src/components/sections/Problem.tsx`
- **Suggested path:** `public/images/business/problem.webp`
- **Size / ratio:** 520 × 650px, portrait **4:5**
- **Description:** A frustrated business owner at a laptop with payment
  paperwork/receipts — or a clean flatlay of a card, coin and fee receipt.
  Conveys the friction of traditional gateways.

**Generation prompt**
> A small-business owner looking stressed while reviewing a laptop and a pile
> of payment receipts on a desk, moody low-key lighting, muted cool tones to
> feel like a problem, portrait 4:5, realistic documentary style, shallow
> depth of field.

**Modification prompt**
> Crop to portrait 4:5. Cool and slightly desaturate the grade to convey
> frustration/friction. Keep the subject sharp and darken the background
> corners with a soft vignette.

---

## 4. For Developers — Building on the protocol

- **Component:** `src/components/sections/ForDevelopers.tsx`
- **Suggested path:** `public/images/business/developer.webp`
- **Size / ratio:** 640 × 280px, wide landscape **16:7**
- **Description:** A developer at a laptop — hands on keyboard or a dual-monitor
  code setup. Dark, ambient, technical atmosphere.

**Generation prompt**
> Close-up of a developer's hands typing on a backlit laptop keyboard in a dim
> room, code softly glowing on screen (unreadable, abstract), teal and cyan
> ambient light, wide cinematic 16:7 crop, moody tech atmosphere, shallow
> depth of field.

**Modification prompt**
> Crop to a wide 16:7 banner. Darken the scene, push ambient light toward
> teal/cyan, and blur any on-screen code into abstract glow. Keep hands and
> keyboard crisp.

---

## 5. Wallet — Payment confirmation on phone

- **Component:** `src/components/sections/WalletSection.tsx`
- **Suggested path:** `public/images/business/wallet-phone.webp`
- **Size / ratio:** 420 × 560px, portrait **3:4**
- **Description:** A hand holding a smartphone showing a clean wallet payment
  confirmation screen — dark phone, glowing UI. Gold-accented context.

**Generation prompt**
> A hand holding a modern smartphone displaying a clean dark mobile wallet
> confirmation screen with a soft gold glow, warm indoor light, portrait 3:4,
> shallow depth of field, premium fintech aesthetic, no readable text.

**Modification prompt**
> Crop to portrait 3:4 around the phone in hand. Shift on-screen UI glow toward
> warm gold, darken surroundings, and add subtle rim light on the phone edge.

---

## 6–10. Impact Carousel — 5 story frames

- **Component:** `src/components/sections/ImpactCarousel.tsx`
- **Suggested path:** `public/images/business/impact-1.webp` … `impact-5.webp`
- **Note:** Frame 3 is square (1:1); the rest are landscape **16:9**.
- **Search tip:** use the **"Best search terms"** line on each frame directly
  in Unsplash or Pexels — they are chosen to return real results.

---

### Frame 6 — `impact-1.webp` · 16:9 · 800 × 450 px

**Scene:** A merchant's hand holds a modern Android or iPhone over a white
countertop. The phone screen faces up and shows a single large green checkmark
inside a circle — a payment-confirmed screen. No brand names or card numbers
are visible. Behind the hand is a slightly blurred wooden café counter with a
coffee cup sitting off to the right. The light is warm, slightly overhead,
like morning sun through a shop window.

**Best search terms:** `contactless payment confirmed phone hand counter`
/ `smartphone payment success screen café` / `mobile checkout confirmation
green checkmark`

**Generation prompt**
> A close-up of a person's hand resting on a light wooden café counter,
> holding a modern smartphone face-up. The phone screen shows a simple large
> green circle with a white checkmark — a payment-confirmed screen. No text,
> brand logos, or card numbers visible on screen. A blurry coffee cup sits
> in the soft background. Warm morning window light, shallow depth of field,
> documentary photography, 16:9 aspect ratio.
> Negative: text, watermark, brand names, readable card numbers, distorted
> fingers, HDR, oversaturated, stock cheesiness.

**Modification prompt**
> Crop to 16:9 focused on the phone in hand. Blur the phone screen down to a
> single glowing circle of green light (remove any readable text). Warm the
> overall grade, lighten the background slightly, and soften background objects
> into smooth bokeh.

---

### Frame 7 — `impact-2.webp` · 16:9 · 800 × 450 px

**Scene:** A tidy overhead (flat-lay, top-down) view of a small wooden desk.
On the desk: a single opened paper receipt (numbers too small to read), a neat
stack of a few coins, and an open laptop with a blurry spreadsheet on screen.
A plant or coffee mug sits in one corner. The palette is clean, neutral —
white desk, natural wood grain, no clutter. This should feel like "finances
under control", not stress.

**Best search terms:** `flatlay receipt coins desk overhead` / `top-down
business desk coins receipt laptop` / `overhead finance flatlay wooden table`

**Generation prompt**
> Overhead flat-lay photograph of a clean wooden desk. Objects on the desk:
> a single unfolded paper receipt (too small to read), three or four coins,
> and a partially open laptop with an abstract spreadsheet on screen. One
> small potted succulent in the corner. Soft, even diffuse daylight from the
> side. No readable numbers, no brand logos. Clean, minimal, 16:9 horizontal
> crop. Editorial still-life photography style.
> Negative: clutter, readable text, wallet, credit card, HDR, oversaturated.

**Modification prompt**
> Crop to a 16:9 wide shot looking straight down. Blur any readable receipt
> numbers into abstract lines. Grade the image slightly cool-neutral — clean
> white highlights, natural wood tones. Remove or blur any brand logos on the
> laptop lid. Keep a very shallow depth of field toward the edges.

---

### Frame 8 — `impact-3.webp` · 1:1 · 600 × 600 px

**Scene:** A sharp, square close-up: a person's hand in mid-motion tapping a
white iPhone against a small portable payment terminal (the kind you see at
market stalls — a cube-shaped card reader on a stand). The hand is slightly
motion-blurred to convey speed. The terminal's display is a faint glow, not
readable. Background is a softly blurred shop interior — maybe coloured product
shelves out of focus. This is the "1-tap" speed moment.

**Best search terms:** `hand tapping phone payment terminal contactless NFC`
/ `iPhone tap card reader market stall` / `contactless NFC payment motion
blur hand`

**Generation prompt**
> Close-up square photo of a hand in mid-motion tapping a white iPhone against
> a small cube-shaped portable card reader on a counter. The hand has slight
> motion blur to show speed — the tap is just completing. Terminal screen shows
> a faint soft glow, completely unreadable. Blurred colorful shop shelves in
> the background. Warm ambient indoor light. 1:1 square crop. Documentary
> street-photography style, natural skin tones.
> Negative: readable text on screen, brand logos, extra fingers, distorted
> hands, heavy filters.

**Modification prompt**
> Crop to 1:1 square, centered on the hand and terminal. Add a very slight
> radial motion blur to the hand to suggest a quick tap. Blur the terminal
> screen down to an abstract warm glow. Warm the grade slightly and increase
> subject sharpness while softening the background.

---

### Frame 9 — `impact-4.webp` · 16:9 · 800 × 450 px

**Scene:** A developer sitting at a desk in a dimly lit room, two monitors
visible. The near monitor shows a dark terminal/code editor with green and
white lines of code — blurry and unreadable but clearly a code or CLI screen.
The developer's hands rest on the keyboard; their face is turned slightly away
or down, focused. The second monitor in the background is also lit with code.
Atmosphere: cool blue-teal ambient glow, like late-night developer flow state.
This illustrates "building on the protocol."

**Best search terms:** `developer dark room two monitors code night` /
`programmer late night terminal green screen typing` / `coder dim room
keyboard glow monitors`

**Generation prompt**
> A developer sitting at a dark home office desk with two monitors. Near
> monitor shows a dark terminal with soft green and white unreadable code
> lines. Hands rest on a backlit mechanical keyboard. Room is dimly lit with
> cool blue-teal ambient monitor glow. Second monitor blurred in the
> background. No readable code or text visible. 16:9 landscape. Cinematic
> documentary, moody tech atmosphere, shallow depth of field.
> Negative: readable code, readable text, brand names, HDR, oversaturated,
> stock cheesiness.

**Modification prompt**
> Crop to 16:9. Darken the overall scene, push all light sources (monitors,
> keyboard backlight) toward a cool teal-blue. Blur any readable text on the
> screens to abstract glowing lines. Keep the hands and keyboard moderately
> sharp; let the face fall into soft shadow.

---

### Frame 10 — `impact-5.webp` · 16:9 · 800 × 450 px

**Scene:** An outdoor daytime shot of a busy weekend farmers market or street
food stall. From a slight overhead angle (shot from standing height, camera
pointed slightly down). A vendor's hand holds a small tablet or phone toward
a customer — the device is the clear focal point. Around it: colourful
produce or food items on the stall table, natural daylight, lively crowd
softly blurred behind. Energy is warm, vibrant, human. This is "real commerce,
real people."

**Best search terms:** `vendor tablet payment outdoor market stall` /
`street food market seller phone payment` / `farmers market vendor
contactless payment tablet`

**Generation prompt**
> Slightly overhead candid shot at a busy outdoor weekend market stall. A
> vendor's hand extends a small tablet toward a customer across a table full
> of colourful produce or food items. Background is a blurred lively crowd
> in warm sunlight. Natural bright daylight, warm and vibrant. 16:9 landscape.
> Candid documentary street photography style, no readable text on the tablet
> screen, no brand logos.
> Negative: readable text, logos, gloomy light, studio setting, HDR halos.

**Modification prompt**
> Crop to 16:9 with the tablet hand as the focal anchor. Blur the tablet screen
> to a smooth glow (remove any readable content). Boost daylight warmth slightly,
> add gentle vignette to corners, keep the vendor's hand and nearby produce sharp
> against a soft crowd background.

---

# Personal page images (`/personal`)

> The personal page currently ships with **dark gradient placeholders** in code
> (not `PhotoPlaceholder`). To use real photos, replace the `bg` value on each
> slide / the background layer as noted, and keep the existing dark scrim so
> overlaid text stays readable. Personal-page grade is **warm gold**, cozier
> and more human than the business page.

## 11–14. Hero → Reel — 4 "day in the life" frames

- **Component:** `src/components/sections/HeroAndReel.tsx` (the `SLIDES` array)
- **Suggested path:** `public/images/personal/reel-1.webp` … `reel-4.webp`
- **Size / ratio:** full-bleed **16:9**, ≥ 1600 × 900px (they fill the viewport)
- **Swap:** in each `SLIDES` entry replace
  `bg: "linear-gradient(...)"` with
  `bg: "url('/images/personal/reel-N.webp')"` and add `backgroundSize:"cover"`
  / `backgroundPosition:"center"` on the slide div (keep the scrim div).
- **Search tip:** use the **"Best search terms"** line on each frame on
  Unsplash / Pexels — chosen to return real results.

---

### Frame 11 — `reel-1.webp` · 16:9 · ≥ 1600 × 900 px · "Morning coffee"

**Scene:** Inside a small independent coffee shop, early morning. The camera
is behind the customer, slightly over their shoulder. The customer's hand holds
a white iPhone up to a card terminal on the counter. The barista is a blurred
warm shape on the other side of the counter. The counter has a coffee cup
waiting. Golden morning sunlight streams through a window from the left, giving
everything a warm honey glow. The mood is unhurried, familiar, real.

**Best search terms:** `person paying phone coffee shop morning contactless` /
`iPhone tap to pay café counter barista` / `coffee shop contactless payment
morning light`

**Generation prompt**
> Wide shot taken from over a customer's shoulder in a small independent coffee
> shop in the morning. The customer's hand holds a white iPhone up to a small
> card reader on the wooden counter. A coffee cup sits ready on the counter.
> The barista is a warm blurred figure in the background behind the counter.
> Warm golden morning sunlight from a side window, soft bokeh, honey-amber
> colour grade. Full-bleed 16:9, high resolution. No readable text, no brand
> logos, no readable screen content. Candid documentary style.
> Negative: text, watermark, logos, HDR, oversaturated, cheesy stock.

**Modification prompt**
> Crop to full-bleed 16:9. Warm the grade to golden-amber, especially in the
> highlights. Blur the barista into a warm soft shape. Blur any text on the
> terminal screen. Darken the lower third slightly so overlaid white text stays
> readable. Keep the hand and phone sharp.

---

### Frame 12 — `reel-2.webp` · 16:9 · ≥ 1600 × 900 px · "Corner shop"

**Scene:** Inside a small corner convenience store or newsagent-style shop.
A customer's hand points a phone at a printed QR code sticker on the counter
or a small QR stand. The phone camera is clearly aimed at the QR — but the QR
is blurred / unreadable. Behind: a typical corner-shop background — shelves
with snacks or drinks, a tired fluorescent shoplight, a slightly cluttered but
warm and human setting. The shot is candid, slightly wide — you can see both
the hand with the phone and the surrounding shop context.

**Best search terms:** `phone scanning QR code small shop payment` / `QR code
payment convenience store hand` / `scan QR corner shop checkout`

**Generation prompt**
> A customer's hand holding a smartphone with the camera pointed at a small QR
> code sticker on a corner shop counter. The QR code is a blurred abstract
> square — unreadable. Background is a typical small convenience store interior:
> shelves of snacks, a cluttered but cozy feel, warm fluorescent and daylight
> mix. The shot is slightly wide — you can see the store context around the
> hand. Candid, real, no poses. 16:9 landscape, high resolution.
> Negative: readable QR code, readable text, brand names, HDR.

**Modification prompt**
> Crop to 16:9. Blur the QR code into an abstract dark square — it must not be
> scannable. Grade warm with slightly lifted shadows to keep the shop interior
> readable but cozy. Blur any readable store signage. Darken the lower third.

---

### Frame 13 — `reel-3.webp` · 16:9 · ≥ 1600 × 900 px · "Split with friends"

**Scene:** Around a restaurant table, after a meal. 3–4 people in their 20s–30s,
relaxed, laughing. One person holds their phone up with both hands — their
phone screen faces them (not the camera) and shows an abstract soft glow.
The table has finished plates, glasses of wine or cocktails, napkins. Warm
amber restaurant lighting. One person is pointing at the phone or laughing
about it. The mood is celebratory and easy — this is the moment the bill is
being split, and it's effortless.

**Best search terms:** `friends restaurant table phone splitting bill` /
`group dinner table phone payment young adults` / `restaurant friends
laughing phone check payment`

**Generation prompt**
> Candid shot of 3–4 friends in their late twenties sitting around a restaurant
> table after a meal. One person holds a smartphone up in both hands, screen
> facing away from the camera. Another person leans in laughing. The table has
> finished plates, wine glasses, and crumpled napkins. Warm amber restaurant
> lighting, intimate atmosphere. The mood is easy and fun — splitting the bill
> is effortless. Full-bleed 16:9. No readable screen text. Documentary style.
> Negative: posed, stiff, readable text, logos, HDR, stock cheesiness.

**Modification prompt**
> Crop to full-bleed 16:9. Warm the ambient light to amber-gold. Blur the phone
> screen to a soft glow. Keep 2–3 faces partially in frame and expressive.
> Darken the lower third. Boost the candid feel — reduce any overly sharp or
> studio-looking edges.

---

### Frame 14 — `reel-4.webp` · 16:9 · ≥ 1600 × 900 px · "End of week"

**Scene:** A person in their late 20s or 30s sits or reclines on a sofa at
home, weekend afternoon. They're holding their phone with one hand, slightly
tilted, looking at the screen with a relaxed half-smile — not an exaggerated
grin. The room is warm and cozy: natural light from a window, a soft throw
blanket, a coffee table with a cup on it. Maybe a book or plant visible. The
phone screen faces them and shows an abstract warm glow (not readable). The
feeling is: quiet satisfaction — your money is working while you rest.

**Best search terms:** `person sofa phone relaxing weekend home cozy` /
`young adult checking phone home natural light satisfied` / `cozy home sofa
phone afternoon light`

**Generation prompt**
> A person in their late twenties relaxing on a comfortable sofa at home on a
> weekend afternoon. They hold a smartphone in one hand tilted up, looking at
> it with a gentle relaxed smile. Room is cozy: warm natural light from a
> nearby window, a throw blanket, coffee table with a mug. The phone screen
> faces them and is an abstract warm gold glow — no readable content. The mood
> is quiet contentment. Full-bleed 16:9, high resolution. Shallow depth of
> field, warm golden afternoon light. Documentary candid style.
> Negative: exaggerated smile, posed, readable screen, brand logos, HDR, stock.

**Modification prompt**
> Crop to full-bleed 16:9. Warm the grade to late-afternoon gold. Blur phone
> screen to a soft warm glow. Ensure the lower third is slightly darker for
> text overlay. Keep face and hands sharp; let room edges fall into soft bokeh.

---

## 15. Statement Break — full-bleed poster image

- **Component:** `src/components/sections/StatementBreak.tsx`
- **Suggested path:** `public/images/personal/statement.webp`
- **Size / ratio:** full-bleed, ≥ 2000px wide (landscape, covers 85vh)
- **Swap:** replace the placeholder `background` on the `bgRef` layer with
  `backgroundImage: "url('/images/personal/statement.webp')"`,
  `backgroundSize:"cover"`, `backgroundPosition:"center"`; remove the two
  gradient/accent overlay divs. Keep the scrim + hairline.
- **Description:** The page's "poster frame" — the one screenshot people share.
  A warm, cinematic, aspirational real-life moment tied to freedom of movement:
  paying at a night market abroad, handing coffee across a counter, or splitting
  a bill with friends. Bottom third must stay dark enough for a bold statement.

**Generation prompt**
> Cinematic wide shot of a person paying with a phone at a vibrant night market
> abroad, string lights and warm bokeh, golden-amber glow, candid mid-moment,
> aspirational travel feeling, shallow depth of field, high resolution
> landscape, darker toward the bottom for text overlay, no readable text or
> logos.

**Modification prompt**
> Crop to a wide cinematic landscape (≥2000px). Grade warm gold/amber with rich
> contrast, add a subtle darkening gradient across the bottom third for text
> legibility, and keep a warm glow pool near the center. Remove or blur any
> readable signage.

---

## Note: TapToPay (Act 3) needs no photo

`src/components/sections/TapToPay.tsx` renders its phone, QR code, arc, particles
and receipt entirely in **code (SVG + DOM)**. No image asset is required — it is
fully theme-aware and resolution-independent.

---

## Quick checklist

| # | Slot | Path | Ratio | Status |
|---|------|------|-------|--------|
| 1 | Business hero — merchant | `business/merchant.webp` | 3:4 | ☐ |
| 2 | Business hero — scan QR | `business/scan-qr.webp` | 1:1 | ☐ |
| 3 | Problem | `business/problem.webp` | 4:5 | ☐ |
| 4 | For Developers | `business/developer.webp` | 16:7 | ☐ |
| 5 | Wallet phone | `business/wallet-phone.webp` | 3:4 | ☐ |
| 6–10 | Impact carousel ×5 | `business/impact-{1..5}.webp` | 16:9 / 1:1 | ☐ |
| 11–14 | Personal reel ×4 | `personal/reel-{1..4}.webp` | 16:9 | ☐ |
| 15 | Statement break | `personal/statement.webp` | wide | ☐ |

---

*Document version: 1.0 · Last updated: July 2026*
*Companion to: `design-guideline.md` and `personal-page-design-guideline.md`.*

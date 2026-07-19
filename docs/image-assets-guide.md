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

### Frame 12 — `reel-2.webp` · 16:9 · ≥ 1600 × 900 px · "In-game purchase"

**Scene:** A young person sitting cross-legged on a bed or a bright window-side
desk, laptop open in front of them showing a game store or item shop page —
colorful, abstract, nothing readable. They are holding their phone in one hand
with a relaxed grip, glancing at it with a slight smile — the purchase just
went through. The room is bright and airy: daylight from a large window,
white or light-colored walls, maybe a plant on the windowsill. The overall
feel is light, casual, everyday — not dark or moody. This is someone buying
something small and fun online without any friction.

**Important distinction:** the scene is bright and open, **not a dark gaming
den**. Natural daylight, airy room, relaxed posture. The laptop shows a
colorful abstract game or app store UI — nothing readable.

**Best search terms:** `young person laptop bright room phone smile online
shopping` / `person bed laptop phone daylight window cozy` /
`online purchase laptop phone notification bright natural light`

**Generation prompt**
> A young person in their mid-twenties sitting cross-legged on a bed or at a
> bright desk near a large window, laptop open in front of them showing a
> colorful abstract store or game UI (unreadable). They hold a smartphone in
> one hand, glancing at it with a casual relaxed smile — a purchase just
> completed. The room is bright and airy: white walls, natural daylight
> streaming in, a plant nearby. Light and warm atmosphere, not dark. Shallow
> depth of field. Candid documentary style. Full-bleed 16:9, high resolution.
> No readable text on any screen, no brand logos, no card numbers.
> Negative: dark room, RGB lights, gaming chair, readable text, logos,
> HDR, posed, stock cheesiness.

**Modification prompt**
> Crop to full-bleed 16:9. Brighten and warm the scene toward a natural
> daylight feel — lift shadows, open up the exposure. Blur all screen content
> to soft abstract color glows. Darken only the lower third slightly for text
> overlay legibility. Keep the person and laptop sharp.

---

### Frame 13 — `reel-3.webp` · 16:9 · ≥ 1600 × 900 px · "Online checkout"

**Scene:** A person sitting at a desk or on a sofa with a laptop open in
front of them. On the laptop screen: an abstract e-commerce or subscription
checkout page — soft glow, no readable brand names. Their phone rests on
the desk or is held up showing a confirmation notification. The mood is
everyday and relaxed — this could be buying anything online: a game, a
subscription, clothes, software. No shop counter, no street. Natural daylight
or warm indoor light.

**Best search terms:** `person laptop online shopping payment phone desk` /
`online checkout laptop confirmation phone notification` /
`person buying online laptop home cozy`

**Generation prompt**
> A person sitting casually at a desk or on a sofa with a laptop open showing
> an abstract glowing checkout or payment screen (unreadable). Their
> smartphone beside them shows a soft notification glow. The room is casual
> and warm — natural daylight or cozy lamp light. Could be any online
> purchase: a game, a subscription, a product. 16:9 landscape, high
> resolution. No readable text on any screen, no brand logos, no card numbers.
> Candid documentary style, shallow depth of field.
> Negative: physical store, cash, card machine, readable text, logos, HDR.

**Modification prompt**
> Crop to full-bleed 16:9. Warm the grade to a cozy indoor feel. Blur all
> screen content to abstract glows — no readable text on laptop or phone.
> Darken the lower third. Keep person and laptop sharp, let background fall
> into soft bokeh.

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
- **Description:** A pure atmosphere shot — **no people, no phones, no payment
  context**. The bold statement text carries the message; the image only needs
  to feel right. Think: something textural, expansive, and warm that gives the
  eye somewhere beautiful to rest. It can be completely unrelated to payments —
  abstract light, a landscape, a macro texture, an architectural detail. The
  only requirement is that it has enough dark area in the lower or center region
  for white text to sit over it legibly.

**Mood options — pick whichever resonates:**

| Option | What it looks like | Search terms |
|--------|-------------------|--------------|
| A — Golden light abstract | Warm bokeh or light leak, soft gold orbs on dark background, like late-afternoon sun through glass | `gold bokeh abstract warm light dark background` |
| B — Macro texture | Extreme close-up of sand, fabric weave, hammered metal, or paper — warm-toned, shallow depth of field | `macro texture warm gold abstract close-up` |
| C — Minimal landscape | Wide open landscape at golden hour — empty desert, open field, calm sea horizon — no people | `golden hour landscape empty no people minimal` |
| D — Architecture / light | Geometric shadows and light on a warm stone or concrete surface, abstract angles | `architectural abstract light shadow warm texture` |
| E — Smoke / ink / fluid | Dark background with gold or amber smoke, ink in water, or fluid pour — cinematic | `gold smoke dark background abstract cinematic` |

**Generation prompt (Option E — recommended for strongest brand impact)**
> Abstract cinematic image: dark near-black background with slow curling gold
> and amber smoke or ink dispersing through the air. Rich warm tones — deep
> ochre, burnt amber, soft gold. No people, no objects, no text, no logos.
> Ultra high resolution wide landscape. The image should feel premium,
> mysterious, and warm. Suitable as a full-bleed poster background with white
> text overlaid.
> Negative: people, hands, phones, faces, text, watermark, logo, neon, blue,
> cold tones, HDR halos.

**Generation prompt (Option A — softer, more accessible)**
> Shallow depth of field photograph of warm golden bokeh light — soft glowing
> circles of amber and gold light on a very dark background. Like late-afternoon
> sun through a window with dust particles. Abstract, no identifiable objects,
> no people. Wide landscape crop, ultra high resolution.
> Negative: people, text, logos, cold tones, neon, HDR.

**Modification prompt**
> Crop to a wide cinematic landscape (≥ 2000px). Grade toward deep warm tones —
> rich amber, dark gold, near-black shadows. Ensure a region of relative
> darkness (center or lower half) where bold white text will be placed. Remove
> or blur any recognizable objects, faces, or text. Boost contrast and depth.

---

## 16–17. PersonalFeaturesBento — CUSTODY & CHAIN card backgrounds

- **Component:** `src/components/sections/PersonalFeaturesBento.tsx`
- **Cards:** card 2 (CUSTODY) and card 3 (CHAIN)
- **Note:** These are small bento cards, not full-bleed. The image sits behind
  a dark scrim and the card content sits on top. **No people needed** — pure
  abstract or textural backgrounds that reinforce the card's concept.

---

### Slot 16 — `bento-custody.webp` · 1:1 · 600 × 600 px · CUSTODY card

- **Suggested path:** `public/images/personal/bento-custody.webp`
- **Concept:** Self-custody — your keys, your money, no one can touch it.
- **Description:** A pure abstract or macro image that feels **secure,
  private, and solid**. Think: close-up of a heavy lock mechanism, brushed
  metal texture, a vault-like surface, or abstract dark geometry with a warm
  gold light source catching an edge. No people, no phones, no text. Dark
  background with gold or warm tones so the card's gold icon and white text
  stay readable on top.

**Best search terms:** `macro metal lock texture dark gold light` /
`abstract dark geometry gold edge light` / `vault metal texture close-up
warm light`

**Generation prompt**
> Macro close-up of a heavy brushed metal lock or vault mechanism, dark
> near-black background, a single warm gold light catching the metal edges.
> Abstract, no people, no text, no logos. Square 1:1. The mood is premium,
> secure, private — like a bank vault but warmer. Deep shadows, sharp
> metallic detail, gold rim light.
> Negative: people, hands, text, logos, neon, bright colors, HDR.

**Modification prompt**
> Crop to 1:1 square. Push the grade toward deep dark tones with warm gold
> highlights on edges. Increase contrast and shadow depth. Remove any
> recognizable branding or text. The result should feel dark, secure, and
> premium.

---

### Slot 17 — `bento-chain.webp` · 1:1 · 600 × 600 px · CHAIN card

- **Suggested path:** `public/images/personal/bento-chain.webp`
- **Concept:** Multi-chain — one wallet, every chain, seamlessly connected.
- **Description:** A pure abstract image that feels **networked, global, and
  fluid**. Think: aerial view of city lights at night, abstract fiber-optic
  light trails on dark background, a deep-space star field, or flowing blue
  light streams suggesting connected nodes. No people, no text. Dark
  background with blue or indigo tones matching the card's `#6382DC` accent.

**Best search terms:** `abstract blue light trails dark background network` /
`fiber optic light streams dark blue` / `city lights aerial night abstract`

**Generation prompt**
> Abstract image of flowing blue and indigo light streams or fiber-optic
> trails on a near-black background. The lights suggest connected nodes or
> a global network. No people, no text, no logos, no identifiable objects.
> Square 1:1. The mood is expansive, technological, seamless. Deep dark
> background, cool blue and soft indigo tones.
> Negative: people, text, logos, warm tones, HDR, oversaturated, neon green.

**Modification prompt**
> Crop to 1:1 square. Push all tones toward cool dark blue and deep indigo.
> Darken the overall image so card text remains legible on top. Remove any
> identifiable objects or text. Add a subtle vignette to edges.

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
| 16 | Bento — CUSTODY card | `personal/bento-custody.webp` | 1:1 | ☐ |
| 17 | Bento — CHAIN card | `personal/bento-chain.webp` | 1:1 | ☐ |

---

*Document version: 1.0 · Last updated: July 2026*
*Companion to: `design-guideline.md` and `personal-page-design-guideline.md`.*

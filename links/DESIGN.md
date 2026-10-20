---
name: Marco Túlio · Links
description: Person-first sibling of theseller.com.br/links; the same quiet navy-and-cyan system, opened by a large cut-out portrait.
colors:
  cyan: "#00B1E2"
  cta-mid: "#027DB8"
  blue: "#0060AB"
  bg-from: "#161F28"
  bg-to: "#0F1620"
  navy: "#16274A"
  text: "#F4F8FA"
  text-soft: "#DCE4E2"
  muted: "#8AA0B5"
  border: "rgba(255, 255, 255, 0.08)"
  border-hover: "rgba(0, 177, 226, 0.4)"
  icon-tile: "rgba(0, 177, 226, 0.1)"
  pending: "#FFC857"
  pending-ink: "#0B1119"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-cta:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.25
  role:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  bio:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  tile: "12px"
  tile-lg: "14px"
  card: "18px"
  cta-frame: "20px"
  pill: "999px"
  round: "50%"
spacing:
  frame: "1.5px"
  sub: "3px"
  xs: "8px"
  card-gap: "14px"
  cta-gap: "16px"
  gutter: "20px"
  card-pad: "16px 18px"
  cta-pad: "22px"
  stack: "24px"
  section: "32px"
  footer: "36px"
components:
  card:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "16px 18px"
    height: "64px"
  card-highlight:
    backgroundColor: "{colors.cta-mid}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "22px"
    height: "84px"
  icon-tile:
    backgroundColor: "{colors.icon-tile}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.tile}"
    size: "40px"
  icon-tile-cta:
    backgroundColor: "rgba(255, 255, 255, 0.15)"
    textColor: "#FFFFFF"
    rounded: "{rounded.tile-lg}"
    size: "48px"
  button-back:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.text}"
    rounded: "{rounded.tile-lg}"
    size: "48px"
  social-icon:
    textColor: "{colors.muted}"
    rounded: "{rounded.tile}"
    size: "48px"
  social-icon-hover:
    backgroundColor: "rgba(0, 177, 226, 0.08)"
    textColor: "{colors.cyan}"
  pending-tag:
    backgroundColor: "{colors.pending}"
    textColor: "{colors.pending-ink}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
---

# Design System: Marco Túlio · Links

## Overview

**Creative North Star: "The Founder's Front Door"**

This page is the person-first sibling of theseller.com.br/links. It reuses the same quiet, premium system the user built for the company page, and it opens on a large cut-out portrait of Marco Túlio where the company page shows the logo. The ground is a dark blue-black gradient lit by three slow cyan and blue blobs, heavily blurred. On it sit navy cards with soft 18px corners and a faint white hairline. Each card has a cyan icon tile at the left. Only one object on the page is loud: the cyan-to-blue gradient WhatsApp CTA, framed by a thin ring of light that rotates.

The column is narrow and phone-first (480px max). Poppins carries every title and DM Sans carries every reading line. Motion is slow and ambient. The blobs drift over 25 to 29 seconds, the CTA frame turns once every 6 seconds, and the identity block and cards rise in on load. The portrait comes first and fills the column; there is no small avatar anywhere in the system.

The user rejected the earlier "Palco" (stage) direction as not premium. Stage props, lower-thirds and textures are out.

**Key Characteristics:**
- Always dark: a vertical gradient from #161F28 to #0F1620 (reaching the end colour at 900px), with three blurred blobs at 0.15 opacity.
- Navy cards with 18px corners, a 1px white hairline at 8%, and a 40px cyan icon tile.
- Exactly one gradient CTA per page, inside a 1.5px frame lit by a spinning conic light.
- The portrait opens the page large and fades into the background; there is no avatar.
- Footer social icons are bare muted glyphs with no chips or circles at rest.
- Real or nothing: missing content shows as an amber [PREENCHER] marker and is never faked.

## Colors

The palette is The Seller's own: deep blue-black ground, navy surfaces, one electric cyan, and a brand blue that the cyan fades into.

### Primary
- **Electric Cyan** (cyan): the brand light. Used for the role line under the name, card icon glyphs, icon tile fills (at 10%), the start of the CTA gradient, the blobs, the ambient glow behind the head, the hover border (at 40%), the hovered chevron and social icon, the focus outline, the caret and the selection.
- **CTA Mid Blue** (cta-mid): the 24% stop of the CTA gradient. This is a deliberate deviation from the reference. With this stop in place, the white CTA text (from 24% onward) sits on blue that meets AA (4.5:1 or better).

### Secondary
- **Brand Blue** (blue): where the CTA gradient ends (135°), plus the second background blob and the outer falloff of the head glow.

### Neutral
- **Ground Top** (bg-from) / **Ground Base** (bg-to): the body gradient. bg-to is also the html background and the selection text colour.
- **Card Navy** (navy): the surface of every standard card and of the back button.
- **Paper White** (text): names, titles and icons on dark. It also fills the logo tile on /empresas.
- **Soft Paper** (text-soft): the one-sentence bio under the name.
- **Slate Muted** (muted): card subtitles, chevrons, social icons at rest, and the footer line. It measures 5.46:1 on navy.
- **Hairline** (border) / **Cyan Hairline** (border-hover): the 1px card border at rest and on hover or focus.
- **Pending Amber** (pending) on **Pending Ink** (pending-ink): only for the [PREENCHER] marker and the pending dot on a social icon. This colour exists to be removed.

### Named Rules
**The One Gradient Rule.** On any page, the cyan-to-blue gradient fills at most one surface: the WhatsApp CTA. The build throws an error if more than one card is marked highlight. Every other use of cyan is a glyph, a 10% tile, a hairline or the short role line.

**The Readable Gradient Rule.** The CTA gradient is always cyan 0%, cta-mid 24%, blue 100%, at 135°. White text sits on the cta-mid-to-blue span. Never drop the mid stop to match the reference more literally, because white on bare cyan measures only 2.5:1.

## Typography

**Display Font:** Poppins 500, 600 and 700, self-hosted latin subset (with ui-sans-serif, system-ui fallback)
**Body Font:** DM Sans 400, self-hosted latin subset (same fallback)

**Character:** Poppins gives the name and the titles their round, confident geometry. DM Sans keeps the supporting lines small and calm. Both faces come from the pinned reference.

### Hierarchy
- **Display** (Poppins 700, 30px, 1.1, -0.02em, balanced wrap): the name, followed by the 22px verified seal. In the /empresas topbar it drops to 18px at 600 weight with -0.01em tracking and a 17px seal.
- **Headline** (Poppins 700, 26px, 1.2, -0.02em): the subpage title ("Minhas empresas").
- **Title, CTA** (Poppins 700, 17px, 1.15): the CTA headline.
- **Title** (Poppins 600, 14.5px, 1.25, balanced wrap): titles on standard cards.
- **Role** (Poppins 500, 14px, cyan, sentence case): the single line directly under the name.
- **Bio** (DM Sans 400, 14px, 1.45, max 320px, text-soft): the one-sentence introduction.
- **Body** (DM Sans 400, 16px, 1.5): the base size.
- **Caption** (DM Sans 400, 12px, 1.35, muted): card subtitles and the footer. Subtitles on the CTA are 13px, in white at 88%.

### Named Rules
**The Two Faces Rule.** Poppins carries every title and the role line; DM Sans carries everything you read. DM Sans is shipped as the 400 file only, and font-face aliases the 500 and 600 weights to that same file, so the browser never synthesizes a bold. Any new weight needs its own self-hosted file.

## Layout

A single centred column, 100% wide up to 480px, with 20px side padding, full dynamic-viewport height, and the footer pushed to the bottom (margin-top: auto). There are no breakpoints. On desktop the same column sits centred over the full-bleed gradient and blobs.

Main page, top to bottom:
1. The portrait breaks out of the side padding (margin 0 -20px). Its height is 52svh, clamped between 380px and 560px. The image is centred at min(100%, 440px) with 20px above it. The portrait's base is masked to transparent from 58% down, and a 360px cyan-to-blue radial glow sits behind the head.
2. The identity block (name, role line, bio, centred) is pulled up 92px so it sits over the fade.
3. The card list begins 24px lower. The CTA is its first item, with 16px below its frame.
4. The footer follows, 36px above the social row and the copyright line.

/empresas: a 24px-top topbar (48px back button, 12px gap, compact name), the headline 32px below, then the card list 18px below the headline.

Rhythm: 14px between cards and inside cards, 16px inside the CTA, 8px between the name and the seal and between social icons. Standard cards are at least 64px tall; the CTA is at least 84px.

## Elevation & Depth

Depth comes from light in the background, not from stacked surfaces. The three blurred blobs (420px, blur 120px, 0.15 opacity) and the radial glow behind the head make the space; cards stay flat at rest. Shadows appear only on interaction, plus one coloured glow on the CTA. That glow is part of the pinned reference and is intentional.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 8px 30px -12px rgba(0, 0, 0, 0.6)`): standard card on hover or focus, together with a 2px rise.
- **CTA glow** (`box-shadow: 0 12px 40px -18px rgba(0, 177, 226, 0.6)`): the CTA at rest. On hover or focus it becomes `0 16px 50px -16px rgba(0, 177, 226, 0.7)`.
- **Frame light**: a conic gradient (transparent to 70%, white at 90% opacity at 85%, cyan at 92%, transparent at 100%) rotating behind the CTA. The CTA frame's 1.5px padding exposes it as a moving rim.

### Named Rules
**The Flat-At-Rest Rule.** Standard cards have no shadow at rest. They lift 2px and take the black card-lift shadow only on hover or focus. The cyan glow belongs to the CTA alone.

## Shapes

Every shape is a soft rectangle; only the blobs, the head glow and the pending dot are circles. The radius steps up with size: 12px for icon tiles and social hit areas, 14px for the CTA tile and the back button, 18px for cards (the global focus outline uses the same radius), and 20px for the CTA frame. The pending tag is a pill. Borders are 1px hairlines. The portrait has no frame; its silhouette dissolves into the ground through a mask.

## Components

### Cards
Cards are quiet navy panels that only respond when touched.
- **Corner Style:** 18px.
- **Background:** navy with a 1px hairline border.
- **Content:** a 40px icon tile (cyan at 10%, 12px radius, 20px cyan line icon), a Poppins title, a muted 12px subtitle, and an 18px muted chevron.
- **Hover / Focus:** the card rises 2px, the border turns cyan at 40%, the card-lift shadow appears, and the chevron turns cyan and shifts 2px right. Transitions take 0.2s. Pressing returns the card to rest.
- **Company variant (/empresas):** the tile holds a Poppins 600 initial at 16px, or the logo cropped to cover on a paper-white tile.

### CTA (the one gradient card)
- **Frame:** a 20px-radius wrapper with 1.5px padding that clips a conic light rotating every 6s.
- **Face:** a 135° gradient (cyan, then cta-mid at 24%, then blue), no border, white text, 22px padding, 16px gap. The tile is 48px with 14px corners, white at 15%, and holds a 24px icon. The chevron is 20px white.
- **Focus:** a 2px white outline inset 4px, because a cyan outline would disappear against the gradient.
- **Limit:** one per page, enforced by the build.

### Back Button (/empresas)
- A 48px navy tile with 14px corners and a hairline border, holding a 20px icon. On hover or focus the border turns cyan at 40%.

### Social Icons (footer)
- Bare 20px glyphs in muted, each in a 48px hit area with 12px corners. On hover or focus the glyph turns cyan and a cyan wash at 8% appears behind it. A missing link shows an 8px amber dot at the top right.

### Pending Tag
- An amber pill (11px DM Sans, 0.02em tracking, dark ink) reading "PREENCHER: …". It marks content the owner has not supplied yet and is a transient content state. Over the portrait placeholder it is centred 16px from the top.

### Portrait Hero (signature)
- A large cut-out photo with no frame or avatar. Behind the head sits a 360px radial glow (cyan at 34%, falling to blue at 14% by 60%, then transparent). The bottom 42% is masked into the ground. The identity block overlaps the fade. If there is no photo, a faint white silhouette at 10% stands in, carrying a pending tag.

### Motion
- The blobs drift over 25s, 27s and 29s (ease-in-out, alternating). The frame light turns every 6s (linear). On load the identity block and the first four cards enter over 0.6s with cubic-bezier(0.16, 1, 0.3, 1), rising 12px and fading in. Delays are 0.12s for the identity block, then 0.2s for the first card plus 60ms for each later card.
- Under reduced motion, the drift and the entrance do not run, the frame light is hidden, and every transition is removed.

## Do's and Don'ts

### Do:
- **Do** build new links as navy cards with an 18px radius, a 1px rgba(255, 255, 255, 0.08) border and a 40px cyan-at-10% icon tile.
- **Do** keep the CTA gradient at cyan 0%, #027DB8 24%, blue 100% (135°) so white text meets AA.
- **Do** keep a single gradient CTA per page, in its 1.5px spinning-light frame, with its cyan glow.
- **Do** open the main page with the large cut-out portrait fading into the ground.
- **Do** use Poppins for titles and DM Sans for reading text, both self-hosted.
- **Do** show missing content with the amber pending tag instead of inventing it.
- **Do** keep motion slow and ambient, and turn it all off under reduced motion.

### Don't:
- **Don't** add a small round avatar next to or instead of the portrait.
- **Don't** put a resting shadow or the gradient on standard cards; they stay flat navy until hovered.
- **Don't** reintroduce the stage world: lower-thirds, spotlight cones, LED grids, textures.
- **Don't** put chips or circles behind the footer social icons at rest.
- **Don't** add a light theme; the page is always dark.
- **Don't** add numbers, stamps, credentials, testimonials or logos the owner has not supplied.

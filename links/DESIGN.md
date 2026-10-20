---
name: Marco Túlio · Links
description: Link-in-bio for Marco Túlio, staged as one man under one follow-spot, with the light landing on the WhatsApp CTA.
colors:
  accent: "#00B1E2"
  accent-lit: "#3CC6EC"
  wall: "#0060AB"
  wall-deep: "#0A3E78"
  stage: "#0B1119"
  bg: "#0F1620"
  riser: "#141E2E"
  riser-top: "#1A2740"
  ink: "#0B1119"
  text: "#FFFFFF"
  muted: "#A9BACB"
  edge: "rgba(255, 255, 255, 0.07)"
  edge-lit: "rgba(255, 255, 255, 0.16)"
  pending: "#FFC857"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.3
  label:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12.5px"
    fontWeight: 500
    letterSpacing: "0.06em"
  body:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  plate: "6px"
  card: "16px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "12px"
  gutter: "16px"
  intro: "20px"
  lg: "24px"
  xl: "32px"
  footer: "40px"
components:
  card:
    backgroundColor: "{colors.riser}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "14px 16px"
    height: "72px"
  card-highlight:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "14px 16px"
    height: "72px"
  button-round:
    backgroundColor: "{colors.riser}"
    textColor: "{colors.text}"
    rounded: "{rounded.round}"
    size: "48px"
  button-round-hover:
    backgroundColor: "{colors.riser-top}"
  lower-third:
    backgroundColor: "{colors.stage}"
    textColor: "{colors.text}"
    rounded: "{rounded.plate}"
    padding: "12px 16px 12px 84px"
    height: "68px"
  avatar:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.round}"
    size: "76px"
  avatar-compact:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.round}"
    size: "44px"
  pending-tag:
    backgroundColor: "{colors.pending}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
---

# Design System: Marco Túlio · Links

## Overview

**Creative North Star: "One Man, One Spot"**

The page is a keynote stage seen from the front row. It is a dark room with a brand-blue LED backwall glowing low behind the speaker and a single cyan-white follow-spot cone coming down from top centre. Light comes from one place only, so every surface is built the same way: lit top edge, body falling into shadow, shadow cast downward onto the floor. The brightest object below the speaker is the one commercial path, the WhatsApp card "Quero conversar sobre meu negócio". Everything else is the supporting programme and stays further back in the dark.

The system is narrow on purpose: one phone-width column (480px max), one accent, two brand faces, and one authored motion moment when the lights come up on load. The photo of the subject is never tinted. He keeps the light of his own photograph; the spot, haze and LED wash light the space behind and around him. This is how it shipped. An earlier plan clipped a top light onto the subject, and that was removed because it discoloured the real photo.

The anti-reference is the flat navy Linktree: evenly glowing cards that all compete for attention, with nothing lighting the scene.

**Key Characteristics:**
- Always dark. The ground runs from stage floor (#0B1119) to page (#0F1620), and the only colour-bearing light is the LED wall and the spot.
- One light source, from above. Lit top borders, shadows that fall downward, a light pool spilling under the CTA.
- Broadcast lower-third for identity: a dark plate with a cyan top rule, the ringed avatar breaking its left edge.
- Exactly one lit card per page, and only on the main page.
- One load sequence (spot opens, subject brightens, CTA pool lands last). It does not play under reduced motion.
- Real or nothing: missing content shows as a visible amber [PREENCHER] marker and is never faked.

## Colors

The palette is a dark stage with a single electric-cyan light. It is The Seller's palette, confirmed against theseller.com.br, and the user requires it.

### Primary
- **Follow-Spot Cyan** (accent): the light itself. Used for the CTA card face, the avatar ring, the lower-third top rule, the role line, line icons on standard cards, the verified rosette, the focus outline, the caret and the text selection. Cyan elsewhere always reads as "where the light is".
- **Spot Core Cyan** (accent-lit): the hot top of the CTA card gradient (accent-lit → accent at 55% → #00A3D3). Use it only inside the lit card.

### Secondary
- **LED Wall Blue** (wall): the brand-blue backwall wash rising behind the subject from the bottom of the stage. On desktop it also tints the body behind the column (rgba(0, 96, 171, 0.28)).
- **Deep Wall Blue** (wall-deep): the middle stop where the wall fades into the stage dark.

### Neutral
- **Stage Floor** (stage): the darkest ground. Used for the body, the lower-third plate, the avatar's inner border and the far edge of the LED fade.
- **House Dark** (bg): the page column and the floor fade that swallows the bottom of the photo.
- **Riser** (riser) / **Riser Top** (riser-top): standard cards (a top-to-bottom gradient from riser-top to riser) and round buttons (riser at rest, riser-top on hover). Cards are the stage risers.
- **Ink** (ink): text and icons placed on cyan. It has the same value as stage, but it is kept as its own token because it plays the "text on light" role.
- **House White** (text): names, titles and icons on dark.
- **Haze Grey** (muted): bio, card subtitles, chevrons and the footer.
- **Edge** (edge) / **Lit Edge** (edge-lit): 1px hairlines. edge goes on the sides and bottom, edge-lit on the top, because the top is the side the light hits.
- **Pending Amber** (pending): only for the [PREENCHER] marker. It exists to be removed once the content is filled in.

### Named Rules
**The One Light Rule.** Cyan is light, not decoration. A surface is filled with cyan only when the spot lands on it, and on the main page that is the single WhatsApp card. Every other use of cyan is a thin line, a ring, a small icon or a short label.

**The Untouched Subject Rule.** No overlay, gradient, blend or filter sits on the subject's photo once it has finished loading. The spot cone and haze sit behind him and blend with screen; the only thing in front of him is the floor fade at the base. The one exception is the load animation, which brightens the photo from brightness(0.55) to none and then clears completely.

## Typography

**Display Font:** Poppins 500/600, self-hosted latin subset (with system-ui, -apple-system, Segoe UI fallback)
**Body Font:** DM Sans, self-hosted latin subset (with the same system fallback)

**Character:** Poppins gives the name, card titles and role line the round, confident geometry of a stage caption. DM Sans keeps the reading text quiet and narrow. Both are brand faces; system fonts appear only as fallbacks.

### Hierarchy
- **Display** (Poppins 600, 25px, 1.15, -0.015em, balanced wrap): the name in the lower-third, followed by the verified rosette (20px). In the compact subpage header it drops to 18px with a 17px rosette.
- **Headline** (Poppins 600, 26px, 1.2, -0.015em): the subpage title ("Minhas empresas").
- **Title** (Poppins 600, 16px, 1.3, balanced wrap): card titles.
- **Label** (Poppins 500, 12.5px, 0.06em, uppercase, cyan): the role line under the name in the lower-third, "Empreendedor · IA e Vendas". This is the "super" of a TV lower-third and appears only there.
- **Body** (DM Sans 400, 16px, 1.5, max 34ch, muted): the bio.
- **Body small** (DM Sans 400, 14px, muted, clamped to 2 lines): card subtitles.
- **Caption** (DM Sans 400, 13px, muted, centred): the footer.

### Named Rules
**The Caption Belongs to the Plate Rule.** Uppercase tracked cyan text exists only as the lower-third's role line, directly under the name it describes. It never sits above a heading or a card group as a section label.

## Layout

There is a single centred column, 100% wide up to 480px, with full-viewport height and the footer pushed to the bottom (margin-top: auto). The main page stacks top to bottom: the stage (40svh, clamped between 300px and 420px), the lower-third pulled up into the stage by 34px with 16px side insets, the intro (20px side padding, bio, then social buttons 16px below), and the card list. The subpage stacks a 16px-padded topbar (round back button, 44px avatar, 18px name), a 26px title 32px down with 20px side margins, and the card list 16px below the title.

Rhythm: 16px is the gutter for the card list and the plate. Cards are 12px apart. Social buttons are 10px apart. Card content is 14px apart. The main card list starts 24px below the intro. The lit card gets 18px of extra space below it so its floor pool has room.

Above 560px the column stays at 480px and dissolves into the room instead of becoming a framed phone. The page background turns transparent over a radial LED-blue glow on the body, and the stage is masked to transparent across its outer 14% on each side.

## Elevation & Depth

Depth comes from light falling from above. Each raised surface has a lighter top border (edge-lit), a darker body, and a soft shadow pushed downward with a negative spread, so the shadow sits on the floor under the object rather than around it. Nothing glows from all sides. The stage builds depth from layers: the LED gradient wall, a 5px LED pixel grid visible only where the wall is lit, the blurred conic spot cone (screen blend) with a grain haze inside it, the photo, then the floor fade.

### Shadow Vocabulary
- **Riser rest** (`box-shadow: 0 14px 26px -16px rgba(0, 0, 0, 0.85)`): standard card at rest.
- **Riser forward** (`box-shadow: 0 26px 30px -14px rgba(0, 0, 0, 1)`): standard card on hover, as it steps toward the light.
- **Lit card** (`box-shadow: 0 16px 28px -14px rgba(0, 0, 0, 0.9)`, hover `0 22px 32px -14px rgba(0, 0, 0, 1)`): the CTA card.
- **Plate** (`box-shadow: 0 18px 36px -18px rgba(0, 0, 0, 0.9)`): the lower-third.
- **Floor pool**: a blurred cyan ellipse (radial rgba(0, 177, 226, 0.6) → 0, blur 4px) 30px tall directly under the CTA card. This is the light the card spills onto the floor.

### Named Rules
**The Lit-From-Above Rule.** Every new surface takes its highlight on the top edge and casts its shadow downward. No side or bottom highlights, no all-around glows, no shadows offset sideways.

## Shapes

Shapes are softened rectangles and true circles. Cards use a 16px radius (the same value as the global focus outline). The lower-third plate is crisper at 6px, like a broadcast graphic, and its top rule follows the plate's top-right corner. Round buttons, avatars, company initials and the pending dot are full circles. The pending tag is a pill. Borders are 1px hairlines. The avatar uses a 2px cyan ring with a 2px stage-dark gap around the photo.

## Components

### Cards (programme risers)
Cards are risers on a dark stage: quiet until they step forward into the light.
- **Corner Style:** gently rounded (16px).
- **Background:** vertical gradient from riser-top to riser, with a 1px edge border and an edge-lit top border.
- **Content:** a 32px icon slot (24px cyan line icon), a title and a 2-line subtitle, and a muted 20px chevron on the right. Minimum height 72px, padding 14px 16px.
- **Hover / Focus:** the card rises 3px, its top border brightens (rgba(220, 248, 255, 0.55)), a top-down light wash fades in, the icon brightens to pale cyan, the chevron nudges 2px right, and the floor shadow deepens. Pressing returns the card to rest. Transitions take 0.25s on the ease-out curve.
- **Company variant (/empresas):** a 40px circular logo on white, or a cyan-outlined Poppins initial when there is no logo.

### Lit Card (the one CTA)
- **Background:** cyan gradient (accent-lit → accent → #00A3D3), with a near-white top border (rgba(255, 255, 255, 0.55)). Text, icon and chevron are ink; the subtitle is ink at 82%.
- **Floor pool** underneath (see Elevation). It lands last in the load sequence.
- **Focus:** the outline switches to white, because a cyan outline would disappear against the cyan face.
- **Limit:** exactly one per main page (the build enforces this). It is the WhatsApp card.

### Lower-Third (identity plate)
- A stage-dark plate (6px radius) at least 68px tall, overlapping the base of the photo. A 3px cyan rule runs along the top from the avatar to the right edge. The 76px ringed avatar sits outside the plate's left edge (left -8px). Content is the Display name with the verified rosette, then the cyan Label role line.

### Round Buttons (social, back)
- **Shape:** 48px circle in riser, with an edge border and an edge-lit top border. Icons are 20px white SVGs.
- **Hover:** riser-top fill and a brighter top edge; social buttons also rise 1px. Transitions take 0.2s ease-out. The focus outline follows the circle.
- **Pending:** a 10px amber dot ringed with the page colour at the top right.

### Pending Tag
- An amber pill (11.5px, weight 600, ink text) reading "PREENCHER: …". It marks content the owner has not supplied yet, and the build can fail on it in strict mode. Treat it as a content state that will be removed, not as decoration.

### Stage (signature)
- From back to front: the LED wall gradient rising from the bottom centre, the pixel-grid mask, the spot cone (a conic gradient from 50% -6%, blur 8px, screen blend) with grain haze inside it, the cut-out photo (min(80%, 340px), 18px from the top), and the floor fade (bottom 42%, into bg). The subpage reuses a quieter version: a 260px-tall conic beam with a wall glow behind the topbar.
- **Motion:** this is the system's only authored motion. On load the spot widens from scaleX(0.55) and the subject brightens from brightness(0.55) saturate(0.8) to unfiltered, both over 1.2s. The CTA floor pool scales in after 0.55s. The easing is cubic-bezier(0.16, 1, 0.3, 1). Cards do not stagger in. Under reduced motion all animation and transitions are removed.

## Do's and Don'ts

### Do:
- **Do** take every surface's highlight from the top: an edge-lit (rgba(255, 255, 255, 0.16)) top border over edge sides, and a negative-spread shadow falling downward.
- **Do** keep a single filled-cyan surface per page, the WhatsApp CTA, and give it its floor pool.
- **Do** leave the subject's photo with its own light; put the spot, haze and wall behind him.
- **Do** use Poppins 600 for names and titles and DM Sans for reading text, both self-hosted.
- **Do** show missing content with the amber pending tag instead of inventing it.
- **Do** keep motion to the single load sequence, with no stagger, and remove it entirely under reduced motion.

### Don't:
- **Don't** make cards glow evenly or light more than one card with cyan; that is the flat Linktree the system rejects.
- **Don't** clip a light, gradient or tint onto the subject's photo.
- **Don't** use uppercase tracked cyan labels anywhere except the lower-third role line.
- **Don't** add a light theme; the page is always dark.
- **Don't** add numbers, stamps, credentials, testimonials or logos that the owner has not supplied.

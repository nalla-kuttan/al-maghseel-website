---
name: Al Maghseel Website
description: Trust-first UAE AC service landing page for fast repair, installation, and maintenance inquiries.
colors:
  oxblood-50: "#fbf3f1"
  oxblood-100: "#f2d7d2"
  oxblood-200: "#e6aca4"
  oxblood-300: "#d77b70"
  oxblood-400: "#bd4b43"
  oxblood-500: "#9d2925"
  oxblood-600: "#84201c"
  oxblood-700: "#6d1815"
  oxblood-800: "#54110f"
  oxblood-900: "#3b0c0a"
  oxblood-950: "#210605"
  service-navy-50: "#f0f4f8"
  service-navy-100: "#d9e2ec"
  service-navy-200: "#bcccdc"
  service-navy-300: "#9fb3c8"
  service-navy-400: "#829ab1"
  service-navy-500: "#627d98"
  service-navy-600: "#486581"
  service-navy-700: "#334e68"
  service-navy-800: "#243b53"
  service-navy-900: "#102a43"
  white: "#ffffff"
  ink: "#030712"
  body-muted: "#374151"
  whatsapp: "#047857"
typography:
  display:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "clamp(2.625rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "normal"
  headline:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontFamily: "var(--font-inter), sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.75
  label:
    fontFamily: "var(--font-inter), sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.025em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  modal: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.oxblood-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.oxblood-900}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px"
---

# Design System: Al Maghseel Website

## 1. Overview

**Creative North Star: "The Cooling Service Desk"**

The interface should feel like a calm, capable service counter for a hot-climate emergency: direct, well-marked, and easy to act on. It is a brand surface, but the brand earns trust through operational clarity rather than decorative flourish. Every fold should answer the visitor's immediate question: can they help me, where, how quickly, and how do I contact them?

The system rejects cheap lead-generation contractor templates, overly flashy sales pages, generic stock-service layouts, and exaggerated emergency scare tactics. The existing direction is practical and trust-first: white service surfaces, deep oxblood authority, navy support tones, real HVAC imagery, compact cards, and persistent phone or WhatsApp paths.

**Key Characteristics:**
- Direct CTA hierarchy for quote, phone, and WhatsApp actions.
- Deep oxblood carries authority; white space carries clarity.
- Real HVAC imagery supports credibility instead of acting as decoration.
- Squared, practical controls feel professional and service-oriented.
- Copy stays specific, reassuring, and action-ready.

## 2. Colors

The palette is a restrained service palette: oxblood for authority and urgency, navy for technical steadiness, white for clarity, and WhatsApp green only for the messaging action.

### Primary
- **Service Oxblood**: The main brand authority color for headers, primary CTAs, icons, selection, and emergency-service emphasis.
- **Deep Oxblood**: The highest-trust CTA and top-bar color. Use it when the action needs weight: free quote, primary contact, or brand anchor.

### Secondary
- **Service Navy**: Technical support color for headings, modal titles, quieter text structure, and operational details when red would feel too urgent.
- **Accessible WhatsApp Green**: Reserved for WhatsApp actions only. The live UI uses a darker green so white labels meet WCAG AA contrast.

### Neutral
- **White Service Surface**: Default page and card background. It keeps the site readable for customers making quick decisions on mobile.
- **Ink**: Primary text color for headings and key service labels.
- **Body Muted**: Body copy and explanatory text. Keep it dark enough for WCAG AA contrast.

### Named Rules

**The Action Color Rule.** Oxblood means Al Maghseel authority; green means WhatsApp. Never blur those meanings.

**The Clean Surface Rule.** Most sections stay white or near-white. Trust comes from clarity, real images, and exact content, not from tinted decoration.

## 3. Typography

**Display Font:** Outfit via `var(--font-outfit)` with sans-serif fallback  
**Body Font:** Inter via `var(--font-inter)` with sans-serif fallback  
**Label/Mono Font:** Inter via `var(--font-inter)` with sans-serif fallback

**Character:** Outfit gives the landing page a sturdy, straightforward headline voice. Inter keeps service details, contact information, and form labels legible under quick scanning.

### Hierarchy
- **Display** (900, fluid from about 42px to 72px, tight line-height): Hero headline only. Keep letter spacing normal; do not over-tighten.
- **Headline** (900, 30px to 36px, compact line-height): Section headings such as services, areas, and contact.
- **Title** (800-900, 14px to 20px, tight line-height): Service card names, trust markers, modal headings, and contact blocks.
- **Body** (500, 16px to 18px, 1.75 line-height): Service explanations and reassuring copy. Keep line length under 75ch.
- **Label** (800, 11px to 13px, modest tracking, uppercase only for short CTAs): Buttons, section kickers, and compact metadata.

### Named Rules

**The Plain Confidence Rule.** Type should be bold and readable, not stylized. Avoid editorial serif drama, decorative scripts, and tiny low-contrast labels.

## 4. Elevation

This system uses a hybrid of flat service surfaces and light structural shadows. Shadows should help separate sticky navigation, cards, and emergency contact panels; they should not create soft decorative "ghost cards." A border plus a large soft shadow is only acceptable when the shadow is subtle and the element has a real functional role.

### Shadow Vocabulary
- **Sticky Header** (`0 8px 30px rgba(64,16,16,0.08)`): Keeps the header readable while scrolling without making it feel heavy.
- **Hero Trust Panel** (`0 14px 40px rgba(36,6,6,0.12)`): Adds hierarchy to trust markers near the hero.
- **Service Card Hover** (`0 14px 28px rgba(59,12,10,0.1)`): A small interactive lift for service cards only.
- **Contact Callout** (`0 18px 45px rgba(36,6,6,0.18)`): Use sparingly for the emergency service contact panel or modal-like surfaces.

### Named Rules

**The Functional Lift Rule.** Elevation must explain state or priority. If a shadow only decorates a static white box, remove it.

## 5. Components

### Buttons
- **Shape:** Practical squared corners with a slight curve (4px radius).
- **Primary:** Deep oxblood background with white text, heavy uppercase label, icon when the action benefits from direction or contact context.
- **Hover / Focus:** Darken or lighten within the oxblood ramp; always include a visible focus state for keyboard users.
- **Secondary:** White background, oxblood border and text. Use for phone or secondary quote actions.
- **WhatsApp:** WhatsApp green background, white text, message icon. Use only for messaging flows.

### Chips
- **Style:** Use compact icon-and-label trust markers rather than pill-heavy tag clouds.
- **State:** Chips should communicate proof points such as 24/7 support, fast response, expert technicians, and genuine parts.

### Cards / Containers
- **Corner Style:** Slightly squared cards (6px radius) for service grids; modal cards may use 16px.
- **Background:** White by default with gray or oxblood-tinted borders.
- **Shadow Strategy:** Flat at rest or very light shadow; service cards can lift on hover.
- **Border:** Use full borders, not side stripes. Border color should stay neutral or very light oxblood.
- **Internal Padding:** 20px for compact cards; 24px to 32px for larger contact panels.

### Inputs / Fields
- **Style:** Light slate field background, 8px radius, clear label above the control.
- **Focus:** Shift border and ring to the brand red family; do not rely on color alone if validation states are added.
- **Error / Disabled:** Error states should use explicit text and a clear red border; disabled fields should retain readable contrast.

### Navigation
- **Style:** Sticky white header with deep oxblood utility bar on desktop. Nav links are compact, bold, and dark.
- **Default / Hover:** Default text stays near ink; hover shifts to oxblood.
- **Mobile:** Keep the menu control square, obvious, and keyboard-accessible. Contact CTAs should remain available through fixed mobile call and WhatsApp affordances.

### Hero Contact Cluster

The hero should always keep quote, phone, and WhatsApp actions close to the main promise. Real HVAC imagery is part of the credibility system; do not replace it with abstract gradients or generic icons.

## 6. Do's and Don'ts

### Do:
- **Do** preserve the quote, phone, and WhatsApp hierarchy on every major landing-page revision.
- **Do** use real HVAC imagery when a section needs proof or atmosphere.
- **Do** keep oxblood for Al Maghseel authority and WhatsApp green for WhatsApp only.
- **Do** make service information scannable with clear headings, short explanations, and direct contact paths.
- **Do** keep contrast strong enough for mobile use in bright environments.

### Don't:
- **Don't** create cheap lead-generation contractor templates.
- **Don't** make the site overly flashy, alarmist, or dependent on emergency scare tactics.
- **Don't** use generic stock-service layouts that hide practical contact information.
- **Don't** use colored side-stripe borders, gradient text, glassmorphism, or repeated identical icon-card grids as decoration.
- **Don't** over-round cards or controls beyond the existing practical radius unless the component is a modal.

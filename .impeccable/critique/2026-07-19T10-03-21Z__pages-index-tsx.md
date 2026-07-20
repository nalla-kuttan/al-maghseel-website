---
target: pages/index.tsx
total_score: 26
p0_count: 0
p1_count: 3
p2_count: 3
timestamp: 2026-07-19T10-03-21Z
slug: pages-index-tsx
---
# Homepage UI/UX critique

## Verdict

The site has a strong, readable, mobile-safe foundation and a credible visual tone. Its main weakness is not appearance but conversion clarity and proof: too many equivalent contact actions, inconsistent destinations, repetitive landing-page patterns, and broad trust claims without visible verification.

## Priority backlog

1. **P1 — Unify the conversion path.** Make one action dominant (recommended: WhatsApp quote) and Call the only secondary action. Ensure every “Get Quote” uses the same flow. Remove the duplicate hero WhatsApp button. Make “View All Services” reveal services or rename it to describe the WhatsApp handoff.
2. **P1 — Replace generic trust claims with verifiable proof.** Replace geographically mismatched/generic HVAC imagery with real UAE team, vehicle, workshop, and project photography. Link testimonials to a review source or use identifiable, approved customer proof. Verify or soften “Trusted by Thousands,” 24/7, certified, genuine parts, same-day, and UAE-wide claims.
3. **P1 — Repair the booking-dialog experience.** Apply site typography globally so the portalled dialog does not fall back to serif, give the close button an accessible name, strengthen placeholder contrast, stack name/location on narrow screens, add autocomplete hints, and respect reduced-motion preferences.
4. **P2 — Simplify the service architecture.** Group entry points by customer symptom or intent (not cooling, leaking water, new installation, maintenance contract), then progressively disclose technical work. Reduce six equal cards plus nine chips and repeated proof/contact blocks.
5. **P2 — Rationalize mobile contact UI.** Reduce the fixed bar from three actions to two and add bottom content spacing while it is visible so it cannot cover the page ending. “Get Quote” must not unexpectedly open email.
6. **P2 — Tighten copy and terminology.** Replace awkward phrases such as “All over UAE,” “Indoor & Outdoor Water Service,” and likely “Magnetic Conductor” with customer-recognizable, professionally verified wording.

## Strengths to preserve

- Immediate scan hierarchy and high text contrast.
- Distinct oxblood brand authority with green reserved for WhatsApp.
- Large mobile touch targets and no visible horizontal overflow at 390px.
- Useful modal validation and call/email recovery when WhatsApp cannot open.
- Urgent tone without alarmist tactics.

## Heuristic score

26/40. The weakest areas are consistency/standards, minimalist design, visibility of external handoffs, and concrete help about price, warranty, response time, and what happens after diagnosis.

## Evidence and run notes

- Target: `pages/index.tsx`; slug: `pages-index-tsx`; ignore list absent.
- Two independent assessments were completed before synthesis.
- Deterministic detector returned `[]` for the target and expanded component scan.
- Live URL returned HTTP 200 and matched current source content.
- Browser backend was unavailable, so live console capture and overlay injection were skipped.
- Fallback evidence used current 1280×720, 390×844, and 1440×900 booking-dialog captures plus source review.
- No live server was started and no temporary browser files were created.

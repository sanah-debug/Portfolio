---
name: Obsidian Architectural Portfolio
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#282a2f'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#57d7e9'
  on-secondary: '#00363d'
  secondary-container: '#00a8b9'
  on-secondary-container: '#00373d'
  tertiary: '#bfc7d7'
  on-tertiary: '#29313e'
  tertiary-container: '#8991a1'
  on-tertiary-container: '#222a37'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#96f1ff'
  secondary-fixed-dim: '#57d7e9'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f57'
  tertiary-fixed: '#dbe3f4'
  tertiary-fixed-dim: '#bfc7d7'
  on-tertiary-fixed: '#141c28'
  on-tertiary-fixed-variant: '#3f4755'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a premium, architecturally precise developer identity for an ambitious full-stack engineer. The visual stance blends restrained engineering minimalism with modern technical elegance—steering clear of generic junior-developer templates in favor of bespoke craftsmanship, deliberate structure, and editorial clarity.

### Audience & Mood
- **Target Audience:** Engineering managers, senior technical recruiters, peer open-source contributors, and high-growth startup founders evaluating taste, code architecture, and modern product intuition.
- **Emotional Response:** Inspires quiet confidence, technical rigor, and taste. The experience projects someone who respects systems, details, performance, and typography.
- **Style Direction:** Modern Technical Precision. Low-light architectural surfacing, razor-sharp 1px subtle boundary definitions, restrained optical glow accents, structured monospaced metadata, and generous compositional negative space.

## Colors

The color palette is built on deep structural charcoal foundations with calibrated luminance steps, illuminated by deliberate hits of electric violet and atmospheric cyan.

### Dark Theme (Default)
- **Base Canvas:** `#0B0D12` (Void Charcoal) — Deep, non-pure black that preserves human eye comfort and contrast fidelity.
- **Elevated Canvas / Cards:** `#121620` (Graphite Tier 1) and `#181D29` (Graphite Tier 2, hover/interactive states).
- **Primary Text:** `#F4F6FC` (Soft Optic White) — 96% luminance, avoids harsh chromatic glare.
- **Secondary / Supporting Text:** `#A0A8B8` (Cool Muted Slate) — High-contrast legibility adhering to strict WCAG AAA guidelines.
- **Accent Primary:** `#8B5CF6` (Electric Violet) — Applied to key interactive triggers, status indicators, and subtle focal gradients.
- **Accent Secondary:** `#55D6E8` (Cyber Cyan) — Dedicated to micro-highlights, terminal status tags, commit graphs, and secondary data readouts.
- **Structural Dividers & Borders:** `rgba(244, 246, 252, 0.08)` default, shifting to `rgba(139, 92, 246, 0.35)` on targeted hover states.

### Light Theme Adaptation
- **Base Canvas:** `#F8F9FC` (Crisp Off-White).
- **Elevated Canvas / Cards:** `#FFFFFF` with secondary tiers at `#EDF1F7`.
- **Primary Text:** `#0E121B` (Deep Navy Charcoal).
- **Secondary Text:** `#525D73` (Structured Slate).
- **Accent Primary:** `#7C3AED` (Deepened Violet for high optical contrast on light surfaces).
- **Accent Secondary:** `#0891B2` (Deepened Cyan).
- **Structural Dividers & Borders:** `rgba(14, 18, 27, 0.08)`.

## Typography

The type system balances mathematical rigor with human warmth across three distinct type families:

1. **Space Grotesk (Headings & Display):** Selected for its geometric stance, modernist proportions, and structural authority. Used for prominent headers, metric callouts, and project titles.
2. **Inter (Interface & Prose):** World-class neutrality, variable optical legibility, and high x-height for long-form case studies, narrative introductions, and component labels.
3. **JetBrains Mono (Technical Metadata & Tags):** Clear code typography for stack tokens, GitHub commit indicators, terminal snippets, timestamps, and architectural schematics. Always set with slight letter tracking when styled as uppercase indicators.

## Layout & Spacing

The layout philosophy follows a strict 12-column architectural grid with structured content boundaries (max container width: 1240px).

### Grid Cadence
- **Desktop (1024px+):** 12 columns, `gutter: 1.5rem` (24px), canvas outer `margin: 3rem` (48px). Section-level vertical separation operates in multiples of `space-xl` (40px, 80px, 120px).
- **Tablet (768px - 1023px):** 8 columns, `gutter: 1.25rem` (20px), outer `margin: 2rem` (32px).
- **Mobile (<768px):** 4 columns, `gutter: 1rem` (16px), outer `margin: 1.25rem` (20px). Columns reflow into single-column vertical stacks.

### Rhythm Principles
- Internal card padding is consistently pegged to `space-lg` (24px) for desktop and `space-md` (16px) for mobile.
- Form inputs, badge groups, and metadata clusters maintain tight coherence with `space-xs` (4px) and `space-sm` (8px).

## Elevation & Depth

This design system avoids heavy drop shadows, instead using layered luminous planes and 1px translucent boundaries.

### Depth Mechanics
- **Ground Floor (Z0):** Base canvas background (`#0B0D12`). Solid, non-reflective.
- **Surface Layer 1 (Z1):** Project cards, resume cards, and utility panels (`#121620`). Encased in a uniform `1px solid rgba(244, 246, 252, 0.08)` boundary.
- **Interactive Elevated (Z2):** Hovered cards and active panels (`#181D29`). The border transitions to `1px solid rgba(139, 92, 246, 0.35)` with an ambient violet bloom: `box-shadow: 0 12px 32px -8px rgba(139, 92, 246, 0.12)`.
- **Overlay & Sheet (Z3):** Modals, code inspection flyouts, and command palette (`rgba(18, 22, 32, 0.85)`). Equipped with `backdrop-filter: blur(16px)` and subtle top-edge highlight (`box-shadow: inset 0 1px 0 0 rgba(244, 246, 252, 0.15)`).

## Shapes

The geometry adheres to Level 2 (Rounded) corner treatment, maintaining an engineered, clean curvature that softens interface edges without becoming toy-like.

- **Base Radius (0.5rem / 8px):** Buttons, input fields, badges, code blocks, tab switchers.
- **Large Radius (1rem / 16px):** Project cards, interactive showcase panels, tech stack matrices.
- **Extra Large Radius (1.5rem / 24px):** Hero containers, modal dialogs, and flyout navigation drawplates.
- **Full Pill (`9999px`):** Status indicator tags (e.g., "Available for Hire"), icon-only link buttons, and live tech chips.

## Components

### Buttons
- **Primary Button:** Background in `#8B5CF6`, text in `#FFFFFF`, font weight `500` (Inter). Transitions smoothly on hover to `#7C3AED` with a subtle glow (`0 0 16px rgba(139, 92, 246, 0.4)`).
- **Secondary / Outline Button:** Background in `transparent`, border `1px solid rgba(244, 246, 252, 0.14)`, text in `#F4F6FC`. On hover, background shifts to `rgba(244, 246, 252, 0.05)` and border transitions to `rgba(85, 214, 232, 0.5)`.
- **Ghost Action:** Background `transparent`, text `#A0A8B8`. Hover evokes `#F4F6FC` with an integrated arrow translate effect.

### Chips & Badges
- **Tech Stack Badge:** JetBrains Mono font (`code-sm`), padding `4px 10px`, background `#121620`, border `1px solid rgba(244, 246, 252, 0.08)`, text `#A0A8B8`. Hover activates secondary accent text (`#55D6E8`).
- **Availability Beacon:** Fully rounded pill containing a pulsing green dot (`#10B981`) paired with `label-caps` text: `"AVAILABLE FOR FULL-TIME ROLES"`.

### Cards & Project Showcases
- **Structure:** `#121620` fill, 16px border-radius, `1px solid rgba(244, 246, 252, 0.08)`.
- **Header:** Project category in JetBrains Mono (`label-caps`), title in Space Grotesk (`headline-md`).
- **Body:** Description in Inter (`body-md`), list of tech badges, and a direct repository/live demo link group at the bottom right.
- **Hover Treatment:** Card translates -3px on the Y-axis; border brightens with an electric violet wash.

### Form Inputs
- **Base Input / Textarea:** Background `#0B0D12`, border `1px solid rgba(244, 246, 252, 0.12)`, padding `12px 16px`, text `#F4F6FC`, placeholder `#525D73`.
- **Focus State:** Border shifts to `#8B5CF6`, outline removed, subtle box shadow `0 0 0 3px rgba(139, 92, 246, 0.2)`.

### Code Blocks & Terminal Windows
- Window header bar displaying three micro status dots (`#EF4444`, `#F59E0B`, `#10B981`), tab titles in JetBrains Mono, copy-to-clipboard trigger button, and syntax highlighted contents utilizing electric violet and cyber cyan as primary token colors.
# Synch.dev Portfolio Design Spec

## Goal

Build a premium bilingual RU/EN portfolio for **Synch.dev**, positioned as a Creative Frontend Developer brand. The site should feel comparable in polish to the Lumora reference, but use its own visual language: a light gallery of digital objects, live 3D, particles, refined motion, and tactile case-study presentation.

## Audience

The primary audience is potential international and Russian-speaking clients or teams looking for high-end frontend, WebGL, animation, and product-interface craft. The site should quickly signal creative technical ability, then support that first impression with credible project, stack, process, and contact sections.

## Visual Direction

Direction: **Gallery of Digital Objects**.

The page uses a light premium palette: warm white, soft stone, near-black ink, muted graphite, and one warm accent. The hero and project cards should look like designed product artifacts, not a generic SaaS template or dark sci-fi dashboard. 3D elements are framed as tactile objects floating in a refined editorial layout.

Design traits:

- Large confident typography with tight rhythm and readable line lengths.
- Full first viewport with a strong 3D hero object and particle/grid field.
- Subtle glass and shadow treatments, used sparingly.
- Smooth section reveals, hover motion, and cursor/parallax response.
- Case-study cards that feel like digital objects with depth, not flat tiles.
- Bilingual language toggle in the header and footer.
- Mobile layout that keeps the 3D scene visible without hiding core copy.

## Content Model

Default language: English. Russian is available through the language toggle. Both languages should use the same layout and section order.

Main English hero copy:

- Brand: `Synch.dev`
- Role line: `Creative Frontend Developer / WebGL / Motion UI`
- H1: `Interfaces that feel alive.`
- Supporting copy: `Synch.dev builds polished web experiences with 3D scenes, animation systems, and production-ready frontend architecture.`
- CTAs: `View Work`, `Start Project`

Main Russian hero copy:

- Brand: `Synch.dev`
- Role line: `Creative Frontend Developer / WebGL / Motion UI`
- H1: `Интерфейсы, которые ощущаются живыми.`
- Supporting copy: `Synch.dev создает выразительные веб-интерфейсы с 3D-сценами, анимационными системами и продакшн-архитектурой фронтенда.`
- CTAs: `Смотреть работы`, `Обсудить проект`

## Page Structure

1. **Loader**
   - Full-screen light-to-dark branded loading moment.
   - Shows `Synch.dev`, a compact progress line, and a short count.
   - Exits into hero with a smooth upward/fade reveal.

2. **Header**
   - Fixed or sticky overlay on the hero.
   - Brand mark/name on the left.
   - Desktop navigation: `Work`, `Lab`, `Stack`, `Contact`.
   - Language toggle: `EN / RU`.
   - Mobile menu button opens a full-screen overlay.

3. **Hero**
   - Full first viewport.
   - Live Three.js scene with a central geometric 3D object, soft particles, cursor parallax, and slow idle rotation.
   - Text and CTA column remain readable over the light background.
   - Bottom proof/skill rail: `3D scenes`, `Motion systems`, `RU / EN`, `Performance`.

4. **Selected Work**
   - Four case-study cards.
   - Each card includes title, type, year, short description, tags, and an abstract 3D artifact.
   - Hover interaction lifts the card and changes object rotation or glow.
   - Cards are in-page presentation cards for the first version, with no external navigation and no detail panel.

5. **Interactive Lab**
   - A compact strip showing experimental strengths: particles, shader-like motion, scroll interaction, and UI micro-motion.
   - Interactions should be real local UI state where practical, not static labels only.

6. **Stack & Process**
   - Technology groups: React, TypeScript, Three.js/WebGL, animation, performance, accessibility.
   - Process timeline: concept, prototype, interface system, implementation, QA.
   - Count-up stats may be used, but they should feel restrained and credible.

7. **Contact**
   - CTA section with a polished modal.
   - Form fields: name, email, project summary.
   - Submit is a stub: no network call, shows a success state.
   - Copy is bilingual.

8. **Footer**
   - Repeats brand, navigation, language toggle, and social/contact links.
   - Maintains the same light premium system or uses a restrained near-black closing band.

## Interaction And Motion

Required:

- Loader progress and exit animation.
- Hero 3D object with idle movement.
- Particle field behind or around the object.
- Cursor parallax on desktop.
- Scroll-triggered text and card reveals.
- Hover motion on project cards, buttons, and navigation.
- Language toggle that updates visible copy without page reload.
- Mobile menu overlay.
- Contact modal with success state.
- `prefers-reduced-motion` support that keeps the page usable with reduced animation.

Motion should support hierarchy and tactility. Avoid noisy constant movement that competes with the content.

## Technical Direction

Replace the current Phaser game project with a React/Vite/TypeScript portfolio app.

Recommended stack:

- Vite
- React
- TypeScript
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- A single organized global CSS file

The implementation should keep files focused:

- `src/main.tsx`: React entry.
- `src/App.tsx`: page composition and top-level language/modal state.
- `src/content/i18n.ts`: bilingual copy.
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/HeroScene.tsx`
- `src/components/WorkGallery.tsx`
- `src/components/LabStrip.tsx`
- `src/components/StackProcess.tsx`
- `src/components/ContactModal.tsx`
- `src/components/Loader.tsx`
- `src/components/Footer.tsx`
- `src/styles.css`: design tokens, layout, responsive rules, and motion classes.

## Quality Bar

The first screen must immediately signal high-end frontend craft. The final site should pass these checks:

- 3D canvas renders on desktop and mobile.
- No blank canvas or overlapping hero text.
- Navigation and language toggle work.
- Contact modal opens, closes, and shows success state.
- Scroll sections reveal cleanly.
- Mobile layout remains polished at narrow widths.
- Build passes.
- Browser verification includes desktop and mobile screenshots.

## Approved Decisions

- Brand: `Synch.dev`
- Positioning: Creative Frontend Developer
- Languages: RU/EN
- Direction: Gallery of Digital Objects
- Project location: replace current Vite/Phaser project
- Reference level: Lumora-level polish, not Lumora copy

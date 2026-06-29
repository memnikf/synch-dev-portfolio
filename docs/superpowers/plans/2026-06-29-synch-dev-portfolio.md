# Synch.dev Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Phaser project with a premium bilingual Synch.dev Creative Frontend Developer portfolio.

**Architecture:** Build a React/Vite/TypeScript single-page app with focused components, centralized bilingual content, global design tokens, and a Three.js hero scene through React Three Fiber. App-level state owns language, loader visibility, mobile menu, and contact modal state.

**Tech Stack:** Vite, React, TypeScript, Three.js, @react-three/fiber, @react-three/drei, CSS, browser verification.

---

## File Structure

- Modify `package.json`: replace Phaser dependency with React and Three stack; update name/title scripts if needed.
- Modify `index.html`: switch title and root metadata to Synch.dev; use `src/main.tsx`.
- Delete or leave unused Phaser/game files only after the React entry builds without referencing them.
- Create `src/main.tsx`: React bootstrap.
- Create `src/App.tsx`: page composition, language state, loader/menu/modal state.
- Create `src/content/i18n.ts`: bilingual site copy and case-study data.
- Create `src/components/Loader.tsx`: branded loader.
- Create `src/components/Header.tsx`: desktop nav, language toggle, mobile menu overlay.
- Create `src/components/Hero.tsx`: first viewport layout and proof rail.
- Create `src/components/HeroScene.tsx`: Three.js object and particles.
- Create `src/components/WorkGallery.tsx`: four case cards.
- Create `src/components/LabStrip.tsx`: interactive experiment strip.
- Create `src/components/StackProcess.tsx`: stack, process, and metrics.
- Create `src/components/ContactModal.tsx`: bilingual modal and success state.
- Create `src/components/Footer.tsx`: footer navigation and language toggle.
- Replace `src/style.css` with `src/styles.css`: design tokens, layout, responsive behavior, and motion.

---

### Task 1: Dependencies And Entry

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Create: `src/main.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Install runtime dependencies**

Run:

```bash
npm install react react-dom three @react-three/fiber @react-three/drei
```

Expected: package lock updates and dependencies are available.

- [ ] **Step 2: Install React types**

Run:

```bash
npm install -D @types/react @types/react-dom
```

Expected: TypeScript can compile JSX.

- [ ] **Step 3: Update HTML entry**

Set the page title to `Synch.dev — Creative Frontend Developer`, description to the bilingual portfolio summary, and script entry to `/src/main.tsx`.

- [ ] **Step 4: Create React bootstrap**

`src/main.tsx` should import React, ReactDOM, `App`, and `styles.css`, then render `<App />` into `#app`.

- [ ] **Step 5: Verify entry compilation**

Run:

```bash
npm run build
```

Expected before later components exist: TypeScript should only fail on missing `App.tsx` if it has not been created yet; after Task 2 it must pass.

---

### Task 2: Content And App Shell

**Files:**
- Create: `src/content/i18n.ts`
- Create: `src/App.tsx`

- [ ] **Step 1: Create bilingual content**

Define `Language = 'en' | 'ru'`, navigation labels, hero copy, proof rail, four work items, lab items, stack groups, process steps, contact copy, and footer copy.

- [ ] **Step 2: Create app state**

`App.tsx` owns:

```ts
const [language, setLanguage] = useState<Language>('en');
const [loaderDone, setLoaderDone] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [contactOpen, setContactOpen] = useState(false);
```

- [ ] **Step 3: Compose sections**

Render Loader, Header, Hero, WorkGallery, LabStrip, StackProcess, Footer, and ContactModal with shared language state.

- [ ] **Step 4: Build**

Run:

```bash
npm run build
```

Expected: no TypeScript errors after placeholder components are created in later tasks.

---

### Task 3: Visual System

**Files:**
- Replace: `src/styles.css`

- [ ] **Step 1: Define tokens**

Add CSS variables for background, surface, ink, muted text, accent, borders, shadows, radii, and motion timing.

- [ ] **Step 2: Define base layout**

Add global reset, body font stack, `.site-shell`, section spacing, buttons, language toggles, modal, and responsive rules.

- [ ] **Step 3: Add motion classes**

Use CSS keyframes and transitions for loader exit, section reveal, card hover, modal entry, and reduced-motion fallback.

- [ ] **Step 4: Check mobile typography**

Ensure hero H1, nav, card titles, and modal text fit at 360px width without overlap.

---

### Task 4: Header, Loader, And Modal

**Files:**
- Create: `src/components/Loader.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/ContactModal.tsx`

- [ ] **Step 1: Implement Loader**

Count 0 to 100, show `Synch.dev`, progress line, then call `onDone()`.

- [ ] **Step 2: Implement Header**

Desktop nav scrolls to section IDs. Language toggle updates app language. Mobile menu opens full-screen overlay.

- [ ] **Step 3: Implement ContactModal**

Backdrop closes modal. Escape closes modal. Submit prevents default and shows success copy. No network call.

- [ ] **Step 4: Verify interactions**

In browser: open menu, switch language, open modal, submit form, close modal.

---

### Task 5: Hero And Three Scene

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/HeroScene.tsx`

- [ ] **Step 1: Implement Hero layout**

Render role line, H1, supporting copy, CTAs, proof rail, and scene container.

- [ ] **Step 2: Implement Three scene**

Use Canvas, ambient/directional lights, a central rounded-feeling geometric object built from available primitives, and a particle field. Animate idle rotation with `useFrame`.

- [ ] **Step 3: Add cursor parallax**

Track pointer on desktop and subtly offset object group. Keep motion disabled under reduced motion.

- [ ] **Step 4: Verify canvas**

In browser: confirm the canvas is nonblank, framed correctly, and does not cover text.

---

### Task 6: Content Sections

**Files:**
- Create: `src/components/WorkGallery.tsx`
- Create: `src/components/LabStrip.tsx`
- Create: `src/components/StackProcess.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Implement WorkGallery**

Render four cards from `i18n.ts`, each with abstract CSS/3D-looking artifact, tags, year, and hover motion.

- [ ] **Step 2: Implement LabStrip**

Render interactive buttons that switch the active lab panel between particles, shader, scroll, and motion.

- [ ] **Step 3: Implement StackProcess**

Render stack groups, process timeline, and restrained metrics.

- [ ] **Step 4: Implement Footer**

Render brand, nav, language toggle, contact CTA, and legal copy.

---

### Task 7: Final Verification

**Files:**
- Verify all implemented files.

- [ ] **Step 1: Build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 2: Run dev server**

Run:

```bash
npm run dev
```

Expected: Vite serves the Synch.dev portfolio.

- [ ] **Step 3: Browser QA**

Check desktop and mobile viewport. Confirm hero, 3D scene, language toggle, mobile menu, modal, lab interaction, section spacing, and no text overlap.

- [ ] **Step 4: Fix visible drift**

Adjust CSS and layout until the browser view matches the approved Gallery of Digital Objects direction.

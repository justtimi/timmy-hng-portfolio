# Timmy Portfolio

Live URL: https://timmy-hng-portfolio.vercel.app/

Repository: https://github.com/justtimi/timmy-hng-portfolio

## Overview

An interactive developer portfolio built with SvelteKit, Tailwind CSS, and GSAP. The creative direction is based on my illustration style: curls, waves, vines, and old book cover line work. The portfolio turns those marks into a scroll-driven narrative layer that moves through the hero, about, projects, and contact sections.

## Setup

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run check
npm run build
```

## Architecture

- `src/routes/+page.svelte` composes the main experience.
- `src/lib/components/layout/SiteNav.svelte` owns navigation, skip link, resume CTA, and theme toggle.
- `src/lib/components/motion/EmotionalThread.svelte` owns the illustrated scroll narrative.
- `src/lib/components/sections/` contains hero, about, projects, and contact sections.
- `src/lib/data/data.ts` stores project metadata and image imports.
- `src/lib/stores/theme.ts` manages persisted dark/light theme state.

## Animation Decisions

- GSAP powers entrance reveals, project stagger animations, and the scroll-drawn illustration.
- The main creative feature is cinematic storytelling through an illuminated-manuscript style SVG layer.
- Animations use transform and stroke offsets to stay smooth.
- `prefers-reduced-motion` is respected by skipping GSAP timelines for users who request less motion.

## Performance Optimization

- SvelteKit route-level bundling keeps pages split.
- Project images are imported through Vite so production builds fingerprint assets.
- Non-critical project images use lazy loading.
- Decorative SVG animation is a single page-level component to avoid duplicated DOM work.
- The contact form uses mailto instead of a server integration, so there are no exposed secrets.

## Accessibility

- Semantic sections and headings structure the page.
- A skip link is available for keyboard users.
- Focus states are visible on navigation, buttons, links, filters, and form controls.
- Images include alt text.
- Contact form status updates use `aria-live`.
- Theme toggle exposes `aria-label` and `aria-pressed`.
- Motion preferences are respected.

## Trade-Offs

- The contact form opens the user's email client instead of sending mail directly. This avoids API keys and secret handling for the submission.
- Project links currently point to the portfolio/project archive and repository because the showcased UI studies do not all have separate deployments yet.
- The illustrated background is intentionally subtle to protect readability and performance while preserving the storybook identity.

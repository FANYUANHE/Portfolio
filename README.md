# Euan Fan | Personal Portfolio

A single-page portfolio and resume website built with Vite + React, featuring light/dark theme, responsive layout, scroll-triggered animations, and a data-driven structure.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Page Sections & Components](#page-sections--components)
- [Design System](#design-system)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [License & Credits](#license--credits)

---

## Portfolio Website

[**Euan**](https://euanfan.github.io/Portfolio/)

---

## Overview

A modern single-page portfolio built with Vite + React 18. All content is driven by a centralized JSON configuration file — updating that file updates the entire site. The layout is fully responsive (desktop and mobile), and animations use GSAP (Hero timeline, ScrollTrigger) and Intersection Observer.

---

## Features

- **Vite + React** — Standard modern frontend build pipeline with excellent DX and optimized production builds.
- **Data-driven** — Personal info, experience, skills, education, and links are all in `src/data/profile.json`; edit once to update the site.
- **Light/Dark theme** — Toggle between light and dark modes; theme preference is saved in localStorage.
- **Responsive layout** — Fully adaptive for desktop and mobile.
- **Animations** — Hero entrance (GSAP timeline), scroll-triggered reveals (ScrollTrigger, Intersection Observer), liquid background blobs, and glassmorphism nav on scroll.
- **Accessibility** — Semantic HTML, smooth scroll, `rel="noopener noreferrer"` on external links.

---

## Tech Stack

| Category   | Technology        | Usage |
|------------|-------------------|-------|
| Build      | Vite              | Fast dev server and optimized production builds |
| Framework  | React 18          | Functional components with Hooks |
| Styling    | Tailwind CSS      | Utility classes + custom CSS variables |
| Animation  | GSAP 3.12 + ScrollTrigger | Timelines, scroll-triggered animations |
| Icons      | Lucide React     | Component-based icons |
| Fonts      | Inter (Google Fonts) | Weights 300–900 |

---

## Project Structure

```
portfolio/
├── index.html              # Vite entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── public/                  # Static assets (images, favicon)
│   └── images/
│       ├── favicon.png
│       ├── hero/
│       ├── company_logo/
│       └── low-code_platform/
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application component
    ├── index.css           # Global styles + Tailwind
    └── data/
        └── profile.json    # Personal data configuration
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Development mode

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Production build

```bash
npm run build
```

The build output is in the `dist/` folder and can be deployed to any static hosting service.

### Preview build

```bash
npm run preview
```

---

## Configuration

All content is driven by **`src/data/profile.json`**.

### Fields

| Field              | Description | Example |
|--------------------|-------------|---------|
| `name`             | English name | `"Euan Fan"` |
| `nameChinese`      | Chinese name | `"范园贺"` |
| `title`            | Job title | `"Senior Frontend / Platform Engineer"` |
| `location`         | Current location | `"Auckland, New Zealand"` |
| `heroImage`        | Hero photo path (relative to public) | `"/images/hero/hero_photo.jpg"` |
| `heroSubline`      | One-line tagline | `"Building scalable platforms used by millions."` |
| `heroVisa`         | Work visa/status | `"Eligible to work in New Zealand (Open Work Visa)"` |
| `heroTechStack`    | Tech stack tags | `["React", "TypeScript", "Node.js"]` |
| `experienceYears`  | Years of experience | `"10+ Years"` |
| `email` / `phone` / `wechat` | Contact details | — |

### Education

```json
"education": {
  "school": "Beihua University",
  "major": "Network Engineering",
  "period": "2011 - 2015"
}
```

### About Me

- **`aboutIntro`** — Full intro paragraph in the main About card.
- **`aboutHighlights`** — Array of `{ icon, text }`; `icon` is a Lucide icon name (e.g. `code`, `brain`, `building-2`).
- **`keyStrengths`** — List of key strengths.
- **`impactHighlights`** — List of impact highlights.

### Work Experience

```json
"experienceList": [
  {
    "company": "Meituan",
    "companyLogo": "/images/company_logo/meituan.png",
    "companyBrief": "Leading local life services and delivery platform in China.",
    "companyUrl": "https://www.meituan.com/en-US/about-us",
    "position": "Senior Software Engineer",
    "period": "Jul 2021 - Apr 2022",
    "description": [
      "Core developer for Meituan Youxuan..."
    ],
    "highlights": ["Frontend Infrastructure", "Hot-Cold Separation"]
  }
]
```

### Projects

```json
"projectList": [
  {
    "title": "Enterprise Low-Code Campaign Platform",
    "type": "mobile",
    "screenshots": ["/images/low-code_platform/toC_1.png", ...],
    "outcomes": [...],
    "role": [...],
    "background": [...],
    "challengesSolved": [...],
    "techStack": ["Frontend: React, TypeScript", "Backend: Node.js, MongoDB"]
  }
]
```

### Skills

- **`skillsGroups`** — Array of `{ title, items: [] }`, e.g. `"Languages & Frameworks"` and `"Tools & Platforms"`.
- **`skillColors`** — Optional object mapping skill name to hex color (e.g. `"React": "#61DAFB"`); used for pill backgrounds and hover effects.

```json
"skillColors": {
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E"
}
```

### Social Links

```json
"social": {
  "github": "https://github.com/EUANFAN",
  "linkedin": "https://www.linkedin.com/in/fan-yuanhe-5b17a23a1/"
}
```

---

## Page Sections & Components

| Section        | Component      | Description |
|----------------|----------------|-------------|
| **Navigation** | `Navigation`   | Fixed top; applies glass effect when scrolled; links to sections. |
| **Hero**       | `Hero`         | Full-height; name, title, location, photo, tech stack, visa status. GSAP timeline entrance animation. |
| **About Me**   | `About`        | Bento grid layout with intro, highlights, strengths, impact. ScrollTrigger animations. |
| **Experience** | `Experience`   | Timeline list with company logos, positions, descriptions. Intersection Observer for entrance animations. |
| **Projects**   | `Projects`     | Project cards with screenshots, outcomes, role, tech stack. |
| **Skills**     | `Skills`       | Grouped skill tags with color-coded pills. |
| **Contact**    | `Footer`       | Contact info, social links, copyright. |

**Global layers:**

- **LiquidBackground** — Fixed background with floating gradient blobs.
- **noise-overlay** — Subtle noise texture overlay.

---

## Design System

### CSS Variables (`:root`)

| Variable           | Meaning            | Default |
|--------------------|--------------------|---------|
| `--bg-primary`     | Page background    | `#FAFBFC` |
| `--bg-secondary`   | Secondary background | `#F1F5F9` |
| `--text-primary`   | Main text          | `#0F172A` |
| `--text-muted`     | Secondary text     | `#64748B` |
| `--accent`         | Accent color       | `#0EA5E9` |
| `--accent-soft`    | Soft accent        | `#E0F2FE` |
| `--glass-bg`       | Glass panel fill   | `rgba(255, 255, 255, 0.85)` |
| `--glass-border`   | Glass panel border | `rgba(0, 0, 0, 0.08)` |

Dark theme overrides via `[data-theme="dark"]` selector.

### Typography

- **Font**: Inter (Google Fonts), weights 300–900.
- Headings use Tailwind utilities (`tracking-tighter`, `tracking-wide`, `uppercase`, etc.) for hierarchy.

### Reusable Patterns

- **Glass** — `.glass`: semi-transparent background + `backdrop-filter: blur(12px)` + subtle border.
- **Gradients & glows** — Hero photo frame, skill pill hover shadows.
- **Bento grid** — CSS Grid for responsive About section layout.

### Animations

- **Hero**: GSAP timeline entrance animation.
- **About / Experience**: ScrollTrigger scroll-triggered entrance animations.
- **Projects**: Intersection Observer for entrance animations.

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) in recent versions.
- Dependencies: ES6+, React 18, CSS `backdrop-filter`, Intersection Observer, GSAP.
- Fully functional on mobile.

---

## Deployment

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

The project is configured with GitHub Actions — the build output is automatically deployed to the `gh-pages` branch.

### Manual deployment

Upload the contents of the `dist/` folder to any static hosting service (Vercel, Netlify, Cloudflare Pages, etc.).

---

## License & Credits

- Footer: "Crafted with React + GSAP + Tailwind CSS".
- Copyright: `© {year} {profileData.name}. All rights reserved.`
- For personal portfolio use only.

---

**Maintenance:** Edit `src/data/profile.json` to update resume content; modify `src/index.css` or `src/App.jsx` to adjust styles and components.

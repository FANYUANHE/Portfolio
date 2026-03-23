# Euan Fan | Personal Portfolio

A single-page portfolio and resume website built with **Vite + React 18**, featuring bilingual support (EN/ZH), light/dark theme, scroll-triggered GSAP animations, and a fully data-driven architecture.

**Live Site:** [https://euanfan.github.io/Portfolio/](https://euanfan.github.io/Portfolio/)

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

## Overview

A modern, modular single-page portfolio built with Vite + React 18. All content is driven by centralized data modules (`profileEn.js` / `profileZh.js`) — updating these files updates the entire site. The layout is fully responsive across desktop, tablet, and mobile. Animations use GSAP (Hero timeline, ScrollTrigger) and Intersection Observer.

---

## Features

- **Vite + React** — Standard modern frontend build pipeline with fast HMR and optimized production builds.
- **Bilingual (EN / ZH)** — Full Chinese and English content with one-click language toggle; language preference is persisted in localStorage.
- **Data-driven** — Personal info, experience, projects, skills, and links are all in separate data modules; edit once to update the site.
- **Light/Dark theme** — Toggle between light and dark modes; theme preference is saved in localStorage. Supports system preference detection to avoid flash on first load.
- **Responsive layout** — Fully adaptive for desktop, tablet, and mobile devices.
- **Animations** — Hero entrance (GSAP timeline), scroll-triggered reveals (ScrollTrigger, Intersection Observer), liquid background blobs, and glassmorphism nav on scroll.
- **Modular components** — Each section is a standalone React component for easy maintenance and extension.
- **Accessibility** — Semantic HTML, smooth scroll, `rel="noopener noreferrer"` on external links, aria labels on interactive elements.

---

## Tech Stack

| Category   | Technology                    | Usage                                        |
|------------|-------------------------------|----------------------------------------------|
| Build      | Vite 6                       | Fast dev server and optimized production builds |
| Framework  | React 18                     | Functional components with Hooks             |
| Styling    | Tailwind CSS 3               | Utility classes + custom CSS variables       |
| Animation  | GSAP 3 + ScrollTrigger       | Timelines, scroll-triggered animations       |
| Icons      | Lucide React                 | Component-based SVG icons                    |
| Fonts      | Inter + Noto Sans SC         | English + Chinese typography (Google Fonts)   |
| Deployment | GitHub Actions + GitHub Pages | Automated CI/CD on push to main              |

---

## Project Structure

```
Portfolio/
├── index.html                        # Vite entry point (anti-flash theme script)
├── package.json                      # Dependencies and scripts
├── vite.config.js                    # Vite config (base: /Portfolio/)
├── tailwind.config.js                # Tailwind config (data-theme dark mode)
├── postcss.config.js                 # PostCSS config
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions: build → gh-pages
├── public/
│   └── images/
│       ├── favicon.png               # Site favicon
│       ├── hero/                     # Hero photo
│       ├── company_logo/             # Company logos
│       └── low-code_platform/        # Project screenshots
└── src/
    ├── main.jsx                      # React mount point
    ├── App.jsx                       # Root component (theme/lang state)
    ├── index.css                     # Global styles + Tailwind + CSS variables
    ├── data/
    │   ├── profileEn.js              # English profile data
    │   ├── profileZh.js              # Chinese profile data
    │   └── uiText.js                 # UI text i18n (labels, section titles)
    ├── utils/
    │   └── theme.js                  # Theme/language persistence helpers
    └── components/
        ├── Navigation.jsx            # Fixed nav bar + glass effect
        ├── ThemeToggle.jsx           # Light/dark theme switch
        ├── LangToggle.jsx            # EN/ZH language switch
        ├── LiquidBackground.jsx      # Floating gradient blobs
        ├── Hero.jsx                  # Hero section
        ├── About.jsx                 # About Me (Bento grid)
        ├── Experience.jsx            # Work experience timeline
        ├── Projects.jsx              # Project showcase with carousel
        ├── Skills.jsx                # Technical skills
        └── Footer.jsx                # Contact & social links
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

Content is driven by three data modules in `src/data/`:

| File              | Purpose                                    |
|-------------------|--------------------------------------------|
| `profileEn.js`    | All English content (personal info, experience, projects, skills) |
| `profileZh.js`    | All Chinese content (mirrors the English structure)              |
| `uiText.js`       | UI labels and section titles for both languages                  |

### Profile Data Fields

| Field              | Description               | Example                          |
|--------------------|---------------------------|----------------------------------|
| `name`             | English name              | `"Euan Fan"`                     |
| `nameChinese`      | Chinese name              | `"范园贺"`                       |
| `title`            | Job title                 | `"Senior Frontend / Full-Stack Engineer"` |
| `location`         | Current location          | `"Beijing, China"`               |
| `heroImage`        | Hero photo path           | `"images/hero/hero_photo.jpg"`   |
| `heroSubline`      | One-line tagline          | `"Building scalable platforms..."` |
| `heroVisa`         | Work authorization        | `"Eligible to work in China"`    |
| `heroTechStack`    | Tech stack tags           | `["React", "TypeScript", "Node.js"]` |
| `experienceYears`  | Years of experience       | `"10+ Years"`                    |
| `email` / `phone` / `wechat` | Contact details | —                                |

### Education

```javascript
education: {
  school: "Beihua University",
  major: "Network Engineering",
  period: "2011 - 2015"
}
```

### About Me

- **`aboutIntro`** — Full intro paragraph.
- **`aboutHighlights`** — Array of `{ icon, text }`; `icon` is a Lucide icon name (e.g. `code`, `brain`, `building-2`).
- **`keyStrengths`** — Key strengths list.
- **`impactHighlights`** — Impact highlights list.

### Work Experience

```javascript
experienceList: [
  {
    company: "Meituan",
    companyLogo: "images/company_logo/meituan.png",
    companyBrief: "Leading local life services platform in China.",
    companyUrl: "https://www.meituan.com/en-US/about-us",
    position: "Senior Software Engineer",
    period: "Jul 2021 - Apr 2022",
    description: ["Core developer for Meituan Youxuan..."],
    highlights: ["Frontend Infrastructure", "Hot-Cold Separation"]
  }
]
```

### Projects

```javascript
projectList: [
  {
    title: "Enterprise Low-Code Campaign Platform",
    type: "mobile",        // "mobile" | "web"
    overview: "A visual low-code platform...",
    screenshots: ["images/low-code_platform/toC_1.png"],
    outcomes: [...],
    role: [...],
    background: [...],
    challengesSolved: [...],
    techStack: ["Frontend: React, TypeScript", "Backend: Node.js, MongoDB"],
    outcomeKeywords: ["30 minutes"],   // highlighted in text
    roleKeywords: ["project owner"],
    backgroundKeywords: ["high frequency"],
    challengesKeywords: ["response speed"]
  }
]
```

### Skills

- **`skillsGroups`** — Array of `{ title, items: [] }`.
- **`skillColors`** — Map of skill name → hex color for pill styling.

### Social Links

```javascript
social: {
  github: "https://github.com/EUANFAN",
  linkedin: "https://www.linkedin.com/in/euan-fan/"
}
```

---

## Page Sections & Components

| Section        | Component            | Description                                                     |
|----------------|----------------------|-----------------------------------------------------------------|
| **Navigation** | `Navigation.jsx`     | Fixed top bar; glassmorphism on scroll; language + theme toggles |
| **Hero**       | `Hero.jsx`           | Full-height; name, title, photo, tech stack, visa. GSAP entrance animation |
| **About Me**   | `About.jsx`          | Bento grid: intro, highlights, strengths, impact, education, recognition |
| **Experience** | `Experience.jsx`     | Timeline with company logos, positions, descriptions. Intersection Observer animation |
| **Projects**   | `Projects.jsx`       | Project cards with screenshot carousel, outcomes, role, background, challenges, tech stack. Keyword highlighting |
| **Skills**     | `Skills.jsx`         | Grouped skill tags with brand-colored pills and hover effects    |
| **Contact**    | `Footer.jsx`         | Email CTA, social links (GitHub, LinkedIn), copyright            |

**Global layers:**

- **LiquidBackground** — Fixed background with three floating gradient blobs.
- **noise-overlay** — Subtle fractal noise texture overlay.

---

## Design System

### CSS Variables

| Variable           | Light Default                | Dark Override                  |
|--------------------|------------------------------|--------------------------------|
| `--bg-primary`     | `#FAFBFC`                    | `#0B1120`                      |
| `--bg-secondary`   | `#F1F5F9`                    | `#111827`                      |
| `--text-primary`   | `#0F172A`                    | `#E5E7EB`                      |
| `--text-muted`     | `#64748B`                    | `#9CA3AF`                      |
| `--accent`         | `#0EA5E9`                    | `#38BDF8`                      |
| `--accent-soft`    | `#E0F2FE`                    | `rgba(56, 189, 248, 0.15)`     |
| `--glass-bg`       | `rgba(255, 255, 255, 0.85)`  | `rgba(17, 24, 39, 0.8)`        |

Theme is toggled via `data-theme` attribute on `<html>`, with an anti-flash script in `index.html` that reads localStorage and system preference before first paint.

### Typography

- **English:** Inter (Google Fonts), weights 300–900
- **Chinese:** Noto Sans SC (Google Fonts), weights 300–900

### UI Patterns

- **Glass** — `.glass`: semi-transparent background + `backdrop-filter: blur(20px)` + subtle border
- **Bento Grid** — CSS Grid for responsive About section layout (left 1.6fr / right 1fr on desktop, stacked on mobile)
- **Timeline** — Vertical timeline with animated dots and hover-dimming for Experience section
- **Carousel** — Image carousel with dot indicators and arrow navigation for project screenshots

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) in recent versions
- Dependencies: ES6+, React 18, CSS `backdrop-filter`, Intersection Observer, GSAP
- Fully functional on mobile devices

---

## Deployment

### GitHub Pages (Automated)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on every push to `main`:

1. Push code to the `main` branch
2. GitHub Actions runs `npm ci` → `npm run build`
3. Build output (`dist/`) is deployed to the `gh-pages` branch
4. Site is live at `https://euanfan.github.io/Portfolio/`

**Prerequisite:** In the GitHub repository settings, set **Pages → Source** to `Deploy from a branch` with branch `gh-pages` and folder `/ (root)`.

### Manual Deployment

Upload the contents of the `dist/` folder to any static hosting service (Vercel, Netlify, Cloudflare Pages, etc.).

> **Note:** If deploying to a non-root path, update `base` in `vite.config.js` accordingly.

---

## License & Credits

- Built with React, GSAP & Tailwind CSS
- Copyright © 2025 Euan Fan
- For personal portfolio use

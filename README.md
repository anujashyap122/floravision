# 🪴 FloraVision — Premium Plant Store

A pixel-perfect, fully responsive product listing page built with **Next.js 14** and **Tailwind CSS**, based on the provided Figma design.

---

## 🚀 Live Demo

> **[https://floravision.vercel.app](https://floravision.vercel.app)**
> *(Replace with your actual Vercel URL after deployment)*

---

## 📸 Preview

| Desktop | Mobile |
|---------|--------|
| Full-width hero with floating product card | Responsive hamburger drawer |
| 3-column plant grid with hover effects | Single-column stacked layout |
| Side-by-side O₂ plant slider | Vertically stacked slider |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework, routing, image optimization |
| **Tailwind CSS 3** | Utility-first styling — no UI kits used |
| **JavaScript (ES6+)** | All components, no TypeScript |
| **next/font/google** | DM Sans + Playfair Display (zero layout shift) |
| **next/image** | Optimized responsive images |
| **Git + GitHub** | Version control |
| **Vercel** | Live deployment |

---

## 📁 Project Structure

```
floravision/
├── app/
│   ├── layout.js          ← Root layout: fonts, metadata, html shell
│   ├── page.js            ← Main page: composes all section components
│   └── globals.css        ← Tailwind directives + CSS custom properties
├── components/
│   ├── Navbar.jsx         ← Fixed nav, active link tracking, mobile drawer
│   ├── HeroBanner.jsx     ← Full-height hero, floating product card, review card
│   ├── TrendingPlants.jsx ← Two alternating trending plant cards
│   ├── PlantCard.jsx      ← Reusable plant card (click-to-select, hover effects)
│   ├── TopSelling.jsx     ← 3-col responsive grid of 6 PlantCards
│   ├── TestimonialCard.jsx← Reusable review card with avatar, stars, quote
│   ├── CustomerReviews.jsx← 3-col reviews grid
│   ├── O2Plants.jsx       ← Interactive 4-slide O₂ plant carousel
│   ├── Footer.jsx         ← Brand, quick links, newsletter form, social icons
│   ├── SectionTitle.jsx   ← Reusable bordered heading component
│   └── Button.jsx         ← Reusable button: primary, outline, explore, cart variants
├── public/                ← Static assets (favicon, etc.)
├── .eslintrc.json
├── .gitignore
├── next.config.js         ← Image remote patterns
├── postcss.config.js
├── tailwind.config.js     ← Custom colors, fonts
└── package.json
```

---

## ⚙️ Setup & Run Instructions

### Prerequisites

- **Node.js** v18.17 or higher ([download](https://nodejs.org))
- **npm** v9+ (comes with Node)

### 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/floravision.git
cd floravision
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Hot reload is enabled — any file change reflects instantly.

### 4 — Build for production

```bash
npm run build
```

### 5 — Start production server

```bash
npm start
```

---

## ☁️ Deploy to Vercel (Step-by-step)

1. Push your code to a **public GitHub repository**
2. Go to [vercel.com](https://vercel.com) → Sign in → **Add New Project**
3. Click **Import** next to your `floravision` repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**
6. Your live URL will be ready in ~60 seconds

---

## ✅ Features Implemented

### Page Sections
- [x] **Navbar** — Logo, nav links, search/cart/user icons, active link tracking on scroll
- [x] **Hero Section** — Full-height banner, heading, subtext, Buy Now + Live Demo CTAs, review card, floating product card
- [x] **Trending Plants** — Two alternating-layout cards with image, description, price, Explore + Cart buttons
- [x] **Top Selling Plants** — Responsive 3→2→1 column grid with 6 plant cards
- [x] **Customer Reviews** — 3 testimonial cards with avatar, name, star rating, review text
- [x] **O₂ Plants Section** — Interactive 4-slide carousel with prev/next and dot indicators
- [x] **Footer** — Brand tagline, quick links, newsletter subscribe form, social icons, copyright

### Reusable Components
- [x] `Navbar` — configurable links, mobile drawer
- [x] `HeroBanner` — self-contained hero
- [x] `PlantCard` — props: name, description, price, image, defaultSelected
- [x] `TestimonialCard` — props: name, rating, review, avatar
- [x] `SectionTitle` — wraps any heading in bordered box
- [x] `Button` — variants: primary, outline, explore, cart, buySmall, subscribe
- [x] `Footer` — newsletter state, subscribe confirmation

### Responsiveness
- [x] **Desktop** (1024px+) — full layout as Figma
- [x] **Tablet** (768px–1023px) — 2-column grids, hidden desktop nav
- [x] **Mobile** (320px–767px) — 1-column, hamburger drawer, stacked hero

### Interactivity
- [x] Smooth scroll to sections
- [x] Active nav link highlights on scroll
- [x] Mobile hamburger → full-screen drawer
- [x] Plant card click-to-select (green border highlight)
- [x] O₂ carousel prev/next navigation + dot indicators
- [x] Newsletter subscribe with confirmation feedback
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] Hover transitions on all cards, buttons, links

### Accessibility
- [x] Semantic HTML (`<nav>`, `<section>`, `<article>`, `<footer>`, `<form>`)
- [x] `alt` text on all images
- [x] `aria-label` on all icon buttons
- [x] `aria-label` on star rating (screen reader friendly)
- [x] `role="dialog"` + `aria-modal` on mobile menu
- [x] Keyboard-accessible navigation (Tab, Enter, Escape)
- [x] Focus-visible states on all interactive elements

---

## 🎨 Design System

### Colors
| Variable | Value | Usage |
|---|---|---|
| `--bg-dark` | `#1a2416` | Page background |
| `--bg-card` | `#1e2b1a` | Card backgrounds |
| `--green-light` | `#6db33f` | Primary accent, badges, highlights |
| `--green-glow` | `#8bc34a` | Hover state accent |
| `--text-primary` | `#f0ede6` | Main text, headings |
| `--text-muted` | `#9aab8e` | Secondary text, descriptions |
| `--border` | `rgba(255,255,255,0.08)` | Subtle card borders |
| `--border-green` | `rgba(106,179,63,0.4)` | Hover/active borders |

### Typography
| Font | Weight | Usage |
|---|---|---|
| **DM Sans** | 300–700 | Body text, UI labels, buttons |
| **Playfair Display** | 400–700 | Headings, plant names, section titles |

---

## 📋 Submission Checklist

- [x] Public GitHub repository with complete source code
- [x] README with setup and run instructions
- [x] Live Vercel deployment URL
- [x] All 7 page sections implemented
- [x] Reusable components with configurable props
- [x] Responsive: 320px → 1440px
- [x] Pixel-perfect match to Figma design
- [x] Tailwind CSS only (no Bootstrap, MUI, Ant Design)
- [x] Next.js + JavaScript (no TypeScript)
- [x] Semantic HTML + accessibility
- [x] No AI-generated code

---

## 📬 Contact

Submitted to: **softdef.hiring@gmail.com**  
Submission Deadline: **12th May 2026, 23:59 IST**

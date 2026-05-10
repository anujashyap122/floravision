# FloraVision

FloraVision is a responsive plant store website built with Next.js and Tailwind CSS. It presents indoor plants through a clean landing page with product sections, customer reviews, and an interactive oxygen plants carousel.

Live site: https://floravisio.netlify.app/

## Overview

The goal of this project is to create a modern plant shopping interface that feels simple, calm, and easy to browse. The page is divided into sections for featured plants, trending items, top-selling plants, reviews, and a footer with newsletter signup.

## Features

- Responsive navbar with active section highlighting
- Full-screen hero section with call-to-action buttons
- Trending plants section with product cards
- Top-selling plant grid with selectable cards
- Customer review cards with ratings
- Oxygen plants carousel with previous, next, and dot navigation
- Newsletter form with subscribe feedback
- Smooth scroll and reveal animations
- Mobile-friendly layout with hamburger menu

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- JavaScript
- Netlify

## Project Structure

```txt
floravision/
|-- app/
|   |-- globals.css
|   |-- layout.js
|   `-- page.js
|-- components/
|   |-- Button.jsx
|   |-- CustomerReviews.jsx
|   |-- Footer.jsx
|   |-- HeroBanner.jsx
|   |-- Navbar.jsx
|   |-- O2Plants.jsx
|   |-- PlantCard.jsx
|   |-- SectionTitle.jsx
|   |-- TestimonialCard.jsx
|   |-- TopSelling.jsx
|   `-- TrendingPlants.jsx
|-- next.config.js
|-- netlify.toml
|-- package.json
|-- postcss.config.js
`-- tailwind.config.js
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/anujashyap122/floravision.git
cd floravision
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm start
```

## Deployment

The project is deployed on Netlify.

Netlify build settings:

```txt
Build command: npm run build
Publish directory: .next
```

The Next.js Netlify plugin is configured in `netlify.toml`.

## Notes

- Plant images are loaded from remote image sources configured in `next.config.js`.
- The layout is fully responsive for desktop, tablet, and mobile screens.
- Main UI sections are separated into reusable React components for easier updates.

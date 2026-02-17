# Global Summit Technologies - Official Website

A modern, responsive landing page for Global Summit Technologies, an IT solutions company based in Ibadan, Nigeria. Built with Next.js, Tailwind CSS, and Framer Motion.

![Global Summit Technologies](https://globsum-landing.vercel.app")

## Features

- **Animated Hero Section** - Smooth sliding background images with engaging typography
- **Interactive Navigation** - Smooth scroll navigation with active state indicators
- **Mobile Menu** - Animated hamburger menu that transforms to X
- **Service Cards** - Detailed service information with modal popups
- **Contact Form** - Beautiful form with success animations and confetti
- **Interactive Map** - OpenStreetMap integration showing office location
- **Scroll Animations** - Engaging animations that play on scroll
- **SEO Optimized** - Full meta tags, sitemap, and robots.txt
- **Image Optimization** - Automatic WebP/AVIF conversion with lazy loading

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Maps:** React Leaflet + OpenStreetMap
- **Form Effects:** Canvas Confetti
- **Image Optimization:** Sharp

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Sitemap
│   └── robots.ts       # Robots.txt
├── components/
│   ├── Hero.tsx       # Hero section
│   ├── Features.tsx   # Features section
│   ├── About.tsx      # About section
│   ├── Services.tsx    # Services with modals
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form + map
│   ├── ContactMap.tsx # Interactive map
│   ├── Navbar.tsx     # Navigation
│   └── Footer.tsx     # Footer
├── public/            # Static assets
└── next.config.ts     # Next.js config
```

## Company Info

- **Phone:** +234812650109
- **Email:** info@globsumtech.com
- **Address:** No 28, Oba Olagbegi, Oshuntokun, Bodija, Ibadan, Oyo State, Nigeria
- **Established:** 2003

## License

Copyright © 2003 - 2026 Global Summit Technologies. All rights reserved.

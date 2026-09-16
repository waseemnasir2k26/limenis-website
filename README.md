# Limenis Global Advisory Inc. Website

A premium, production-ready website for Limenis Global Advisory Inc. — a maritime, port operations, and supply chain consulting firm.

## Status

Last reviewed: September 2026 · release v2026.09

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display & DM Sans (via next/font/google)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/limenis-website.git
cd limenis-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
limenis-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   └── WaveDivider.tsx
│   └── sections/           # Page sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── Services.tsx
│       ├── WhyLimenis.tsx
│       ├── Insights.tsx
│       ├── BookingForm.tsx
│       ├── Newsletter.tsx
│       └── Footer.tsx
├── lib/
│   └── constants.ts        # Site data and constants
└── public/
    ├── robots.txt
    └── sitemap.xml
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the Vercel Platform:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

No additional configuration required.

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Colors

The custom color palette is defined in `tailwind.config.ts`:

- `navy` / `navy-light` - Primary dark backgrounds
- `gold` / `gold-light` - Accent colors
- `cream` - Light background sections
- `charcoal` - Dark section variants
- `slate` - Secondary text color

### Content

All content data (services, stats, insights, etc.) is centralized in `lib/constants.ts` for easy editing.

## Features

- Fully responsive design (mobile-first)
- Smooth scroll navigation
- Animated statistics counter
- Framer Motion scroll animations
- Form with success state handling
- SEO optimized with meta tags and sitemap
- Custom scrollbar styling
- Text selection color matching brand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright 2026 Limenis Global Advisory Inc. All rights reserved.

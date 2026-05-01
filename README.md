# Middayr Labs — Website

Production-ready Next.js 14 (App Router) website for Middayr Labs, an independent Flutter mobile app developer brand.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS (no Tailwind)
- **Fonts**: DM Serif Display + DM Sans (Google Fonts)
- **Deployment**: Vercel-ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
middayr-labs/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Apps.tsx / .module.css
│   ├── Privacy.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── public/
│   └── favicon.svg
├── next.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport landing with brand name, subtitle, animated badge, and CTA buttons |
| **About** | Developer background, Flutter tech, four core pillars (performance, simplicity, privacy, accountability) |
| **Apps** | HabitFlow app card with features list, privacy policy link, and AdMob disclosure |
| **Privacy** | Privacy philosophy, per-app policy links, plain-language principles |
| **Contact** | Email card linking to `middayrlabs@gmail.com` |
| **Footer** | Navigation, policies, copyright, email |

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and it will auto-detect Next.js.

## Customization

- **Colors**: Edit CSS variables in `app/globals.css` under `:root`
- **Add an app**: Add a new object to the `apps` array in `components/Apps.tsx`
- **Metadata**: Update `app/layout.tsx` with your actual domain and social handles

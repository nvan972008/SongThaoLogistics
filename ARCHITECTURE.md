# Project Architecture: SongThaoLogistics

## Project Overview
This is a Next.js-based web application for SongThao Logistics, built using modern React technologies. The project serves as a logistics company website, featuring sections for services, advantages, contact information, and more.

## Technology Stack
- **Framework**: Next.js 14.2.16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9 with animations
- **UI Components**: Radix UI (shadcn/ui)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Analytics**: Vercel Analytics
- **Themes**: Next Themes for dark/light mode support
- **Build Tool**: PNPM

## Project Structure

```
SongThaoLogistics/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page component
│   └── globals.css              # Global styles
├── components/                  # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── hero-section.tsx        # Landing page hero section
│   ├── advantages-section.tsx  # Company advantages
│   ├── contact-section.tsx     # Contact form/section
│   ├── footer.tsx              # Site footer
│   ├── header.tsx              # Site header/navigation
│   ├── services-section.tsx    # Services offered
│   └── theme-provider.tsx      # Theme provider for dark/light mode
├── lib/                        # Utility libraries
│   └── utils.ts               # Utility functions
├── public/                     # Static assets
│   ├── images/                # Image assets
│   ├── icons/                 # Icon assets
│   ├── modern-railway-freight-train-in-vietnam-landscape.jpg
│   ├── placeholder-logo.png
│   └── ...                    # Other static files
├── styles/                     # Additional stylesheets
│   └── globals.css
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.*          # Tailwind CSS config (if using v3)
└── README.md                   # Project documentation
```

## Key Components and Features

### App Router Structure
- Uses Next.js 13+ app directory for routing
- `layout.tsx`: Root layout with provider wrappers
- `page.tsx`: Main landing page

### Components Organization
- **UI Components**: Reusable design system components (buttons, cards, inputs)
- **Section Components**: Page-specific sections like Hero, Services, Contact
- **Layout Components**: Header, Footer for site structure
- **Providers**: Theme and other context providers

### Asset Management
- Static assets in `public/` directory
- Images and icons organized in subdirectories for better management
- Placeholder assets included for development

## Development Scripts
- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint
- `pnpm deploy`: Deploy via GitHub Pages

## Deployment
Configured for deployment on Vercel with analytics integration.

## Architecture Principles
- **Component-Based**: Modular component architecture for maintainability
- **Type-Safe**: Full TypeScript coverage
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessible**: Built with accessibility in mind using Radix UI
- **Performance**: Optimized with Next.js features and lazy loading

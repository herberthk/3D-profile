# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `bun dev` - Start the development server (Next.js 15)
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint with TypeScript, Prettier, and unused imports checking
- `bun run generate` - Generate TypeScript types for SCSS modules
- `bun run gen-env` - Generate TypeScript types for environment variables

### Environment Setup
- Copy `.env.example` to `.env` and configure SMTP settings for contact form functionality
- The project uses Bun as the package manager (evidenced by `bun.lockb`)

## Architecture Overview

### Project Type
This is a **3D Portfolio Website** built with:
- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **Three.js** ecosystem (@react-three/fiber, @react-three/drei) for 3D graphics
- **Framer Motion** for animations
- **Tailwind CSS** with extensive custom configuration
- **Nodemailer** for server-side email functionality

### Key Architectural Patterns

#### Component Architecture
- **Section-based layout**: Main page (`app/page.tsx`) is composed of distinct sections (Hero, About, Experience, Works, Awards, Feedbacks, Contact)
- **3D Canvas Components**: Specialized components in `/components/canvas/` for Three.js integration
- **Higher-Order Components**: `/hoc/SectionWrapper.tsx` provides consistent motion animations across sections
- **Polymorphic Components**: Advanced TypeScript patterns in `/types/interface.ts` for flexible component APIs

#### Data Layer
- **Constants**: Centralized configuration in `/constants/` (navigation, services, tech stack, testimonials)
- **Static Data**: Pre-defined content in `/data/` directory (projects, skills, awards, feedback)
- **Server Actions**: Contact form handling via Next.js server actions in `/actions/index.ts`

#### Animation System
- **Motion Utilities**: Comprehensive animation library in `/utils/motion.ts`
- **Framer Motion Integration**: Consistent use of variants for enter/exit animations
- **3D Interactions**: OrbitControls and responsive 3D model rendering

#### Styling Architecture
- **Tailwind CSS**: Heavily customized with:
  - Custom color palette (primary: #050816, secondary: #aaa6c3, tertiary: #151030)
  - Custom animations (spotlight, shimmer, scroll effects)
  - Grid and dot background utilities
  - Extended breakpoints (xs: 450px)
- **Global Styles**: Custom CSS classes in `app/globals.css`
- **Component Styling**: Utility-first approach with Tailwind

### Directory Structure Logic
- `/app/` - Next.js 15 App Router pages and layout
- `/components/` - React components organized by feature/type
- `/components/canvas/` - Three.js 3D components
- `/components/cards/` - Reusable card components
- `/hoc/` - Higher-order components for cross-cutting concerns
- `/constants/` - Static configuration data
- `/data/` - Content data (projects, skills, etc.)
- `/types/` - TypeScript type definitions
- `/utils/` - Utility functions (animations, validations, regions)
- `/actions/` - Next.js server actions
- `/lib/` - External library configurations and utilities

## Development Guidelines

### Code Quality
- **ESLint Configuration**: Strict rules with TypeScript, Prettier, and unused imports plugins
- **TypeScript**: Strict mode enabled with path mapping (`@/*` → `./`)
- **Prettier**: Configured with bracket spacing and JSX bracket same line

### 3D Development
- **Model Loading**: Uses GLTF loader from @react-three/drei
- **Performance**: Implements Suspense boundaries and Preload for 3D assets
- **Responsive 3D**: Mobile-responsive scaling and positioning for 3D models
- **Lighting Setup**: Configured hemisphere, spot, and point lights for optimal 3D rendering

### Animation Development
- **Consistent Variants**: Use animation utilities from `/utils/motion.ts`
- **Section Animations**: Wrap sections with SectionWrapper HOC for consistent enter animations
- **Performance**: Uses `viewport={{ once: true, amount: 0.25 }}` for optimize animation triggers

### Email Integration
- **Server Actions**: Contact form uses Next.js server actions pattern
- **SMTP Configuration**: Requires environment variables for nodemailer setup
- **Form Validation**: Server-side validation for required fields

### Environment Variables
- `SMTP` - SMTP server hostname
- `SMTP_USER` - SMTP authentication username  
- `SMTP_PASSWORD` - SMTP authentication password
- `RECAPTCHA_SITE_KEY` - reCAPTCHA client-side key (optional)
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA server-side key (optional)

## Key Files for Modifications

### Content Updates
- `/constants/` - Navigation, services, tech stack data
- `/data/` - Projects, skills, awards, feedback content
- `/app/layout.tsx` - Site metadata and SEO

### Styling Changes
- `tailwind.config.ts` - Theme customization, colors, animations
- `/components/` - Individual component styling

### 3D Assets
- `/public/desktop_pc/` - 3D model files (GLTF format expected)
- `/components/canvas/` - 3D component implementations

### Functionality Extensions
- `/actions/index.ts` - Server-side form processing
- `/utils/` - Utility functions and animations
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The **Wildernests Employee Portal** is a React-based admin dashboard for managing cabin/hotel booking operations. Employees use it to manage bookings, cabins, guests, and view business analytics.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

No linting or test commands are configured in package.json.

## Architecture

### Tech Stack
- **Frontend**: React 18 + Vite, Tailwind CSS, React Router
- **State Management**: TanStack Query (React Query) for server state
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Forms**: React Hook Form
- **Charts**: Recharts for dashboard analytics
- **Deployment**: Vercel (primary), Netlify (alternative)

### Directory Structure
```
src/
├── features/     # Business logic organized by domain (auth, bookings, cabins, dashboard, settings)
├── ui/           # Reusable UI components (Button, Modal, Table, etc.)
├── services/     # API layer (apiAuth.js, apiBookings.js, apiCabins.js, etc.)
├── hooks/        # Custom React hooks for data fetching
├── pages/        # Route-level page components
├── context/      # React Context providers
└── utils/        # Utility functions and constants
```

### Data Flow
- Each feature has custom hooks (e.g., `useCabins()`, `useBookings()`) that use TanStack Query
- API calls are centralized in `/services` files
- All backend operations go through Supabase client
- UI components are composed from `/ui` directory

### Key Features
- **Dashboard**: Analytics with charts and booking metrics
- **Bookings**: Full CRUD operations, check-in/check-out workflows
- **Cabins**: Room management with image uploads to Supabase Storage
- **Authentication**: Supabase Auth integration
- **Dark Mode**: Theme switching with persistence

## Configuration

- **Supabase**: Backend configuration in `src/services/supabase.js`
- **Deployment**: Both `vercel.json` and `netlify.toml` configured for SPA routing
- **Vite**: Build configuration in `vite.config.js` with React plugin and ESLint

## Development Notes

- Uses feature-based architecture - new features should follow the existing pattern in `/features`
- API calls should go through service layer, not directly from components
- UI components are styled with Tailwind CSS utility classes with responsive design
- CSS custom properties are used for theming (defined in `src/styles/index.css`)
- All data fetching uses TanStack Query for caching and error handling
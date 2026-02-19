# Starseed Treasures

## Overview
A mystical web application with a galaxy/cosmic theme by Abigail. Features tarot reading bookings, a shop selling hand-crafted spiritual items (linked to Shopify), live reading session scheduling, a newsletter signup, and an About Me page. Whimsical, enchanting aesthetic with shooting stars, floating orbs, moon/star decorative elements, and glassmorphism effects.

## Architecture
- **Frontend**: React + TypeScript with Tailwind CSS, shadcn/ui components
- **Backend**: None — fully static frontend. Express/Vite dev server used only for local development.
- **Database**: None — all data is hardcoded in frontend components
- **Routing**: wouter for client-side routing
- **Forms**: Booking and newsletter forms use mailto links (no API calls)

## Project Structure
- `client/src/pages/` - Page components (home, reading, shop, book, about)
- `client/src/components/` - Shared components (navigation, star-background)
- `shared/` - Shared types (legacy, not actively used)

## Key Features
1. **Tarot Readings** - Service page showing reading options (Single, Three Card, Celtic Cross, Custom) with pricing — links to booking
2. **Shop** - Catalog of hand-crafted items (candles, poems, tarot) linking to Shopify (https://starseedtreasures.com/) for purchases. Products are hardcoded in shop.tsx.
3. **Booking System** - Schedule live reading sessions with pre-selection via query params. Submits via mailto link.
4. **About Me** - Personal page about Abigail with newsletter signup, podcast (Divine F.M.), YouTube (@divagirl333)
5. **Newsletter** - Email subscription via mailto link for weekly affirmations and shop updates
6. **Star Animation** - Canvas-based shooting stars, floating orbs, twinkling particles

## Theme
- Always dark mode (galaxy theme)
- Fonts: Playfair Display (serif headings), Plus Jakarta Sans (body)
- Colors: Deep midnight blue, royal purple, soft lavender, gold accents (#FFD78C)
- Glassmorphism card effects with shimmering borders, moon glow animations
- Whimsical copy style - playful, intimate, magical language

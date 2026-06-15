# The Jagmal Group

A Next.js (App Router) website for The Jagmal Group, optimized for performance and server-side metadata rendering.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI Core:** React 18
- **Styling:** Tailwind CSS & Tailwind Animate
- **Primitives:** Radix UI Dialog & Slot
- **Icons:** Lucide React

## Project Structure

```text
src/
  app/                    # Next.js App Router (Layouts, Routing pages & Metadata)
    layout.jsx
    page.jsx
    about/
    philanthropy/
    hotels/
    logistics/
    hospitality/
    precast/
    leadership/
    contact/
  pages-components/       # Presentational Page Components (Migrated from SPA)
    Home.jsx
    About.jsx
    Hotels.jsx
    Logistics.jsx
    Hospitality.jsx
    Precast.jsx
    Leadership.jsx
    Contact.jsx
  components/             # Shared UI Components (Navbar, Footer, Skyline)
    Navbar.jsx
    Footer.jsx
    CanvasSkyline.jsx
    ui/
  styles/                 # Tailwind stylesheet configurations
    App.css
    index.css
  hooks/
    useDocumentMetadata.js # No-op (handled natively by Next.js app metadata)
  lib/
    utils.js
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Start production server:**
   ```bash
   npm run start
   ```

## GitHub Upload Checklist

1. Ensure `.gitignore` is present.
2. Do not commit `node_modules/`, `.next/`, or `dist/`.
3. Commit source files and config files.
4. Push to your GitHub repository.

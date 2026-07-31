# Agro Grown — Corporate Website

Premium, production-ready marketing site for **Agro Grown**, a herbal ingredient manufacturer
("Nourished by Nature"). Built with React 19 + TypeScript (strict), Vite, Tailwind CSS v4,
React Router v7, Framer Motion, React Hook Form + Zod, and React Helmet Async.

## Commands

```bash
npm install --legacy-peer-deps   # react-helmet-async peer-dep is React 18; React 19 works fine at runtime
npm run dev                      # local dev server
npm run build                    # type-check (tsc -b) + production build → dist/
npm run preview                  # serve the production build
npm run lint                     # eslint
npm run format                   # prettier
```

Validation self-check (no test framework by design):

```bash
node --experimental-strip-types src/lib/contactSchema.check.ts
```

## Routes

`/` · `/about` · `/products` · `/industries` · `/contact` — plus a branded 404.

## Structure

- `src/data/` — all content (company info, 12 categories, 15 products, industries, services, FAQ, etc.). **Edit content here, not in components.**
- `src/components/ui/` — primitives (Button, Section, Container, Reveal, Logo, Decor).
- `src/components/sections/` — composed blocks (cards, stats, testimonials, timeline, forms, CTA, hero).
- `src/components/layout/` — Navbar (sticky, transparent-over-hero, blur-on-scroll, mega-menu), Footer, ScrollManager, PageLoader.
- `src/pages/` — one file per route.

## Design system

Brand colours come **only** from the Agro Grown logo, defined once as Tailwind v4 `@theme`
tokens in `src/index.css`:

| Token | Hex | Use |
|-------|-----|-----|
| `lime` | `#A5BF38` | accents, badges, icons, highlights |
| `moss` | `#6E8B55` | mid-tone, borders, hovers |
| `forest` | `#2F4F2F` | headings + primary CTA background |
| `mist` | `#F5F9EA` | light section background |
| `cream` | `#FBFCF6` | page background |
| `ink` | `#374151` | body text |

Deep `forest` (not lime) is used behind white CTA text so contrast stays WCAG-AA (~9:1).

## Things to wire before go-live

These are intentionally stubbed and clearly marked (`ponytail:` comments):

1. **Form submissions** — `ContactForm` and `NewsletterForm` simulate acceptance. Point them at your
   email service / form endpoint (`onSubmit` handlers).
2. **Product & category imagery** — the site ships with self-contained brand-gradient thumbnails plus
   the one real product photo (`public/products/multani-mitti.jpg`). To use real photography, add
   `photo` URLs in `src/data/products.ts` (the `PRODUCT_PHOTO_*` knob in `src/data/site.ts`).
3. **Canonical domain** — set to `https://www.theagrogrown.com` in `src/data/site.ts`,
   `public/sitemap.xml`, `public/robots.txt`. Update if the live domain differs.
4. **Social links** — placeholder URLs in `src/data/site.ts` (`socials`).

## Notes

- Accessibility: semantic HTML, skip link, focus-visible rings, focus-on-route-change, ARIA on
  nav/accordion/forms, `prefers-reduced-motion` respected throughout.
- Performance: route-level code splitting (`React.lazy`), vendor chunks split, lazy images with
  reserved dimensions (no CLS), self-contained visuals (no external image requests).

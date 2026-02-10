# Atlas Parking Lot Solutions

SEO-optimized static website for **Atlas Parking Lot Solutions** â professional parking lot paving, line striping, and ADA compliance services in Greensboro, NC.

## Tech Stack

- **HTML5** â Semantic markup (header, nav, main, section, article, footer)
- **Custom CSS** â Design system with CSS custom properties (`:root` tokens), no frameworks
- **Vanilla JavaScript** â Mobile nav, scroll reveal, FAQ accordion, form validation, animated counters
- **JSON-LD Structured Data** â LocalBusiness, Service, FAQPage schemas

## Design System

| Token | Value |
|---|---|
| `--bg` | `#f6f7fb` (light page background) |
| `--surface` | `#ffffff` (white cards) |
| `--dark` | `#0f172a` (hero & alt sections) |
| `--accent` | `#2563eb` (blue CTA / links) |
| `--radius` | `22px` (card corners) |
| `--radius-pill` | `999px` (buttons / badges) |
| `--shadow` | Subtle dual-layer box shadow |
| `--lift` | `translateY(-6px)` hover effect |
| `--glass` | `blur(16px)` frosted backdrop |
| `--font` | System font stack (no Google Fonts) |

### Key Classes

``.wrap`` Â· ``.section`` Â· ``.section.alt`` Â· ``.hero`` Â· ``.hero.short`` Â· ``.hero-card`` Â· ``.badge`` Â· ``.btn`` Â· ``.btn.primary`` Â· ``.btn.white`` Â· ``.btn.outline`` Â· ``.pill-btn`` Â· ``.card`` Â· ``.glass`` Â· ``.mini-card`` Â· ``.split`` Â· ``.ba-grid`` Â· ``.ba-tile`` Â· ``.icon-wrap`` Â· ``.tag`` Â· ``.faq-item`` Â· ``.reveal``

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage â hero, stats, services overview, process, testimonials, FAQ |
| `services.html` | Service details â pothole filling, line striping, ADA compliance |
| `about.html` | Company story, values, differentiators, service areas, certifications |
| `contact.html` | Contact form, info cards, emergency callout, Google Maps embed |

## SEO Features

- Unique `<title>` and `<meta description>` per page targeting 10+ keyword clusters
- Open Graph and Twitter Card meta tags on every page
- Canonical URLs
- JSON-LD: `LocalBusiness` (with geo, hours, areaServed), `Service` (x3), `FAQPage`
- `sitemap.xml` with priority weights
- `robots.txt` with sitemap reference
- Semantic HTML5 throughout

## Target Keywords

- parking lot paving Greensboro
- parking lot striping Greensboro NC
- pothole repair Greensboro
- ADA compliant parking lot
- asphalt maintenance Greensboro
- line striping services
- commercial paving Greensboro

## Deploy

Static files â open `index.html` directly or host on any static platform:

- **GitHub Pages:** Settings â Pages â Deploy from branch
- **Netlify / Vercel:** Drag and drop the repo folder
- **Any web server:** Upload all files preserving directory structure

## License

MIT

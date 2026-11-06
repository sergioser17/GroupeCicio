# Groupe Cicio — Roofing & Carpentry Artisan Website

A modern, high-performance website created for **Groupe Cicio**, an artisan roofing, timber framing, and zinc work specialist based in Colombes (92700), Hauts-de-Seine, Île-de-France.

Designed and developed as a client project with a strong focus on mobile responsiveness, sleek dark-themed UI, conversion-oriented UX, and comprehensive local SEO optimization.

---

## 🌟 Overview & Key Features

- **Responsive & Modern UI**: Built with a dark, premium aesthetic using pure semantic HTML5, CSS3 Custom Properties (variables), and Vanilla JavaScript.
- **Service Showcase**: Dedicated sections detailing core services:
  - **Couverture (Roofing)**: Tile, slate, zinc installation & leak repair.
  - **Charpente (Carpentry & Timber Framing)**: Traditional & industrial roof structures, extensions, and reinforcements.
  - **Zinguerie (Zinc Work & Gutters)**: Precision Rheinzink gutters, downspouts, and architectural flashing.
- **Interactive Project Gallery**: A clean, balanced 3x3 photo showcase featuring recent client projects with built-in lightbox preview capabilities.
- **Direct Lead Generation**:
  - Interactive quote request form with immediate redirection to pre-formatted WhatsApp chat (`wa.me`).
  - Direct call CTA button with `tel:` linking.
  - Floating WhatsApp support button.
- **Flawless Fixed-Navigation**: Fixed top navigation bar with dynamic backdrop blur, perfectly calculated smooth-scrolling offsets, and zero-gap alignment.
- **Comprehensive Local SEO**:
  - Semantic HTML structure (`<header>`, `<main>`, `<nav>`, `role="menubar"`).
  - Open Graph & Twitter Cards for social media previews.
  - Geo-targeting meta tags (`geo.region: FR-92`, `geo.placename: Colombes`).
  - Schema.org structured data (`RoofingContractor` & `BreadcrumbList` via JSON-LD) for Google Local Pack & rich snippets.
  - Pre-configured `robots.txt` and `sitemap.xml`.

---

## 📁 Project Structure

```text
Cicio_Final_Web/
├── img/                       # Project photography & showcase images
│   ├── charpente-complete.jpg
│   ├── charpente-ferme.jpg
│   ├── charpente-perspective.jpg
│   ├── charpente-structure.jpg
│   ├── couverture-ardoise.jpg
│   ├── couverture-liteaux.jpg
│   ├── couverture-volige.jpg
│   ├── zinguerie-bord.jpg
│   └── zinguerie-rheinzink.jpg
├── index.html                 # Main website template with JSON-LD schema
├── style.css                  # Custom design system, typography & responsive layouts
├── script.js                  # Smooth scrolling, mobile menu & WhatsApp integration
├── robots.txt                 # Search engine crawler directives
├── sitemap.xml                # XML sitemap for search engines
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started Locally

You can run this project locally without any complex build steps or dependencies:

### Option 1: Double-click
Simply open `index.html` in any modern web browser.

### Option 2: Local HTTP Server (Python)
```bash
# From the project root folder
python -m http.server 5500
```
Then navigate to: `http://localhost:5500`

### Option 3: Node.js (npx serve)
```bash
npx serve .
```

---

## 🛠️ Built With

- **HTML5** — Semantic, accessible markup.
- **CSS3** — Custom properties, Grid, Flexbox, smooth transitions, and responsive media queries.
- **JavaScript (ES6+)** — Native DOM manipulation, IntersectionObserver for scroll animations, and interactive lightbox.
- **Schema.org / JSON-LD** — Local business search optimization.

---

## 📄 License & Client Rights

All code is developed for client presentation and deployment. Image assets belong to Groupe Cicio.

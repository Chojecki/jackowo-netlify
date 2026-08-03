# Stajnia Jackowo — strona internetowa

Strona rodzinnej stajni w Warszawie Wawer (Mozaikowa 53). Zbudowana z [Gatsby](https://www.gatsbyjs.com/) 5 i [React](https://react.dev/) 18, wdrażana na [Netlify](https://www.netlify.com).

## Stack

- Gatsby 5 + gatsby-plugin-image (AVIF/WebP, lazy loading)
- Sass — własny design system (klasyczny styl jeździecki)
- Decap CMS (panel administracyjny pod `/admin/`, backend git-gateway)
- Google Fonts: Cormorant Garamond + Montserrat

## Rozwój

```bash
npm install
npm run develop   # lokalny serwer deweloperski
npm run build     # produkcyjny build do public/
```

Wymagany Node.js 20.

## Struktura treści

- `src/pages/index.md` — strona główna
- `src/pages/about/index.md` — cennik
- `src/pages/konie-jackowo/index.md` — konie i galeria
- `static/img/` — zdjęcia (w tym galeria w `static/img/gallery/`)
- `static/admin/config.yml` — konfiguracja CMS

## Bezpieczeństwo

Nagłówki (CSP, X-Frame-Options, itd.) są definiowane w `gatsby-config.js`
(opcja `headers` w `gatsby-plugin-netlify`).

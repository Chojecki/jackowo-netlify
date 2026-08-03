module.exports = {
  siteMetadata: {
    title: "Stajnia Jackowo",
    siteUrl: "https://stajnia-jackowo.netlify.app/",
    description:
      "Rodzinna Stajnia Wawer | Pensjonat | Proponujemy lekcje jazdy konnej w Warszawie Wawer. Rekreacja oraz imprezy firmowe. Kucyki w Warszawie Wawer",
    author: "Stajnia Jackowo"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {}
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/admin/", "/dev-404-page/", "/404/", "/404.html"]
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: DENY",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Permissions-Policy: camera=(), microphone=(), geolocation=()",
            "Content-Security-Policy: default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'"
          ],
          "/admin/*": [
            "Content-Security-Policy: default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://cdn.jsdelivr.net https://unpkg.com; connect-src 'self' https:; object-src 'none'"
          ],
          "/static/*": ["Cache-Control: public, max-age=31536000, immutable"]
        }
      }
    }
  ]
};

module.exports = {
  siteMetadata: {
    title: "Lena Ruppert",
    description: "Willkommen auf meiner Webseite. Ich bin Lena Ruppert, freie Journalistin und Online-Redakteurin aus München. Ich freue mich, wenn ich für Sie schreiben darf.",
    siteUrl: "https://www.lenaruppert.de"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.ts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "static-images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [

          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 740,
              linkImagesToOriginal: false,
              wrapperStyle: "border: 1px solid hsla(0, 0%, 0%, 0.2);"
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          }
        ]
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

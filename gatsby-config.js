module.exports = {
  siteMetadata: {
    title: "Lena Ruppert",
    description: "Willkommen auf meiner Webseite. Ich bin Lena Ruppert, freie Journalistin und Online-Redakteurin aus München. Ich freue mich, wenn ich für Sie schreiben darf.",
    siteUrl: "https://www.lenaruppert.de"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.ts"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-56098867-2",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/img/favicon.png",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          firefox: false
        }
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
            resolve: `gatsby-remark-relative-images`
          },
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
        stylesPath: `${__dirname}/src/cms/cms.css`,
        enableIdentityWidget: true,
        htmlTitle: "Lena Ruppert Content Manager"
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

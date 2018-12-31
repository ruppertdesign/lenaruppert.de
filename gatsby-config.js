module.exports = {
  siteMetadata: {
    title: "Lena Ruppert",
    description: "TODO Lena: Fallback description"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
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
            resolve: `gatsby-remark-relative-images`,
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

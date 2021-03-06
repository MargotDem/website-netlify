/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* eslint-disable */
var moment = require("moment");
import config from "./data/SiteConfig.ts";

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.siteTitleShort,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: false,
      },
    },
    "gatsby-remark-source-name",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                  context {
                    lastmod
                  }
                }
              }
            }
        }`,
        exclude: [
          `/404`,
          `/404.html`,
          `/login`,
        ],
        serialize: ({ site, allSitePage }) => {
          return (allSitePage.edges.map(edge => {
            const page = edge.node
            return {
              url: site.siteMetadata.siteUrl + page.path,
              changefreq: `daily`,
              priority: page.path == "/" ? 1.0 : 0.5,
              lastmod: page.context.lastmod ? page.context.lastmod : moment().format("YYYY-MM-DD"),
            }
          }))
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/static/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/static/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: config.siteLogoStatic,
      },
    },
  ],
};

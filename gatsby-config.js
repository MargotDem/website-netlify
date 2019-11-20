/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* eslint-disable */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nuage",
    description: "Description",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cms",
    "gatsby-remark-source-name",
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
        name: `feature`,
        path: `${__dirname}/static/content/feature`,
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
  ],
};

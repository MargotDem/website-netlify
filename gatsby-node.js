const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const simplePageTemplate = path.resolve(
    `src/templates/simplePageTemplate.tsx`
  );
  const contentfulPageTemplate = path.resolve(
    `src/templates/contentfulPageTemplate.tsx`
  );
  const featureTemplate = path.resolve(`src/templates/featureTemplate.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "pages" } } }) {
        edges {
          node {
            frontmatter {
              metaData {
                path
              }
              pageType
              lastmod
              draft
            }
          }
        }
      }
    }
  `);

  function getTemplate(pageType) {
    switch (pageType) {
      case "contentfulPage":
        return contentfulPageTemplate;
      case "simplePage":
        return simplePageTemplate;
      case "feature":
        // return null;
        return featureTemplate;
      default:
        return null;
    }
  }
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const allPages = result.data.allMarkdownRemark.edges;

  // leave the draft pages out when in production
  const allowedPages = allPages.filter(
    page =>
      process.env.NODE_ENV !== "production" || !page.node.frontmatter.draft
  );

  allowedPages.forEach(({ node }) => {
    const pageInfo = node.frontmatter;
    const pageType = pageInfo.pageType;
    const template = getTemplate(pageType);
    const path = pageInfo.metaData.path;
    const pagePath = pageType === "feature" ? `feature/${path}` : path;
    if (template) {
      createPage({
        path: pagePath,
        component: template,
        context: {
          lastmod: pageInfo.lastmod
        }
      });
    }
  });
};

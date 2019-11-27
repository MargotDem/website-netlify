const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const simplePageTemplate = path.resolve(
    `src/templates/simplePageTemplate.tsx`
  );
  const contentfulPageTemplate = path.resolve(
    `src/templates/contentfulPageTemplate.tsx`
  );
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
      default:
        return null;
    }
  }
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const pageInfo = node.frontmatter;
    const template = getTemplate(pageInfo.pageType);
    if (template) {
      createPage({
        path: pageInfo.metaData.path,
        component: template,
        context: {
          lastmod: pageInfo.lastmod
        }
      });
    }
  });
};

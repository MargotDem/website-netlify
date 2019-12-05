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

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     module: {
//       noParse: /\.md|\.xml|\.txt/
//     }
//   });
// };

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/simplePageTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: {sourceName: { eq: "pages"}}}
      ) {
        edges {
          node {
            html
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
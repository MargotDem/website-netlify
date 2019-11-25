const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const simplePageTemplate = path.resolve(`src/templates/simplePageTemplate.tsx`)
  const contentfulPageTemplate = path.resolve(`src/templates/contentfulPageTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: {sourceName: { eq: "pages"}}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  function getTemplate(pageType) {
    switch (pageType) {
      case "contentfulPage":
        return contentfulPageTemplate
      case "simplePage":
        return simplePageTemplate
    }
  }
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      // component: getTemplate(node.frontmatter.pageType),
      component: simplePageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
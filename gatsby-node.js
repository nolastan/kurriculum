exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const lessonTemplate = require.resolve(`./src/templates/lessonTemplate.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
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
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: lessonTemplate,
        context: {
          // additional data can be passed via context
          path: node.frontmatter.path,
        },
      })
    })
  }
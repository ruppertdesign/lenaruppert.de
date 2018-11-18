const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      const start = posts.find(post => post.node.frontmatter.templateKey === 'start')
      createPage({
        path: '/preview-06-06-2014',
        tags: start.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/start.tsx`
        ),
        context: {
          id: start.node.id,
        },
      })

      posts
        .filter(post => post.node.frontmatter.templateKey !== 'start')
        .forEach(post => {
          const id = post.node.id
          createPage({
            path: post.node.fields.slug,
            tags: post.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(post.node.frontmatter.templateKey)}.tsx`
            ),
            // additional data can be passed via context
            context: {
              id,
            },
          })
        })

    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const determinePreviousPagePath = (interationIndex) => {
  if (interationIndex === 0) {
    return ''
  }

  if (interationIndex === 1) {
    return '/blog'
  }

  return `/blog/${interationIndex}`
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  const pageResults = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  if (pageResults.errors) {
    pageResults.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(pageResults.errors)
  }

  const posts = pageResults.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    })
  })

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date], 
            order: DESC
          }, 
          limit: 1000,
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date
                title
                description
                featuredpost
                tags
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create blog-list pages
  const blogPosts = result.data.allMarkdownRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(blogPosts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        previousPagePath: determinePreviousPagePath(i),
        nextPagePath: (i + 1 < numPages) ? `/blog/${i + 2}` : '',
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

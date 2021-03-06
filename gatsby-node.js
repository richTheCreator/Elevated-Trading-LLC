const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const sharp = require('sharp')

sharp.simd(false)
sharp.cache(false)

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
              blogTags
              category
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    //  CREATE SITE PAGES -------------
    const sitePages = result.data.allMarkdownRemark.edges
    sitePages.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })

    //  CREATE PRODUCT CATEGORY PAGES -------------
    let categories = []
    // Iterate through each product, putting all found categories into array
    sitePages.forEach((page) => {
      if (_.get(page, 'node.frontmatter.category')) {
        categories = [...categories, page.node.frontmatter.category]
      }
    })

    // Eliminate duplicate categories
    categories = _.uniq(categories)

    // Make category pages
    categories.forEach((category) => {
      const categoryPath = `products/${_.kebabCase(category)}/`
      createPage({
        path: categoryPath,
        component: path.resolve('src/templates/product-categories.js'),
        context: {
          category
        }
      })
    })

    //  CREATE TAG PAGES -------------
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    sitePages.forEach((edge) => {
      if (_.get(edge, 'node.frontmatter.blogTags')) {
        tags = [...tags, ...edge.node.frontmatter.blogTags]
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `blog/tags/${_.kebabCase(tag)}/`
      createPage({
        path: tagPath,
        component: path.resolve('src/templates/blog-tags.js'),
        context: {
          tag
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}

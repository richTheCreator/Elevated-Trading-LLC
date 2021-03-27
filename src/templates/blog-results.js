import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BlogResults from '../../src/components/BlogResults'
import SEO from '../../src/components/SEO/SEO'
import { FeaturedBlog } from '../components/FeaturedBlog'

const BlogResultsPage = ({ data, location }) => {
  return (
    <>
      <SEO />
      <FeaturedBlog />
      <BlogResults data={data} location={location} />
    </>
  )
}
export default BlogResultsPage

export const pageQuery = graphql`
  query BlogResultsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            blogTags
            is_featured
            templateKey
            product_image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BlogResults from '../../src/components/BlogResults'
import SEO from '../../src/components/SEO/SEO'
import { FeaturedBlog } from '../components/FeaturedBlog'

const BlogTagsPage = ({ data, count, pageContext, location }) => {
  return (
    <>
      <SEO />
      <FeaturedBlog/>
      <BlogResults data={data} pageContext={pageContext} location={location}/>
    </>
  )
}

export default BlogTagsPage

export const pageQuery = graphql`
      query TagPage($tag: String) {
        allMarkdownRemark(
          limit: 10
          filter: { frontmatter: { blogTags: { in: [$tag] } } }
        ) {
          totalCount
          edges {
            node {
              excerpt(pruneLength: 200)
              fields {
                slug
              }
              frontmatter {
                title
                blogTags
                is_featured
                templateKey
                product_image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
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

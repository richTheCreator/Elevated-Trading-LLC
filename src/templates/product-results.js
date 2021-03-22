import React from 'react'
import { graphql } from 'gatsby'
import ProductResults from '../../src/components/ProductResults'
import SEO from '../../src/components/SEO/SEO'

const ProductResultsPage = ({ data, location }) => {
  return (
    <>
      <SEO />
      <ProductResults
        data={data}
        location={location}
        totalCount={data.allMarkdownRemark.totalCount}
      />
    </>
  )
}
export default ProductResultsPage

export const pageQuery = graphql`
  query ProductResultsQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___category] }
      filter: { frontmatter: { templateKey: { eq: "product-details" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            category
            cannabinoids {
              type
              value
            }
            templateKey
            imageInfo {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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

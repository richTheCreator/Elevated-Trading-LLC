import React from 'react'
import { graphql } from 'gatsby'
import ProductResults from '../../src/components/ProductResults'
import SEO from '../../src/components/SEO/SEO'

const ProductResultsPage = ({ data, location }) => {
  console.log('data', data)
  return (
    <>
      <SEO title={data.page.frontmatter.meta_description} />
      <ProductResults
        data={data}
        location={location}
        totalCount={data.products.totalCount}
      />
    </>
  )
}
export default ProductResultsPage

export const pageQuery = graphql`
  query ProductResultsQuery {
    products: allMarkdownRemark(
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
    page: markdownRemark(
      frontmatter: { templateKey: { eq: "product-results" } }
    ) {
      frontmatter {
        meta_description
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import ProductResults from '../../src/components/ProductResults'
import SEO from '../../src/components/SEO/SEO'

const ProductCategory = ({ data, pageContext, location }) => {
  const metaTitle = `${pageContext.category} hemp | High quality, fair price | Elevated Trading LLC`

  return (
    <>
      <SEO title={metaTitle} />
      <ProductResults
        data={data}
        pageContext={pageContext}
        location={location}
        totalCount={data.allMarkdownRemark.totalCount}
      />
    </>
  )
}

export default ProductCategory

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: $category }
          templateKey: { eq: "product-details" }
        }
      }
      sort: { order: ASC, fields: frontmatter___title }
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

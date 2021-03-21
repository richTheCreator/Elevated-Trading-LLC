import React from 'react'
import { graphql } from 'gatsby'
import ProductResults from '../../src/components/ProductResults'
import SEO from '../../src/components/SEO/SEO'

const ProductCategory = ({ data, count, pageContext, location }) => {
  const metaTitle = `${pageContext.category} hemp | High quality, fair price | Elevated Trading LLC`

  return (
    <>
      <SEO title={metaTitle} />
      <ProductResults
        data={data}
        pageContext={pageContext}
        location={location}
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
            cbd
            thc
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

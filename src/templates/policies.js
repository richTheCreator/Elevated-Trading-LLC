import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import SEO from '../components/SEO/SEO'
import Policies from './Policiespage'

const ProductPage = ({ data }) => {

  const { frontmatter, html } = data.markdownRemark
  return (
    <>
      <SEO />
      <Policies hero={frontmatter.hero} content={html} />
    </>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query Policies {
    markdownRemark(frontmatter: { templateKey: { eq: "policies" } }) {
      html
      frontmatter {
        hero {
          heading
        }
      }
    }
  }
`

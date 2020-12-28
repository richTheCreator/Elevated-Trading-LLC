import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './ProductDetails/'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'
import { Subscription, Shipping, Values } from '../components'
export const ProductPageTemplate = ({
  title,
  metaDescription,
  productImage,
  category,
  details,
  cbd,
  thc,
  weights,
  coa_link,
  content,
  pathname
}) => {
  return (
    <>
      <SEO
        pathname={pathname}
        title={title}
        desc={metaDescription}
        banner={productImage.childImageSharp.fluid.src}
      />
      <Hero
        title={title}
        productImage={productImage.childImageSharp.fluid}
        category={category}
        coa_link={coa_link}
        cbd={cbd}
        thc={thc}
        weights={weights}
      />
      <Description details={details} content={content} />
      <Shipping />
      <Subscription />
      <Values />
    </>
  )
}

const ProductPage = ({ data, location }) => {
  const { frontmatter, html } = data.products
  return (
    <ProductPageTemplate
      pathname={location.pathname}
      details={frontmatter.details}
      title={frontmatter.title}
      metaDescription={frontmatter.meta_description}
      productImage={frontmatter.product_image}
      category={frontmatter.category}
      cbd={frontmatter.cbd}
      thc={frontmatter.thc}
      weights={frontmatter.weights}
      coa_link={frontmatter.coa_link}
      content={html}
    />
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageTemplate($id: String!) {
    products: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
        category
        weights {
          value
          metric
        }
        details {
          info {
            label
            items {
              item
            }
          }
        }
        coa_link {
          name
          extension
          publicURL
        }
        thc
        cbd
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

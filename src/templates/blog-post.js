import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './BlogDetails/'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'
import { Subscription, Shipping, Values } from '../components'
import Content, { HTMLContent } from '../components/Content'

export const BlogPageTemplate = ({
  title,
  metaDescription,
  productImage,
  content,
  date,
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
        date={date}
        pathName={pathname}
      />
      <Description content={content} />
    </>
  )
}

const BlogPost = ({ data, location }) => {
  const { frontmatter, html } = data.products
  return (
    <BlogPageTemplate
      pathname={location.pathname}
      title={frontmatter.title}
      metaDescription={frontmatter.meta_description}
      productImage={frontmatter.product_image}
      content={html}
      date={frontmatter.date}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPageTemplate($id: String!) {
    products: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        meta_description
        product_image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

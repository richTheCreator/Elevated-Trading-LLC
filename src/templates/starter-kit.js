import React from 'react'
import { graphql } from 'gatsby'
import { Hero, Description, KitValue } from './StarterKit'
import SEO from '../components/SEO/SEO'
import { Shipping } from '../components'
const StarterKit = ({ data, location }) => {
  const {
    frontmatter: {
      title,
      product_image,
      meta_description,
      quantities,
      included,
      kitValue: {
        backgroundImg: { image, alt },
        callouts
      }
    },
    html
  } = data.markdownRemark

  return (
    <>
      <SEO
        pathname={location.pathname}
        title={title}
        desc={meta_description}
        banner={product_image.childImageSharp.fluid.src}
      />
      <Hero
        title={title}
        product_image={product_image}
        meta_description={meta_description}
        quantities={quantities}
      />
      <Description included={included} />
      <KitValue image={image} callouts={callouts} />
      <Shipping />
    </>
  )
}

export default StarterKit

export const pageQuery = graphql`
  query StarterKit {
    markdownRemark(frontmatter: { templateKey: { eq: "starter-kit" } }) {
      html
      frontmatter {
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        quantities {
          value
        }
        meta_description
        title
        included {
          title
          description
          backgroundImg {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        kitValue {
          backgroundImg {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          callouts {
            value
            description
          }
        }
      }
    }
  }
`

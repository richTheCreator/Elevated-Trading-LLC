import React from 'react'
import { graphql } from 'gatsby'
import {
  Hero,
  Products,
  RogueValley,
  Values,
  Farm,
  SupplyChain
} from './Homepage'
import SEO from '../components/SEO/SEO'
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <SEO />
      <Hero hero={frontmatter.hero} />
      <Products products={frontmatter.products} />
      <RogueValley rogueValley={frontmatter.rogueValley} />
      <Values etcValues={frontmatter.etcValues} />
      <Farm farm={frontmatter.farming} />
      <SupplyChain supplyChain={frontmatter.supplyChain} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          heading
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
        products {
          heading
          description
          productImages {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
        }
        rogueValley {
          heading
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
        etcValues {
          heading
          description
          values {
            value
            description
          }
          peeksImage {
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        farming {
          heading
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
        supplyChain {
          heading
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
          supplyImages {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`

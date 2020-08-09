import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import Hero from './Homepage/Hero'
import SEO from '../components/SEO/SEO'
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter.supplyChain)

  return (
    <>
      <SEO />
      <Hero hero={frontmatter.productImages} />
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
                fluid(maxWidth: 800, quality: 100) {
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
                fluid(maxWidth: 800, quality: 100) {
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
                fluid(maxWidth: 800, quality: 100) {
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
        }
        farming {
          heading
          description
          backgroundImg {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
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
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          supplyImages {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
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

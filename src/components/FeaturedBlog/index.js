import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { SectionWrapper, SectionMax } from '../Containers'
import FeaturedBlogCard from './BlogCard'

const FeaturedBlog = () => {
  const { markdownRemark } = useStaticQuery(query)
  return (
    <>
      {markdownRemark?.frontmatter?.is_featured && (
        <SectionWrapper bg='black' mb={0} pb={0}>
          <SectionMax style={{ margin: 'auto' }} pb={0}>
            <FeaturedBlogCard data={markdownRemark} />
          </SectionMax>
        </SectionWrapper>
      )}
    </>
  )
}

export { FeaturedBlog }

const query = graphql`
  query featuredBlogPost {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "blog-post" }
        is_featured: { eq: true }
      }
    ) {
      excerpt(pruneLength: 200)
      fields {
        slug
      }
      frontmatter {
        title
        blogTags
        is_featured
        templateKey
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

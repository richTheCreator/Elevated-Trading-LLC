import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BlogCard } from './BlogCard'
import { FeaturedBlog } from './FeaturedBlog'
import { Flex } from 'reflexbox/styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { SectionWrapper, SectionMax } from './Containers'
import { Heading1, Heading5, Overline } from './Typography'
import BlogFilters from './BlogFilters'

const BlogTitle = styled(Heading1)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.ivory};
  color: transparent;
  line-height: 100% !important;
`
const BlogResults = ({ data, pageContext, location }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <SectionWrapper bg='black' pt={2}>
      <SectionMax style={{ margin: 'auto' }}>
        <Flex flexDirection='column' width={1} style={{ padding: '0px' }}>
          {/* FILTERS */}
          <Overline>Topics</Overline>
          <BlogFilters location={location} />
          <Heading5 color='ivory' mt={0} mb={4}>
            {data.allMarkdownRemark.totalCount}
            {pageContext && ` '${pageContext.tag}' `}
            {data.allMarkdownRemark.totalCount > 1 ? ' Articles' : ' Article'}
          </Heading5>
          {/* RESULTS */}
          <Flex flexDirection='row' flexWrap='wrap' mx={-3}>
            {posts &&
              posts.map(
                ({ node: post }) =>
                  !post.frontmatter.is_featured && (
                    <Flex
                      flexDirection='column'
                      width={[1, 1 / 2]}
                      mb={4}
                      px={3}
                    >
                      <BlogCard post={post} />
                    </Flex>
                  )
              )}
          </Flex>
        </Flex>
      </SectionMax>
    </SectionWrapper>
  )
}

export default BlogResults

import { StaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Overline } from './Typography'
import { Button } from 'rebass/styled-components'
import _ from 'lodash'

// set a default active tag state

const Filter = ({ tag, activeTag }) => {
  const tagUrl = tag !== 'all' ? `/blog/tags/${_.kebabCase(tag)}/` : '/blog/'
  return (
    <Link to={tagUrl} state={{ activeTag: tag }} style={{ display: 'inline-block', cursor: 'pointer' }}>
      <Button
        color={activeTag === tag ? 'black' : 'ivory'}
        fontWeight={1}
        fontFamily={'sans'}
        bg={activeTag === tag ? 'ivory' : 'transparent'}
        mr={3}
        css={'text-transform: uppercase;border-radius: 0px;cursor:pointer'}
        sx={{
          borderColor: 'ivory',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {tag}
      </Button>
    </Link>
  )
}
const BlogFilters = ({ data, location }) => {
  const { state = {} } = location
  let activeTag = null
  if (location.state) {
    activeTag = state.activeTag
  }

  const posts = data.allMarkdownRemark.edges

  // Tag pages:
  let tags = ['all']
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, 'node.frontmatter.blogTags')) {
      tags = [...tags, ...edge.node.frontmatter.blogTags]
    }
  })

  tags = _.uniq(tags)

  return (
    <Flex
      flexDirection='row'
      width={1}
      mt={0}
      mb={4}
      start='xs'
      style={{
        display: 'inline-block',
        overflowX: 'scroll',
        whiteSpace: 'nowrap'
      }}
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {tags.map((tag) => (
        <Filter tag={tag} activeTag={activeTag || 'all'}/>
      ))}
    </Flex>
  )
}

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query BlogTagFilters {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                blogTags
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogFilters data={data} location={location}/>}
  />
)

import { StaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Overline } from './Typography'
import { Button } from 'rebass/styled-components'
import _ from 'lodash'

// set a default active category state

const Filter = ({ category, activeCategory, location }) => {
  const categoryUrl =
    category !== 'all' ? `/products/${_.kebabCase(category)}/` : '/products/'

  console.log('location.state.key', location?.state?.key)
  return (
    <Link
      to={categoryUrl}
      state={{
        activeCategory: category,
        prevPath: location.pathname,
        prevKey: location?.state?.key
      }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      <Button
        color={activeCategory === category ? 'black' : 'ivory'}
        fontWeight={1}
        fontFamily={'sans'}
        bg={activeCategory === category ? 'ivory' : 'transparent'}
        mr={3}
        css={'text-transform: uppercase;border-radius: 0px;cursor:pointer'}
        sx={{
          borderColor: 'ivory',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {category}
      </Button>
    </Link>
  )
}
const CategoryFilters = ({ data, location }) => {
  const { state = {} } = location
  let activeCategory = null
  if (location.state) {
    activeCategory = state.activeCategory
  }

  const posts = data.allMarkdownRemark.edges

  // category pages:
  let categories = ['all']
  // Iterate through each post, putting all found categories into `categories`
  posts.forEach((edge) => {
    if (_.get(edge, 'node.frontmatter.category')) {
      categories = [...categories, edge.node.frontmatter.category]
    }
  })

  categories = _.uniq(categories)

  return (
    <Flex
      flexDirection='row'
      width={1}
      mt={0}
      mb={0}
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
      {categories.map((category) => (
        <Filter
          category={category}
          activeCategory={activeCategory || 'all'}
          location={location}
        />
      ))}
    </Flex>
  )
}

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query CategoryFilters {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product-details" } } }
          sort: { order: ASC, fields: frontmatter___category }
        ) {
          edges {
            node {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `}
    render={(data) => <CategoryFilters data={data} location={location} />}
  />
)

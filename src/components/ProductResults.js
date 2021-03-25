import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useScrollRestoration } from 'gatsby'
import styled from 'styled-components'
import { space } from 'styled-system'
import { ProductCard } from './ProductCard'
import FeaturedCard from './FeaturedCard'
import CategoryFilters from './CategoryFilters'
import { Row, Col } from 'react-flexbox-grid'
import { SectionWrapper, SectionMax } from './Containers'
import { Button } from './Button'
import { Heading1, Body2, Overline } from './Typography'
import ProductResultsPage from '../templates/product-results'

const RowWrapper = styled(Row)`
  ${space}
  &::-webkit-scrollbar {
    display: none;
  }
`
const ProductResults = ({ data, pageContext, location, totalCount }) => {
  const categoryTitle = pageContext?.category ? pageContext.category : 'Hemp'
  const productText = totalCount > 1 ? 'Products' : 'Product'
  const { edges: posts } = data.products

  // Scroll position helper
  useEffect(() => {
    const { key, pathname, state } = location

    const scrollPos = `@@scroll|${state.prevPath}|${state.prevKey}`

    if (typeof window !== 'undefined') {
      let currentPosition = window.sessionStorage.getItem(scrollPos)

      window.scrollTo(0, currentPosition)
    }
  })

  // array of unique categories in current products & an All option
  // const defaultCat = 'all'
  // const uniqueCategories = [
  //   defaultCat,
  //   ...new Set(
  //     posts.map(({ node: post }) => post.frontmatter.category.toLowerCase())
  //   )
  // ]

  // // filter state
  // const [state, setState] = useState({
  //   filteredData: posts,
  //   appliedFilter: defaultCat,
  //   categories: uniqueCategories
  // })

  // const applyCategoryFilter = (e, cat) => {
  //   e.preventDefault()
  //   // checking for default
  //   if (cat === defaultCat) {
  //     return setState({
  //       filteredData: posts,
  //       appliedFilter: cat,
  //       categories: uniqueCategories
  //     })
  //   }
  //   // fitlering based on cat
  //   const filtered = posts.filter((post) => {
  //     const { category } = post.node.frontmatter
  //     return category.toLowerCase().includes(cat)
  //   })

  //   setState({
  //     filteredData: filtered,
  //     appliedFilter: cat,
  //     categories: uniqueCategories
  //   })
  // }

  // const { filteredData, appliedFilter, categories } = state
  return (
    <SectionWrapper bg='black' style={{ overflowY: 'auto' }}>
      <SectionMax style={{ margin: 'auto' }}>
        <Col xs={12} style={{ padding: '0px' }}>
          {/* HEMP STARTER KIT */}
          <FeaturedCard />
          {/* PAGE DESC */}
          <Overline mt={4}> Categories </Overline>
          {/* FILTERS */}
          <RowWrapper
            mt={2}
            mb={0}
            start='xs'
            style={{
              display: 'inline-block',
              overflowX: 'scroll',
              whiteSpace: 'nowrap',
              width: '100%'
            }}
          >
            <CategoryFilters location={location} />
            {/* {categories.map((cat) => (
              <Button
                style={{ display: 'inline-block' }}
                bg={appliedFilter === cat ? 'ivory' : 'transparent'}
                color={appliedFilter === cat ? 'black' : 'ivory'}
                onClick={(e) => applyCategoryFilter(e, cat)}
                mr={3}
              >
                {' '}
                {cat}{' '}
              </Button>
            ))} */}
          </RowWrapper>
          <Heading1
            my={3}
            color='ivory'
            fontSize={['24px', '32px']}
            lineHeight={['42px', 'auto']}
          >
            {totalCount} {categoryTitle} {productText}
          </Heading1>
          {/* RESULTS */}
          <Row>
            {posts &&
              posts.map(({ node: post }) => (
                <Col xs={12} md={6} lg={4} style={{ marginBottom: '24px' }}>
                  <ProductCard post={post} />
                </Col>
              ))}
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default ProductResults

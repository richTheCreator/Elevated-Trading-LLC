import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
// import Link from 'gatsby-plugin-transition-link/Link'
import Content, { HTMLContent } from '../../components/Content'
import { Flex } from 'reflexbox/styled-components'
import { Body2, Overline, Heading4 } from '../Typography'
import {
  ProductImage,
  BaseBorder,
  InfoContainer,
  Wrapper,
  Container,
  StyledLogo,
  LogoContainer
} from './styles'

const BlogCard = ({
  post: {
    fields,
    excerpt,
    frontmatter: { title, category, thc, cbd, product_image, date, blogTags }
  }
}) => {
  return (
    <Link
      cover
      bg='#727A68'
      direction='down'
      to={fields.slug}
      style={{ textDecoration: 'none', width: '100%' }}
    >
      <Container>
        <Wrapper
          order={[2, 1]}
          py={1}
          pr={[0, 3]}
          width={[1, 2 / 3]}
          justifyContent='space-between'
        >
          <div>
            <Overline color='ivory' mb={0}>
              {date}
            </Overline>
            <Heading4 color='ivory' pl={0} pr={0} pt={2} m={0}>
              {title}
            </Heading4>
            <Body2 color='ivory'>{excerpt}</Body2>
          </div>
          <Flex flexDirection='row' flexWrap='wrap'>
            {blogTags.map((tag) => (
              <Link
                cover
                bg='#727A68'
                direction='down'
                to={`/blog/tags/${_.kebabCase(tag)}`}
                style={{ textDecoration: 'none' }}
              >
                <Overline mb={0} bg='sage' color='ivory' py={1} px={2} mr={3}>
                  #{tag}
                </Overline>
              </Link>
            ))}
          </Flex>
        </Wrapper>
        <Flex
          order={[1, 2]}
          flexDirection='column'
          flexWrap='wrap'
          width={[1, 1 / 3]}
        >
          <ProductImage fluid={product_image.childImageSharp.fluid} />
        </Flex>
      </Container>
    </Link>
  )
}

export { BlogCard }

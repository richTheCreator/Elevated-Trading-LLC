import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
// import Link from 'gatsby-plugin-transition-link/Link'
import { Heading5 } from '../Typography'
import {
  ProductImage,
  BaseBorder,
  InfoContainer,
  Wrapper,
  StyledLogo,
  LogoContainer
} from './styles'

const ProductCard = ({
  post: {
    id,
    fields,
    frontmatter: { title, category, imageInfo, cannabinoids }
  }
}) => {
  const canna1 = cannabinoids[0]
  const canna2 = cannabinoids[1]
  return (
    <Col>
      <Link
        cover
        bg='#727A68'
        direction='down'
        to={fields.slug}
        style={{ textDecoration: 'none' }}
      >
        <ProductImage fluid={imageInfo.image.childImageSharp.fluid} />
        <Wrapper bg='ivory' p={2}>
          <Heading5 pl={0} pr={0} pt={2} pb={2} m={0}>
            {title}
          </Heading5>
          <InfoContainer>
            <Col
              xs={8}
              style={{
                padding: '0px'
              }}
            >
              <BaseBorder color='black' borderWidth='0px 2px 2px 0px'>
                {category}
              </BaseBorder>
              <Row style={{ width: '100%' }}>
                <Col xs={6} style={{ padding: '0px' }}>
                  <BaseBorder
                    color='black'
                    fontSize={5}
                    borderWidth='0px 2px 0px 0px'
                  >
                    {canna1.value}% <br />
                    <span style={{ fontSize: '11.85px' }}>{canna1.type}</span>
                  </BaseBorder>
                </Col>
                <Col xs={6} style={{ padding: '0px' }}>
                  <BaseBorder
                    color='black'
                    fontSize={5}
                    borderWidth='0px 2px 0px 0px'
                  >
                    {canna2.value}%
                    <br />
                    <span style={{ fontSize: '11.85px' }}>{canna2.type}</span>
                  </BaseBorder>
                </Col>
              </Row>
            </Col>
            <LogoContainer xs={4}>
              <StyledLogo fillColor='black' />
            </LogoContainer>
          </InfoContainer>
        </Wrapper>
      </Link>
    </Col>
  )
}

export { ProductCard }

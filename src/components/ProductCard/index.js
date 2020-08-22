import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import { Body1, formattedDescription, Heading5 } from '../Typography'
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
    frontmatter: { title, category, thc, cbd, product_image }
  }
}) => {
  return (
    <Col>
      <Link to={fields.slug} style={{ textDecoration: 'none' }}>
        <ProductImage fluid={product_image.childImageSharp.fluid} />
        <Wrapper bg='ivory'>
          <Heading5 p={2} m={0}>
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
                    {cbd}% <br />
                    <span style={{ fontSize: '11.85px' }}>CBD</span>
                  </BaseBorder>
                </Col>
                <Col xs={6} style={{ padding: '0px' }}>
                  <BaseBorder
                    color='black'
                    fontSize={5}
                    borderWidth='0px 2px 0px 0px'
                  >
                    {thc}%
                    <br />
                    <span style={{ fontSize: '11.85px' }}>THC</span>
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

import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import { Heading2, Body1 } from '../../../components/Typography'
import useSiteMetadata from '../../../components/SiteMetadata'
import { categoryStyles } from './styles'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'
import { Row, Col } from 'react-flexbox-grid'

const Products = ({ products: { heading, description } }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper bg='ivory'>
      <SectionMax center='xs' style={{ margin: 'auto' }}>
        <Col xs={12}>
          <Heading2 mt={0} mb={3} textAlign={'center'}>
            {heading}
          </Heading2>
          <Body1 textAlign={'center'} maxWidth={'1000px'} m='auto'>
            {description}
          </Body1>
          <Button
            bg={'sage'}
            color={'ivory'}
            hasBorder
            mt={4}
            mb={6}
            url={menuLinks[0].link}
          >
            VIEW PRODUCTS
          </Button>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Products }

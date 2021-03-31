import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading6, Body2 } from '../../../components/Typography'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import { ValueText, Title } from './styles'
import Content, { HTMLContent } from '../../../components/Content'

const Description = ({ details, content }) => {
  return (
    <SectionWrapper
      bg={'black'}
      color='ivory'
      className='Blog-Description'
      pt={[4, 4, 0, 0]}
    >
      <SectionMax
        maxWidth='700px'
        style={{ justifyContent: 'center', margin: 'auto' }}
      >
        <Col xs={12}>
          <HTMLContent content={content} />
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Description }

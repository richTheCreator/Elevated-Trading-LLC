import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Heading1 } from '../../components/Typography'
import { SectionMax, SectionWrapper } from '../../components/Containers'
import Content, { HTMLContent } from '../../components/Content'

const PageTitle = styled(Heading1)`
  line-height: 100% !important;
  text-transform: uppercase;
`
const Policies = ({ content, hero }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper
      bg={'ivory'}
      className='Policies-Description'
      pt={[4, 4, 0, 0]}
    >
      <SectionMax
        style={{ justifyContent: 'center', margin: 'auto' }}
        pt={[3, 6]}
      >
        <Col xs={12} lg={10}>
          <PostContent content={content} />
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Policies

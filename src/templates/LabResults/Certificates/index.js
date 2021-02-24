import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { CertificateCard } from '../../../components'
const Certificates = ({ products }) => {

  return (
    <SectionWrapper bg='ivory'>
      <SectionMax style={{ margin: 'auto' }}>
        <Row>
          {products &&
            products.map(({ node }) => (
              <Col xs={12} sm={6}>
                <CertificateCard node={node} />
              </Col>
            ))}
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Certificates }

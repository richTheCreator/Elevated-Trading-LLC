import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { StyledFileIcon, Container } from './styles'
import { LinkButton } from '../Button'
import { Heading5 } from '../Typography'
const CertificateCard = ({
  node: {
    frontmatter: { coa_link, title }
  }
}) => {
  coa_link ? console.log(coa_link) : console.log(title)
  return (
    <>
      {coa_link && (
        <Container xs p={2} mb={4} between='xs' start='xs'>
          <Col xs={8}>
            <Heading5>{title}</Heading5>
          </Col>
          <Col xs={4}>
            <LinkButton
              color='ivory'
              bg='black'
              display='flex'
              width='100%'
              height='100%'
              justifyItems='center'
              alignItems='center'
              borderColor='black'
              href={coa_link.publicURL}
            >
              <StyledFileIcon pr={2} /> COA
            </LinkButton>
          </Col>
        </Container>
      )}
    </>
  )
}

export { CertificateCard }

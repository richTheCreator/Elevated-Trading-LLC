import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Heading2,
  Button as ButtonText,
  Caption,
  Body2,
  Overline
} from '../../../components/Typography'
import { Button, LinkButton } from '../../../components'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import {
  ProductImg,
  TextContainer,
  Banner,
  StyledFileIcon,
  BaseBorder,
  SelectWrapper
} from './styles'

const formatOptionLabel = ({ value }) => (
  <ButtonText color='black' p={0}>
    {value}
  </ButtonText>
)

const Hero = ({ title, product_image, meta_description, quantities }) => {
  const [quantityVal, setWeight] = useState(`${quantities[0].value}`)

  const mailTo = `mailto:sales@elevatedtrading.com?subject=Price%20request%20for%3A%20${title}%20-%20${quantityVal}`

  const sendEmail = (e) => {
    e.preventDefault()
    location.href = mailTo
  }

  return (
    <SectionWrapper
      bg='black'
      pl={[0, 0, 5, 6]}
      pr={[0, 0, 5, 6]}
      pt={[0, 0, 5, 6]}
      pb={[0, 0, 5, 6]}
    >
      <SectionMax
        style={{ position: 'relative' }}
        justifyContent={['center', 'center', 'flex-end', 'flex-end']}
        m='auto!important'
        p={[0, 4]}
      >
        <ProductImg
          fluid={product_image.childImageSharp.fluid}
          height={['300px', '300px', '100%', '100%']}
          position={[
            'relative',
            'relative',
            'absolute !important',
            'absolute !important'
          ]}
          width={['100%', '100%', '80%', '80%']}
        />
        <TextContainer
          bg={'black'}
          lg={5}
          md={6}
          xs={11}
          p={[3, 5]}
          mt={['-50px', '-50px', '0px', '0px']}
        >
          <Heading2
            mb={2}
            mt={2}
            textAlign='left'
            color='ivory'
            fontFamily='heading'
            style={{ textTransform: 'uppercase' }}
          >
            {title}
          </Heading2>
          <Body2 color='ivory'> {meta_description} </Body2>
          <Overline mt={4} color='ivory'>
            {' '}
            Quantity{' '}
          </Overline>
          <SelectWrapper
            onChange={(option) => {
              setWeight(`${option.value}`)
            }}
            mb={3}
            mt={3}
            formatOptionLabel={formatOptionLabel}
            options={quantities}
            defaultValue={quantities[0]}
            getOptionLabel={(option) => `${option.value}`}
            styles={{
              control: (provided) => ({
                ...provided,
                height: 50,
                minHeight: 50,
                cursor: 'pointer'
              }),
              singleValue: (provided, state) => {
                const width = '100%'
                const paddingRight = 8
                return { ...provided, width, paddingRight }
              },
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: '#2D2926'
              }),
              option: (provided, state) => ({
                ...provided,
                cursor: 'pointer',
                padding: '0px 8px'
              })
            }}
            isSearchable={false}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F5F7F9',
                primary: '#DBEBF6'
              }
            })}
          />
          <Row style={{ padding: '0px' }}>
            <Col xs={12} style={{ paddingLeft: '0px' }}>
              <Button
                bg={'sage'}
                width='100%'
                height='100%'
                color='ivory'
                bg='sage'
                onClick={(e) => sendEmail(e)}
              >
                REQUEST PRICE
              </Button>
            </Col>
          </Row>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

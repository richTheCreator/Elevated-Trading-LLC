import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Heading4,
  Button as ButtonText,
  Caption
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

const formatOptionLabel = ({ value, metric }) => (
  <ButtonText color='black' p={0}>
    {value}
    {metric}
  </ButtonText>
)

const Hero = ({
  title,
  imageInfo,
  category,
  cbd,
  thc,
  weights,
  coa_link
}) => {

  const [weightVal, setWeight] = useState(
    `${weights[0].value} ${weights[0].metric}`
  )

  const mailTo = `mailto:sales@elevatedtrading.com?subject=Price%20request%20for%3A%20${title}%20-%20${weightVal}`

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
          fluid={imageInfo}
          height={['300px', '300px', '460px', '460px']}
          position={[
            'relative',
            'relative',
            'absolute !important',
            'absolute !important'
          ]}
          width={['100%', '100%', '80%', '80%']}
        />
        <TextContainer
          bg={'ivory'}
          lg={5}
          md={6}
          xs={11}
          pt={5}
          pb={4}
          pl={[2, 2, 4, 4]}
          pr={[2, 2, 4, 4]}
          mt={['-50px', '-50px', 0, 0]}
        >
          <Banner bg='sage'>
            <Caption
              textAlign='center'
              fontWeight={2}
              color='ivory'
              p={'0px !important'}
              mt={'4px !important'}
            >
              Save with a subscription
            </Caption>
          </Banner>
          <Heading4 mb={2} mt={2} textAlign='center' color='black'>
            {title}
          </Heading4>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={3} borderWidth='2px 2px 2px 0px' pl={0}>
              <ButtonText textAlign='left' fontSize={'18px'} color='black'>
                {cbd}% <br />
                <span style={{ fontSize: '11.85px' }}>CBD</span>
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={6} borderWidth='2px 2px 2px 0px'>
              <ButtonText fontSize={6} textAlign='center' color='black'>
                {category}
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={3} borderWidth='2px 0px 2px 0px' pr={0}>
              <ButtonText textAlign='right' fontSize={'18px'} color='black'>
                {thc}% <br />
                <span style={{ fontSize: '11.85px' }}>∆9-THC</span>
              </ButtonText>
            </BaseBorder>
          </Row>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={12} borderWidth='0px 0px 2px 0px'>
              <ButtonText textAlign='center' color='black' fontSize={6}>
                LAB CERTIFIED HEMP
              </ButtonText>
            </BaseBorder>
          </Row>
          <SelectWrapper
            onChange={(option) => {
              setWeight(`${option.value} ${option.metric}`)
            }}
            mb={3}
            mt={3}
            formatOptionLabel={formatOptionLabel}
            options={weights}
            defaultValue={weights[0]}
            getOptionLabel={(option) => `${option.value} ${option.metric}`}
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
            <Col xs={8} style={{ paddingLeft: '0px' }}>
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
            <Col xs={4} style={{ paddingRight: '0px' }}>
              <LinkButton
                color='black'
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
          </Row>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

import React from 'react'
import {
  Heading1,
  Overline
} from '../../../components/Typography'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import {
  ProductImg,
  TextContainer,
  BackTo
} from './styles'

const Hero = ({
  title,
  productImage,
  date
}) => {
  return (
    <SectionWrapper
      bg='black'
      pl={[0, 0, 0, 6]}
      pr={[0, 0, 0, 6]}
      pt={[0, 0, 0, 6]}
      pb={[0, 0, 0, 6]}
    >
      <SectionMax
        height={['100%', '100%', '500px', '500px']}
        style={{ position: 'relative', maxHeight: '800px' }}
        justifyContent={['center', 'center', 'flex-start', 'flex-start']}
        m='auto!important'
        pl={[0, 0, 0, 4]}
        pr={[0, 0, 0, 4]}
        pt={[0, 0, 0, 4]}
        pb={[0, 0, 0, 0]}
      >
        <ProductImg
          fluid={productImage}
          height={['250px', '300px', '500px', '500px']}
          position={[
            'relative',
            'relative',
            'absolute !important',
            'absolute !important'
          ]}
          width={['100%', '100%', '90%', '90%']}
        />
        <TextContainer
          bg={'ivory'}
          lg={6}
          md={6}
          xs={11}
          p={[3, 5]}
          mt={['-50px', '-50px', '0px', '0px']}
          mb={['0px', '0px', '-20px', '-20px']}
        >
          <BackTo color='black' to={'/blog'}>
            ← Back to blog
          </BackTo>
          <Heading1
            mb={2}
            mt={2}
            textAlign='left'
            color='black'
            fontSize={['32px', '44px', '50px']}
            lineHeight={['40px', '54px', '62px']}
            fontFamily='sans'
          >
            {title}
          </Heading1>
          <Overline color='sage'>
            {date}
          </Overline>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import { space, width, color } from 'styled-system'
import styled from 'styled-components'
import { SectionWrapper, SectionMax } from './Containers'
import { Heading5, Body1, Button, Overline, Caption, Body2 } from './Typography'
import IG_Logo from '../img/svg/instagram.svg'
import FB_Logo from '../img/svg/facebook.svg'
import LI_Logo from '../img/svg/linkedin.svg'
import Mail_Icon from '../img/svg/mail.svg'
import useSiteMetadata from './SiteMetadata'
import { ETCTriangleLogo } from './SVG/ETC_TriangleLogo'

const StyledLogo = styled(ETCTriangleLogo)`
  ${space}
  height: 80px;
`

const Legal = styled(Row)`
  ${color}
  ${space}
  ${width}
`
const LinkStyle = styled(Link)`
  ${space}
  display:inline-block;
  width: 100%;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[2]};
  color: ${(props) => props.theme.colors.white};
  letter-spacing: ${(props) => props.theme.letterSpacings[8]};
`

const IconContainer = styled(Col)``
const CTAcontaienr = styled(Row)`
  ${space}
  ${width}
  border: 1px solid white;
`
const ContactCTA = (props) => {
  return (
    <a
      href={props.url}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <CTAcontaienr {...props} middle='xs' borderRadius>
        <IconContainer
          xs={3}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {props.children}
        </IconContainer>
        <Col xs={9} style={{ borderLeft: '1px solid white' }}>
          <Button textAlign='center' color='white'>
            {props.text}
          </Button>
        </Col>
      </CTAcontaienr>
    </a>
  )
}

const CTAWrapper = styled(Col)`
  ${width}
`

const Footer = ({ footer }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper justifyContent='center' bg='midnight'>
      <SectionMax>
        <Row between='xs' start='xs' style={{ width: '100%' }}>
          <Col xs={12} md={5}>
            <Row middle='xs'>
              <Link to='/' className='navbar-item' title='Logo'>
                <StyledLogo fillColor='ivory' mt={4} mb={4} />
              </Link>
            </Row>
            <Body1 color='lightGrey' pb={[3, 0]}>
              {footer.blurb}
            </Body1>
          </Col>
          <Col xs={12} md={3}>
            <Overline mb={3} color='mdGrey'>
              {' '}
              LINKS{' '}
            </Overline>
            {menuLinks.map((navItems) =>
              navItems.name !== 'Home' ? (
                <LinkStyle mb={4} to={navItems.link}>
                  {navItems.name}
                </LinkStyle>
              ) : null
            )}
          </Col>
          <Col xs={12} md={3} style={{ paddingBottom: '16px' }}>
            <Overline textAlign={['left', 'right']} mb={3} color='mdGrey'>
              {' '}
              GET IN TOUCH{' '}
            </Overline>
            <Row end='md' start='xs'>
              <CTAWrapper width={'100%'}>
                <ContactCTA
                  mb={3}
                  width={'100%'}
                  url='https://www.instagram.com/elevatedtradingcbd/'
                  text={'Instagram'}
                >
                  <IG_Logo
                    style={{
                      fill: 'white'
                    }}
                  />
                </ContactCTA>
                <ContactCTA
                  mb={3}
                  width={'100%'}
                  url='https://www.facebook.com/Elevated-Trading-109488510825961'
                  text={'Facebook'}
                >
                  <FB_Logo
                    style={{
                      fill: 'white'
                    }}
                  />
                </ContactCTA>
                <ContactCTA
                  mb={3}
                  width={'100%'}
                  url='https://www.linkedin.com/company/elevated-trading-llc'
                  text={'Linked In'}
                >
                  <FB_Logo
                    style={{
                      fill: 'white'
                    }}
                  />
                </ContactCTA>
                <ContactCTA
                  url='mailto:sales@elevatedtrading.com?subject=Contact%20Elevated%20Trading%20Company'
                  mb={4}
                  text={'Contact us'}
                >
                  <Mail_Icon
                    style={{
                      fill: 'white'
                    }}
                  />
                </ContactCTA>
              </CTAWrapper>
            </Row>
          </Col>
        </Row>
        <Row>
          <Caption color='mdGrey'>© 2020 Elevated Trading Company LLC</Caption>
        </Row>
        <Legal center='xs' p={0} width='100%'>
          <Caption textAlign='left' color='mdGrey'>
            {footer.legal}
          </Caption>
        </Legal>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Footer

import React from 'react'
import styled from 'styled-components'
import { space, width, color, border, height, borderColor, display } from 'styled-system'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  ${color}
  ${width}
  ${height}
  ${border}
  border-style: solid;
  border-width: 2px;
  align-self: center;
  padding:0px 16px;
  cursor: pointer;
  &: focus {
    outline: 0
  }
`
const LinkContainer = styled.a`
  ${space}
  ${color}
  ${width}
  ${height}
  ${border}
  ${borderColor}
  ${display}
  text-decoration: none;
  display:flex;
  border-width: 2px;
  border-style: solid;
  align-self: center;
  justify-content:center;
  padding:0px 16px;
  cursor: pointer;
  &: focus {
    outline: 0
  }
`

const Button = (props) => (
  <Link cover bg='#727A68' direction='up' to={props.url}>
    <Container {...props}>
      <ButtonText
        display={props.display}
        alignItems={props.alignItems}
        p={props.textPadding}
        color={props.color || 'black'}
      >
        {props.children}
      </ButtonText>
    </Container>
  </Link>
)
const LinkButton = (props) => (
  <LinkContainer
    href={props.href}
    borderColor={props.borderColor}
    bg={props.bg}
  >
    <ButtonText {...props}>{props.children}</ButtonText>
  </LinkContainer>
)

export { Button, LinkButton }

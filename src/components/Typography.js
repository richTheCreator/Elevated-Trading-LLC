import React from 'react'
import system from '@rebass/components'
import styled from 'styled-components'
import { borderColor, space, fontWeight, color } from 'styled-system'
const textStyles = [
  'fontSize',
  'textAlign',
  'fontWeight',
  'fontStyle',
  'color',
  'border',
  'lineHeight',
  'letterSpacing',
  'space',
  'fontFamily',
  'maxWidth',
  'alignItems',
  'display',
  'justifyItems'
]

export const Heading1 = system(
  {
    is: 'h1',
    fontSize: [11, 12],
    fontWeight: 2,
    color: 'black',
    lineHeight: [7, 8],
    letterSpacing: 8,
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading2 = system(
  {
    is: 'H2',
    fontSize: [10, 11],
    fontWeight: 2,
    color: 'black',
    lineHeight: [6, 7],
    letterSpacing: 9,
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading3 = system(
  {
    is: 'H3',
    fontSize: [9, 10],
    fontWeight: 2,
    color: 'black',
    lineHeight: [6, 7],
    letterSpacing: 9,
    fontFamily: 'sans'
  },
  ...textStyles
)

export const Heading4 = system(
  {
    is: 'H4',
    fontSize: 8,
    fontWeight: 2,
    color: 'black',
    lineHeight: 6,
    letterSpacing: 5,
    fontFamily: 'sans'
  },
  ...textStyles
)

export const Heading5 = system(
  {
    is: 'H5',
    fontSize: 7,
    fontWeight: 2,
    color: 'black',
    lineHeight: 5,
    letterSpacing: 5
  },
  ...textStyles
)

export const Heading6 = system(
  {
    is: 'H6',
    fontSize: 6,
    fontWeight: 2,
    color: 'black',
    lineHeight: 3,
    letterSpacing: 5
  },
  ...textStyles,
  {
    textTransform: 'uppercase'
  }
)

export const Body1 = system(
  {
    is: 'p',
    fontSize: [6, 7],
    fontWeight: 0,
    color: 'darkGrey',
    lineHeight: [4, 5],
    letterSpacing: 7
  },
  ...textStyles
)

export const Body2 = system(
  {
    is: 'p',
    fontSize: 6,
    fontWeight: 0,
    color: 'darkGrey',
    lineHeight: 4,
    letterSpacing: 5
  },
  ...textStyles
)

export const Subtitle1 = system(
  {
    is: 'p',
    fontSize: 5,
    fontWeight: 3,
    fontStyle: 'italic',
    color: 'black',
    lineHeight: 2,
    letterSpacing: 8
  },
  ...textStyles,
  {
    textTransform: 'uppercase'
  }
)

export const Subtitle2 = system(
  {
    is: 'p',
    fontSize: 3,
    fontWeight: 1,
    color: 'darkGrey',
    lineHeight: 2,
    letterSpacing: 2
  },
  ...textStyles
)

export const Button = system(
  {
    is: 'p',
    fontSize: 4,
    fontWeight: 2,
    color: 'black',
    lineHeight: 0,
    letterSpacing: 8,
    fontFamily: 'sans'
  },
  ...textStyles,
  {
    padding: '16px 0px',
    margin: '0px',
    borderWidth: '2px',
    textTransform: 'uppercase'
  }
)

export const Caption = system(
  {
    is: 'p',
    fontSize: 2,
    fontWeight: 0,
    color: 'darkGrey',
    lineHeight: 1,
    letterSpacing: 6
  },
  ...textStyles
)

export const Overline = system(
  {
    is: 'p',
    fontSize: 1,
    fontWeight: 2,
    color: 'lightGrey',
    lineHeight: 0,
    letterSpacing: 9
  },
  ...textStyles,
  {
    textTransform: 'uppercase'
  }
)

// VARIANTS
const ListItemSquare = styled.li`
  display: flex;
  align-items: center;
  &:before {
    ${borderColor}
    content: " ";
    /* flex-shrink: 0; */
    /* position: relative; */
    /* vertical-align: sub; */
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-width: 2px;
    border-radius: 3px;
    border-style: solid;
    border-image: initial;
  }
`

export const formattedDescription = (description) => {
  return description
    .split('\n\n')
    .map((paragraph) => `${paragraph.replace(/\n/g, '<br> <br>')}`)
    .join('')
}

export const WithDecorator = ({ bodyText, bodyColor, decoratorColor }) => (
  <ListItemSquare borderColor={decoratorColor}>
    <Body2 m={0} color={bodyColor}>
      {' '}
      {bodyText}{' '}
    </Body2>
  </ListItemSquare>
)

export const Outlined = styled(Heading3)`
${space}
${fontWeight}
${color}
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: ${(props) => props.outlineColor};
font-weight: ${(props) => props.theme.fontWeights[3]};
font-size: ${(props) =>
  props.fontSize
    ? `calc(${props.fontSize}px + (40 - 18) * ((100vw - 300px) / (1600 - 300)));`
    : 'auto'}
line-height: ${(props) =>
  props.fontSize
    ? `calc(${props.fontSize}px + (40 - 18) * ((100vw - 300px) / (1600 - 300)))!important;`
    : 'auto'}
display:inline-block;
font-family: ${(props) => props.theme.fonts.heading}
`

import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  borderWidth,
  color,
  height,
  width,
  position
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import Select from 'react-select'
import { Body1, Overline } from '../../../components/Typography'
import { FileIcon } from '../../../components/SVG/File'
import { Link } from 'gatsby'

export const BackTo = styled(Link)`
  ${color}
  font-weight: 700;
  font-family: ${props => props.theme.fonts.sans}
`
export const StyledFileIcon = styled(FileIcon)`
  ${space}
  height: 24px;
`

export const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
`
export const ProductImg = styled(BackgroundImage)`
  ${height}
  ${position}
  ${width}
  top: 0;
  right: 0;
  background-size: cover;
  box-shadow: ${(props) => props.theme.shadows.md};
`
// export const TextContainer = styled.div`
//     position: absolute;
//     right: 0;
//     bottom: 0;
// `
export const TextContainer = styled(Col)`
  ${space}
  ${color}
  ${position}
  align-self: flex-end;
  z-index: 1;
`
export const ImageWrapper = styled.div`
  ${space}
`
export const SelectWrapper = styled(Select)`
  ${space}
`

export const BaseBorder = styled(Col)`
  ${borderWidth}
  ${space}
  padding-top:8px;
  padding-bottom: 8px;
  margin: 0px;
  height: fit-content;
  border-style: solid;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.colors.black};
`

export const Banner = styled.div`
  ${color}
  ${space}
  top:0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 28px;
`

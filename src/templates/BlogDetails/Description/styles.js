import styled from 'styled-components'
import { SectionWrapper } from '../../../components/Containers'
import { Heading5, Heading3 } from '../../../components/Typography'

export const ValueText = styled(Heading5)`
  border-bottom: 2px solid ${(props) => props.theme.colors.ivory};
  text-transform: uppercase;
`

export const Title = styled(Heading3)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.ivory};
  color: transparent;
  text-align: left;
`

import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1, Outlined } from '../../../components/Typography'

export const BackgroundContainer = styled(BackgroundImage)`
  ${space}
  ${height}
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

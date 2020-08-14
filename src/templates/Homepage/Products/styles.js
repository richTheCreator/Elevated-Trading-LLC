import styled from 'styled-components'
import { space, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'

export const CategoryImage = styled(BackgroundImage)`
  ${space}
  ${height}
  display:flex;
  flex-direction: column;
  max-width: 440px;
  background-size: cover;
  background-position: top;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

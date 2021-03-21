import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './src/components/Layout'
import theme from './static/styles/theme'
import { GlobalStyle } from './src/components/GlobalStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </HelmetProvider>
  )
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

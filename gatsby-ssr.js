
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'
import theme from './static/styles/theme'
import Layout from './src/components/Layout'
import { GlobalStyle } from './src/components/GlobalStyles'
import RegFont from './static/fonts/fortika-regular-webfont.woff2';

export const wrapRootElement = ({ element }) => {
  const helmetContext = {}

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </HelmetProvider>
  )
}

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  let headComponents = [];

  headComponents.push(
    <link rel="preload" href={RegFont} as="font" type="font/woff2" crossOrigin=""></link>
  );

  setHeadComponents(headComponents);
}


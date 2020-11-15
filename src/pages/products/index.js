import React from 'react'
import ProductResults from '../../components/ProductResults'
import SEO from '../../components/SEO/SEO'

export default class ProductResultsPage extends React.Component {
  render () {
    return (
      <>
        <SEO />
        <ProductResults />
      </>
    )
  }
}

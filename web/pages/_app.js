import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/globals.css'

const siteConfigQuery = `
  *[_id == "global-config"] {
    title,
    logo {asset->{extension, url}},
    mainNavigation[] {
      _key,
      title,
      href
    },
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      pageProps.config = config
      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default App

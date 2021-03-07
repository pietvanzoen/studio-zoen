import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import imageUrlBuilder from '@sanity/image-url'
import SVG from 'react-inlinesvg'
import client from '../client'

const builder = imageUrlBuilder(client)

class Header extends Component {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string
      }),
      events: PropTypes.any
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.string
    })
  }

  renderLogo = logo => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} />
    }

    return <img width='100'src={builder
      .image(logo)
      .format('png')
      .width(200)
      .url()} />
  }

  render () {
    const {title = 'Missing title', navItems, router, logo} = this.props

    return (
      <header>
        <h1>
          <Link
            href={{
              pathname: '/LandingPage',
              query: {
                slug: '/'
              }
            }}
            as='/'
            prefetch
          >
            <a title={title}>{this.renderLogo(logo)}</a>
          </Link>
        </h1>
        <nav>
          <ul>
            {navItems &&
              navItems.map(item => {
                const {href, title, _key} = item
                const isActive =
                  router.pathname === '/Page' && router.query.slug === href
                return (
                  <li key={_key}>
                    <Link
                      href={href}
                    >
                      <a data-is-active={isActive ? 'true' : 'false'}>{title}</a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)

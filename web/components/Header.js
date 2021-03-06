import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import imageUrlBuilder from '@sanity/image-url'
import SVG from 'react-inlinesvg'
import client from '../client'
import classnames from 'classnames'

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
      <header className='header'>
        <div className='home-menu pure-menu pure-menu-horizontal'>
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
            <a className='pure-menu-heading' title={title}>{this.renderLogo(logo)}</a>
          </Link>
          <nav>
            <ul className='pure-menu-list'>
              {navItems &&
          navItems.map(item => {
            const {href, title, _key} = item
            return (
              <li key={_key} className={'menu-item'}>
                <Link href={href} >
                  <a className='menu-item-link'>{title}</a>
                </Link>
              </li>
            )
          })}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)

import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import classnames from 'classnames'

const builder = imageUrlBuilder(client)

function Figure ({node, width = 2000, className}) {
  const {alt, caption, asset} = node
  if (!asset) {
    return undefined
  }
  return (
    <figure className={className}>
      <img
        className={'pure-img-responsive'}
        src={builder
          .image(asset)
          .auto('format')
          .width(width)
          .url()}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <p>{caption}</p>
        </figcaption>
      )}
    </figure>
  )
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  width: PropTypes.number,
  className: PropTypes.string
}
export default Figure

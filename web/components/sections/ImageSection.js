import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'

const builder = imageUrlBuilder(client)

function ImageSection (props) {
  const {text, images} = props

  if (!images) {
    return null
  }

  return (
    <div>
      {text}
      {images.map(image =>
        <figure>
          <img
            src={builder
              .image(image)
              .auto('format')
              .width(2000)
              .url()}
            alt={image.alt}
          />
        </figure>
      )}
    </div>
  )
}

ImageSection.propTypes = {
  text: PropTypes.array,
  images: PropTypes.arrayOf(PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }))
}

export default ImageSection

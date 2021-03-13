import React from 'react'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import classnames from 'classnames'

const builder = imageUrlBuilder(client)

const SIZES = [250, 400, 600, 800, 1000, 1500, 2500, 4000]

const Image = ({asset, alt, className, ratio}) => {
  const imgBuilder = builder
    .image(asset)
    .auto('format')
    .fit('max')
    .quality(80)

  const sources = SIZES.map((size) => {
    return {
      size,
      src: imgBuilder
        .width(size)
        .height(ratio && Math.floor(size * ratio))
        .url()
    }
  })

  const srcset = sources.map((set) => `${set.src} ${set.size}w`).join(', ')

  return (
    <img loading='lazy' className={classnames('pure-img-responsive', className)} srcSet={srcset} src={sources[4].src} alt={alt} />
  )
}

export default Image

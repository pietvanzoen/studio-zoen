import React from 'react'
import PropTypes from 'prop-types'
import Figure from './Figure'

function FigureGrid ({node}) {
  const {images} = node
  if (!images) {
    return undefined
  }
  return (
    <div>
      {images.map(image => <Figure node={image} width='200' />)}
    </div>
  )
}

FigureGrid.propTypes = {
  node: PropTypes.shape({
    images: PropTypes.array
  })
}
export default FigureGrid

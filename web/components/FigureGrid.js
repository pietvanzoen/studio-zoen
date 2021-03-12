import React from 'react'
import PropTypes from 'prop-types'
import Figure from './Figure'

function FigureGrid ({node}) {
  const {images} = node
  if (!images) {
    return undefined
  }
  const unitClass = images.length % 2 === 0 ? 'pure-u-1-2' : 'pure-u-1-2 pure-u-md-1-3'
  return (
    <div className='pure-g'>
      {images.map(image => <div className={unitClass}><Figure node={image} /></div>)}
    </div>
  )
}

FigureGrid.propTypes = {
  node: PropTypes.shape({
    images: PropTypes.array
  })
}
export default FigureGrid

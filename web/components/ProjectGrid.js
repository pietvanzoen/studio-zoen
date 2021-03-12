import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function ProjectGrid ({node}) {
  const {projects = []} = node
  if (!projects) {
    return undefined
  }
  return (
    <div className='pure-g'>
      {projects.map(project => {
        const {featureImages, slug, title} = project
        return featureImages.map((image) =>
          <div className='pure-u-1-2 pure-u-md-1-3'>
            <Link href={`/projects/${slug.current}`}>
              <a title={title}>
                <img className='pure-img-responsive' src={builder
                  .image(image.asset)
                  .auto('format')
                  .width(500)
                  .height(500)
                  .url()} />
              </a>
            </Link>
          </div>
        )
      })}
    </div>

  )
}

ProjectGrid.propTypes = {
  node: PropTypes.shape({
    projects: PropTypes.array
  })
}
export default ProjectGrid

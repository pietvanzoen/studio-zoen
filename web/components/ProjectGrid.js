import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Link from 'next/link'
import Image from './Image'

const builder = imageUrlBuilder(client)

function ProjectGrid ({node}) {
  const {projects = []} = node
  if (!projects) {
    return undefined
  }
  return (
    <div className='pure-g projectgrid'>
      {projects.map(project => {
        const {featureImages, slug, title} = project
        return featureImages.map((image) =>
          <div className='pure-u-1-2 pure-u-md-1-3'>
            <div className='projectgrid-item '>
              <Link href={`/projects/${slug.current}`}>
                <a>
                  <h2 className='projectgrid-item__title'>{title}</h2>
                  <Image className='projectgrid-item__image' {...image} ratio={1} />
                </a>
              </Link>
            </div>
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

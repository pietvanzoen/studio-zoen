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
    <div>
      {projects.map(project => {
        const {featureImages, slug, title} = project
        return featureImages.map((image) =>
          <Link href={`/projects/${slug.current}`}>
            <a title={title}>
              <img src={builder
                .image(image.asset)
                .auto('format')
                .width(200)
                .height(200)
                .url()} />
            </a>
          </Link>
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

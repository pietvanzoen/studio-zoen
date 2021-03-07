import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import serializers from './serializers'

const {projectId, dataset} = client.config()

function Content (props) {
  const {blocks} = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return <BlockContent blocks={blocks} serializers={serializers} projectId={projectId} dataset={dataset} />
}

Content.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object)
}

export default Content

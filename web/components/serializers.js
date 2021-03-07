import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    figure: Figure,
    projectGrid: (props) => <pre>{JSON.stringify(props.node.projects, null, 2)}</pre>,
    figureGrid: (props) => <pre>{JSON.stringify(props.node.images, null, 2)}</pre>
  }
}

export default serializers

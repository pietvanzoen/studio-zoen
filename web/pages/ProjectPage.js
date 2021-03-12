import PropTypes from 'prop-types'
import React from 'react'
import client from '../client'
import Content from '../components/Content'
import Layout from '../components/Layout'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const pageQuery = `
*[_type == "project" && metadata.slug.current == $slug][0]{
  title,
  heroImage,
  content[] {
    ...
  }
}
`

class ProjectPage extends React.Component {
  static async getInitialProps ({query}) {
    const {slug} = query
    return client.fetch(pageQuery, {slug}).then(res => {
      console.log(res)
      return {...res, slug}
    })
  }

  render () {
    const {config, title, heroImage, content} = this.props
    return (
      <Layout config={config}>
        <div
          className='banner'
          style={{'backgroundImage': `url(${builder
            .image(heroImage)
            .auto('format')
            .width(2000)
            .height(500)
            .url()})`}} >
          <h1 className='banner-head'>{title}</h1>

        </div>
        <div className='content-wrapper'>
          <Content blocks={content} />
        </div>
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  config: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  heroImage: PropTypes.object
}

export default ProjectPage

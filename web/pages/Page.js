import PropTypes from 'prop-types'
import React from 'react'
import client from '../client'
import Content from '../components/Content'
import Layout from '../components/Layout'

const pageQuery = `
*[_type == "page" && metadata.slug.current == $slug][0]{
  title,
  content[] {
    ...,
    projects[]-> {
      title,
      "slug": metadata.slug,
      featureImages
    }
  }
}
`

class Page extends React.Component {
  static async getInitialProps ({query}) {
    const {slug} = query
    return client.fetch(pageQuery, {slug}).then(res => {
      console.log(res)
      return {...res, slug}
    })
  }

  render () {
    return (
      <Layout config={this.props.config}>
        <div className='content-wrapper'>
          <Content blocks={this.props.content} />
        </div>
      </Layout>
    )
  }
}

Page.propTypes = {
  config: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object)
}

export default Page

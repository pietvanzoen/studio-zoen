const client = require('./client')

const pageQuery = `
{
  "pages": *[_type == "page"] {
    _id,
    title,
    _createdAt,
    _updatedAt,
    metadata
  },
  "projects": *[_type == "project"] {
    _id,
    title,
    _createdAt,
    _updatedAt,
    metadata
  }
}
`
const reducePages = (obj, page) => {
  const {_createdAt, _updatedAt, metadata = {}} = page
  const {slug, includeInSitemap, disallowRobot} = metadata
  const path = slug.current === '/' ? '/' : `/${slug.current}`
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/Page'
  }
  return obj
}
const reduceProjects = (obj, page) => {
  const {_createdAt, _updatedAt, metadata = {}} = page
  const {slug, includeInSitemap, disallowRobot} = metadata
  const path = `/projects/${slug.current}`
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/ProjectPage'
  }
  return obj
}

module.exports = {
  images: {
    domains: ['cdn.sanity.io']
  },
  exportPathMap: function () {
    return client.fetch(pageQuery).then(res => {
      const {pages = [], projects = []} = res
      const nextRoutes = {
        // Routes imported from sanity
        ...pages.filter(({metadata}) => metadata.slug.current).reduce(reducePages, {}),
        ...projects.filter(({metadata}) => metadata.slug.current).reduce(reduceProjects, {})
      }
      return nextRoutes
    })
  }
}

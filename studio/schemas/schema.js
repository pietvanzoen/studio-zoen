// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import project from './documents/project'
import siteConfig from './documents/siteConfig'

// Object types
import figure from './objects/figure'
import figureGrid from './objects/figureGrid'
import menuLink from './objects/menuLink'
import pageContent from './objects/pageContent'
import pageMetadata from './objects/pageMetadata'
import projectContent from './objects/projectContent'
import projectGrid from './objects/projectGrid'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    figure,
    figureGrid,
    menuLink,
    page,
    pageContent,
    pageMetadata,
    project,
    projectContent,
    projectGrid,
    siteConfig
  ])
})

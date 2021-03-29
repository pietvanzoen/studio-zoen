const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'fyaw7rw2',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'development',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'fyaw7rw2',
  dataset: 'development',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client

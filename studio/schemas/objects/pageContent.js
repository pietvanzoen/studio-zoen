import blockContentSchema from '../helpers/blockContentSchema'

export default {
  title: 'Page Content',
  name: 'pageContent',
  type: 'array',
  of: [
    blockContentSchema,
    {
      type: 'projectGrid'
    },
    {
      type: 'figureGrid'
    },
    {
      type: 'figure'
    }
  ]
}

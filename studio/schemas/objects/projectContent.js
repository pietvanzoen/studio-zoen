import blockContentSchema from '../helpers/blockContentSchema'

export default {
  title: 'Content',
  name: 'projectContent',
  type: 'array',
  of: [
    blockContentSchema,
    {
      type: 'figureGrid'
    },
    {
      type: 'figure'
    }
  ]
}

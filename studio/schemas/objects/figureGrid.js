export default {
  type: 'object',
  name: 'figureGrid',
  title: 'Grid of images',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'figure'}]
    }
  ],
  preview: {
    select: {
      title: 'text'
    }
  }
}

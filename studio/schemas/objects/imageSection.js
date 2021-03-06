export default {
  type: 'object',
  name: 'imageSection',
  title: 'Images with text',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'figure'}]
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'text'
    }
  }
}

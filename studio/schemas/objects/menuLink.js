
export default {
  title: 'Menu Link',
  name: 'menuLink',
  type: 'object',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'href',
      description: 'Can be an internal or external link',
      type: 'url',
      validation: rule =>
        rule.required().uri({
          allowrelative: true,
          scheme: ['https', 'http', 'mailto', 'tel']
        })
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href'
    }
  }
}

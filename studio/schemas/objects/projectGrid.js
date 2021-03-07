export default {
  title: 'Project Grid',
  name: 'projectGrid',
  type: 'object',
  fields: [
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {type: 'reference', to: [{type: 'project'}]}
      ]

    }
  ]
}

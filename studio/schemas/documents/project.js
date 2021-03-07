export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      type: 'projectContent',
      title: 'Content'
    },
    {
      name: 'featureImages',
      type: 'array',
      title: 'Feature Images',
      description: 'These show in the portfolio index and link to this project',
      of: [
        {type: 'image', options: {hotspot: true}}
      ]
    }

  ],

  preview: {
    select: {
      title: 'title',
      slug: 'metadata.slug',
      media: 'metadata.openGraphImage'
    },
    prepare ({title, slug, media}) {
      return {
        title,
        subtitle: `/portfolio/${slug.current}`,
        media
      }
    }
  }
}

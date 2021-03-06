export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      name: 'content',
      type: 'pageContent',
      title: 'Content'
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
        subtitle: slug.current === '/' ? '/' : `/${slug.current}`,
        media
      }
    }
  }
}

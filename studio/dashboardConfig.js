export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604385175caa140521982433',
                  title: 'Sanity Studio',
                  name: 'studio-zoen-studio',
                  apiId: '0e6b95c8-e7af-4394-a3cf-25da7855dbfe'
                },
                {
                  buildHookId: '604385171d11bb1e57ada4fd',
                  title: 'Landing pages Website',
                  name: 'studio-zoen',
                  apiId: '19fe9acd-9190-4df2-b699-be373799881f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pietvanzoen/studio-zoen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://studio-zoen.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

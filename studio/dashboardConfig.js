export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6203e5ce61d2490096953026',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5fpuevdb',
                  apiId: 'a04c897b-8601-4906-9e1c-da1dd1a96e88'
                },
                {
                  buildHookId: '6203e5ce07bda37ff7bedfe2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hknzyosx',
                  apiId: '92240aa9-7012-4346-bef1-01501e78f2bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RdWilliams88/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hknzyosx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

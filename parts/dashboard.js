export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited pages',
        order: '_updatedAt desc',
        types: ['page']
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited case studies',
        order: '_updatedAt desc',
        types: ['work']
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'notes',
      options: {
        title: 'My notes',
        placeholder: 'What is up?'
      },
      layout: {
        width: 'medium',
        height: 'small'
      }   
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }    
  ]
}
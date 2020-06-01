import { TiPen } from 'react-icons/ti'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: TiPen,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}

import { TiBook } from 'react-icons/ti'

export default {
  name: 'post',
  title: 'Journal',
  type: 'document',
  icon: TiBook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'header',
      title: 'Header image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'published',
      title: 'Published',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'simpleContent'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'simpleContent'
    },
    {
      name: 'outro',
      title: 'Outro',
      type: 'simpleContent'
    }
  ],

  orderings: [
    {
      title: 'Published',
      name: 'publishedDesc',
      by: [
        {field: 'published', direction: 'desc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'header'
    },
    prepare(selection) {
      const {author, body} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}` || '',
        description: ''
      })
    }
  }
}

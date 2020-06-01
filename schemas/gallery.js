import React from 'react'
import { FaRegObjectGroup } from 'react-icons/fa'

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: FaRegObjectGroup,
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'background',
              type: 'array',
              of: [
                {
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true }
                },
                {
                  title: 'Solid Colour',
                  type: 'color',
                  options: {
                    disableAlpha: true
                  }
                }
              ]
            },
            {
              name: 'copy',
              title: 'Copy',
              type: 'blockContent'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'subCaption',
              title: 'Sub-Caption',
              type: 'string'
            },
            {
              name: 'captionPosition',
              title: 'Caption Position',
              type: 'string',
              options: {
                list: ['top']
              }
            },
            {
              name: 'linkInternal',
              title: 'Link (Internal)',
              type: 'reference',
              to: [{type: 'page'}, {type: 'post'}, {type: 'work'}]
            },
            {
              name: 'linkExternal',
              title: 'Link (External)',
              type: 'url'
            }
          ],
          preview: {
            select: {
              background: 'background'
            },
            prepare(selection) {
              const { background } = selection
              if (!background || !background.length) return {}
              const bg = background[0]

              if (bg._type === 'color') {
                return {
                  title: bg && bg.hex || undefined,
                  media: bg && <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: bg.hex}} /> || undefined
                }
              }

              return {
                title: 'Image',
                media: bg
              }
            }
          }
        }
      ]
    },
    {
      name: 'duration',
      title: 'Duration',
      description: 'GIF frame duration in seconds',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'duration',
      slides: 'slides'
    },
    prepare(selection) {
      const { slides = [] } = selection
      return {
        title: `${slides.length} slide${slides.length !== 1 ? 's' : ''}`
      }
    }
  }
}

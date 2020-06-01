import React from 'react'

import { MdTextFields } from 'react-icons/md'
import { FaHighlighter } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'
import BlockStyles from '../styles/blockStyles'
const { H1, H2, H3, Bigger, Uppercase, Highlight } = BlockStyles

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Page Builder',
  name: 'simpleContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Heading 1', value: 'h1', blockEditor: { render: H1 }},
        {title: 'Heading 2', value: 'h2', blockEditor: { render: H2 }},
        {title: 'Heading 3', value: 'h3', blockEditor: { render: H3 }},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Text Bigger', value: 'bigger', blockEditor: { render: Bigger }},
        {title: 'Text Normal', value: 'normal'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Uppercase', value: 'uppercase', blockEditor: {render: Uppercase, icon: MdTextFields}},
          {title: 'Highlight', value: 'highlight', blockEditor: {render: Highlight, icon: FaHighlighter}},
        ],
        annotations: [
          {
            title: 'Internal Link',
            type: 'object',
            name: 'link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'page' },
                  { type: 'post' },
                  { type: 'work' },
                ]
              }
            ]
          },
          {
            title: 'External link',
            name: 'externalLink',
            type: 'object',
            icon: IoIosLink,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule =>
                  Rule.uri({
                    scheme: ['http', 'https', 'tel', 'mailto'],
                    allowRelative: true
                  })
                  .regex(
                    /https:\/\/(www\.|)(aesopagency\.com)\/.*/gi,
                    {
                      name: 'internal url',
                      invert: true
                    }
                  )
                  .warning(
                    `This is not an external link. Consider using an internal link instead.`
                  )
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image'
    },
  ]
}

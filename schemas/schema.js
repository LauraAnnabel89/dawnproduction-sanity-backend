import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import simpleContent from './simpleContent'
import post from './post'
import author from './author'
import work from './work'
import profile from './profile'
import socialLink from './socialLink'
import evnt from './event'
import image from './image'
import imageSimple from './imageSimple'
import page from './page'
import reactComponent from './reactComponent'
import heading from './heading'
import textBlock from './textBlock'
import row from './row'
import column from './column'
import separator from './separator'
import map from './map'
import client from './client'
import clientGrid from './clientGrid'
import gallery from './gallery'
import imageGrid from './imageGrid'
import video from './video'
import chart from './chart'
import menu from './menu'
import blockLink from './blockLink'
import videoLink from './videoLink'
import imageLink from './imageLink'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    post,
    author,
    work,
    profile,
    // evnt,
    blockContent,
    simpleContent,
    socialLink,
    image,
    imageSimple,
    reactComponent,
    heading,
    textBlock,
    row,
    column,
    separator,
    map,
    // client,
    // clientGrid,
    // gallery,
    imageGrid,
    video,
    blockLink,
    videoLink,
    imageLink,
    // chart,
    menu
  ])
})

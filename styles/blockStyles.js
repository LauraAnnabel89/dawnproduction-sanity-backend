import React from 'react'

const H1 = props => (
  <span style={{fontFamily: 'Montserrat', lineHeight: 1.2, fontSize: '2.5rem'}}>{props.children}</span>
)

const H2 = props => (
  <span style={{fontFamily: 'Montserrat', lineHeight: 1.05, fontSize: '2rem'}}>{props.children}</span>
)

const H3 = props => (
  <span style={{fontFamily: 'Montserrat', fontSize: '1.5rem'}}>{props.children}</span>
)

const Bigger = props => (
  <span style={{fontFamily: 'Montserrat', fontSize: '1.5rem'}}>{props.children}</span>
)

const Clients = props => (
  <span style={{fontFamily: 'Montserrat', fontSize: '3rem'}}>{props.children}</span>
)

const Highlight = props => (
  <span style={{backgroundColor: '#ffff00'}}>{props.children}</span>
)

const Uppercase = props => (
  <span style={{textTransform: 'uppercase'}}>{props.children}</span>
)

export default {
  H1,
  H2,
  H3,
  Bigger,
  Clients,
  Highlight,
  Uppercase,
}
import React from 'react'
import { ClipLoader } from 'react-spinners'

export default class Spinner extends React.Component {

  render () {
    return (
      <ClipLoader sizeUnit={"px"} size={150} color={'#ffffff'} />
    )
  }

}

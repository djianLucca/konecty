import React from 'react'
import { Card } from './../styles/styles'

export default (props) => {
  return (
    <Card>
      <img src={props.img} alt="img"></img>
      {props.children}
    </Card>
  )
}

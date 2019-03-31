import React from 'react'
import Button from './Button'

const Card = (props) => (
  <div className="wrapper--card" id="price">
    <div className="card--header">{props.children}</div>
    <p className="card--price">${props.price}</p>
    <p className="card--copy">{props.description}</p>
    <Button>Select</Button>
  </div>
)

export default Card
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => (
  <div>
    <button type={props.type}>{props.children}</button>
  </div>
)

export default Button;
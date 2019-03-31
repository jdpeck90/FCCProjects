import React from 'react'
import Link from './Link'
import Copy from './Copy'

const Footer = (props) => (
  <div id="footer" className="wrapper--footer">
  <div className="wrapper--footer-left">
  <Link size="sm" color="grey" location="#" className="nav-link">Privacy</Link>
  <Link size="sm" color="grey" location="#contact" className="nav-link">Contact</Link>
  <Link size="sm" color="grey" location="#" className="nav-link">Terms</Link>
  </div>
  <div className="wrapper--footer-right">
    <div id="contact" className="wrapper--contact">
    <Copy size="sm" color="grey">Copyright 2019</Copy>
    <Copy size="sm" color="grey">Great Shoes</Copy>
    </div>
    </div>
  </div>
)

export default Footer
import React from 'react';

const Link = props => (
  <div className='wrapper--link'>
    <a
      href={`#${props.location}`}
      className={`copy--link copy--${props.size} copy--${props.color} nav-link`}
    >
      {props.children}
    </a>
  </div>
);

export default Link;

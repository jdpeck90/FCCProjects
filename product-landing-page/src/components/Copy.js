import React from 'react';

const Copy = props => (
  <div className='wrapper--copy'>
    <h1 className={`copy--title copy--${props.size} copy--${props.color}`}>
      {props.children}
    </h1>
  </div>
);

export default Copy;

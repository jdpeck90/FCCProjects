import React from 'react';

const Title = props => (
  <div className='wrapper--title'>
    <h1
      id='title'
      className={`copy--title copy--${props.size} copy--${props.color}`}
    >
      {props.children}
    </h1>
  </div>
);

export default Title;

import React from 'react';

function Row(props) {
  return <div className='row'>{props.children.map(e => e)}</div>;
}

export default Row;

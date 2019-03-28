import React from 'react';
import Label from './Label';
import Input from './Input';
function Row(props) {
  return <div className='row'>{props.children.map(e => e)}</div>;
}

export default Row;

import React from 'react';

function Label(props) {
  return (
    <div className='labels'>
      <label
        id={`label-${props.name}`}
        value={`${props.name}`}
        name={`${props.name}`}
      >
        {props.children}
      </label>
    </div>
  );
}

export default Label;

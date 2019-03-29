import React from 'react';

function Label(props) {
  console.log('from label', props);
  return (
    <div className='labels'>
      <label
        id={`${props.id}-label`}
        value={`${props.name}`}
        name={`${props.name}`}
      >
        {props.children}
      </label>
    </div>
  );
}

export default Label;

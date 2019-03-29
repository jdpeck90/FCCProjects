import React from 'react';

function Input(props) {
  return (
    <div className='input'>
      <input
        className='input-info'
        name={`${props.name}`}
        type={`${props.type}`}
        id={`${props.id}`}
        placeholder={`${props.placeholder}`}
        pattern={`${props.pattern}`}
        min={`${props.min}`}
        max={`${props.max}`}
        required
      />
    </div>
  );
}

export default Input;

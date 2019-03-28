import React from 'react';

function Input(props) {
  return (
    <div className='input'>
      <input name={`${props.name}`} id={`input--${props.name}`} />
    </div>
  );
}

export default Input;

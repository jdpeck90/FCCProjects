import React from 'react';

function Button(props) {
  return (
    <div className='button-wrapper'>
      <button className={props.class} type={props.type} id={props.type}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;

import React from 'react';

function Title(props) {
  return (
    <div className='copy-wrapper'>
      <span className={props.class}>{props.children}</span>
    </div>
  );
}

export default Title;

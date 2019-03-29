import React from 'react';

function Container(props) {
  return (
    <form className='container' id='survey-form'>
      {props.children}{' '}
    </form>
  );
}

export default Container;

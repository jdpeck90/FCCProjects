import React from 'react';

function TextareaInput(props) {
  return (
    <div className='input-textare'>
      <textarea
        id='comments'
        className='input-field'
        name='comment'
        placeholder='Enter your comment here...'
      />
    </div>
  );
}

export default TextareaInput;

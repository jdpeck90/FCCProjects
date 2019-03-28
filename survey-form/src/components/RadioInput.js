import React from 'react';

function RadioInput(props) {
  return (
    <div className='input-radion'>
      <ul className='list'>
        {props.value.map((e, i) => {
          return (
            <li className='list-item'>
              <label>
                {e}
                <input
                  name='radio-buttons'
                  value={i}
                  type='radio'
                  className='userRatings'
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RadioInput;

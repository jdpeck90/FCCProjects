import React from 'react';

function RadioInput(props) {
  return (
    <div className='input-radion'>
      <ul className='list'>
        {props.value.map((e, i) => {
          return (
            <li className='list-item'>
              <label className='list-label'>
                <p className='list-item-radio__label'>{e}</p>
                <input
                  name='radio-buttons'
                  value={i}
                  type='radio'
                  className='list-item-radio__button'
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

import React from 'react';

function RadioInput(props) {
  return (
    <div className='input-checkbox'>
      <ul className='list'>
        {props.value.map((e, i) => {
          return (
            <li className='checkbox'>
              <label className='list-label'>
                <p className='list-item-checkbox__label'>{e}</p>
                <input
                  name={`${props.name}`}
                  value={i}
                  type='checkbox'
                  className='list-item-checkbox__button'
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

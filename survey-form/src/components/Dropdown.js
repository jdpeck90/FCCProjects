import React from 'react';

function Dropdown(props) {
  return (
    <div className='dropdown'>
      <select id='dropdown' className='dropdown-select'>
        {props.value.map((e, key) => {
          return (
            <option className='dropdown-option' key={key} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;

import React from 'react';
import PropTypes from 'prop-types';

function Copy(props) {
  return (
    <div className='copy-wrapper'>
      <p id='description' className={props.class}>
        {props.children}
      </p>
    </div>
  );
}

Copy.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Copy;

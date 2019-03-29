import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <div className='title-wrapper'>
      <h1 className={`title-copy copy--${props.size}`} id='title'>
        {props.children}
      </h1>
    </div>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};
export default Title;

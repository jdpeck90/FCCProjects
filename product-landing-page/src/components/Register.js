import React, { Fragment } from 'react';

const Register = props => (
  <Fragment>
    <p id='description' className='copy--register'>
      {props.children}
    </p>
    <a href='#best-shoes' />
    <form
      id='form'
      action='https://www.freecodecamp.com/email-submit'
      _lpchecked='1'
      className='wrapper--form'
    >
      <input
        name='email'
        id='email'
        type='email'
        placeholder='Enter your email address'
        required
        className='input--email'
      />
      <input
        id='submit'
        type='submit'
        value='Get Started'
        className='input--submit'
      />
    </form>
  </Fragment>
);

export default Register;

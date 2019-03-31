import React from 'react';
import shoelogo from '../shoelogo.png';
import Title from './Title';
import Link from './Link';

const Header = props => (
  <div id='header' className='wrapper--header'>
    <div className='wrapper--left'>
      <img
        id='header-img'
        src='https://www.logoground.com/uploads/201687452016-09-082842224jpg.jpg'
      />
      <Title size='lg' color='black'>
        Great Shoes!
      </Title>
    </div>
    <div className='wrapper--right'>
      <nav id='nav-bar' className='wrapper--links'>
        <Link size='sm' color='black' location='features' className='nav-link'>
          Features
        </Link>
        <Link
          size='sm'
          color='black'
          location='best-shoes'
          className='nav-link'
        >
          Subscribe
        </Link>
        <Link size='sm' color='black' location='price' className='nav-link'>
          Pricing
        </Link>
        <Link size='sm' color='black' location='contact' className='nav-link'>
          Contact
        </Link>
      </nav>
    </div>
  </div>
);

export default Header;

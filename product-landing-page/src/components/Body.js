import React from 'react';
import Register from './Register';
import Promo from './Promo';
import Card from './Card';
import Video from './Video';
import Features from './Features';

const Body = props => (
  <div className='wrapper--body'>
    <Register>Sign up Today!</Register>
    <Video />
    <Features />
    <div className='wrapper--cards'>
      <Card price='60' description='Lorem duis do enim nisi cupidatat.'>
        Running Shoe
      </Card>
      <Card price='100' description='Lorem duis do enim nisi cupidatat.'>
        Hiking Shoe
      </Card>
      <Card price='80' description='Lorem duis do enim nisi cupidatat.'>
        Skating Shoe
      </Card>
    </div>
  </div>
);

export default Body;

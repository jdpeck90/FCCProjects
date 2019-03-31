import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Copy from './Copy';
const Features = props => (
  <div id='features'>
    <span className='wrapper--feature'>
      <span className='wrapper--icon'>
        <FontAwesomeIcon icon='shoe-prints' size='3x' />
      </span>
      <span className='wrapper--feature__text'>
        <h2>Great Shoes</h2>
        <Copy size='md' color='blue'>
          These shoes are so good that you will never want to take them off!
        </Copy>
      </span>
    </span>
    <span className='wrapper--feature'>
      <span className='wrapper--icon'>
        <FontAwesomeIcon icon='hiking' size='3x' />
      </span>
      <span className='wrapper--feature__text'>
        <h2 className='feature-title'>Multipurpose</h2>
        <Copy size='md' color='blue'>
          With design in mind these shoes can be used for hiking, basketball, or
          sioky taking a stroll around town
        </Copy>
      </span>
    </span>
    <span className='wrapper--feature'>
      <span className='wrapper--icon'>
        <FontAwesomeIcon icon='male' size='3x' />
        <FontAwesomeIcon icon='female' size='3x' />
        <FontAwesomeIcon icon='baby' size='3x' />
      </span>
      <span className='wrapper--feature__text'>
        <h2 className='feature-title'>Multipurpose</h2>
        <Copy size='md' color='blue'>
          With design in mind these shoes can be used for hiking, basketball, or
          sioky taking a stroll around town
        </Copy>
      </span>
    </span>
  </div>
);

export default Features;

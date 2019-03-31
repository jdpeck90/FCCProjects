import React from 'react';

const Video = props => (
  <div id='best-shoes' className='wrapper--video'>
    <iframe
      id='video'
      width='560'
      height='315'
      src='https://www.youtube.com/embed/F7AUQWFXXv0'
      frameborder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    />
    <a href='#features' />
  </div>
);

export default Video;

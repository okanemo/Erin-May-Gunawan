import React from 'react';
import '../css/hero.css';
import Video from '../resources/video.mp4';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-bg'>
        <video
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
          className='videoBg'
        />
      </div>
      <div className='hero-content'>
        <h1>
          <span className='green'>Virtual Banking</span> <br />
          has never been easier
        </h1>
        <h2>
          Transfer from
          <br />
          various banks to various banks
          <br />
          for free
        </h2>

        <h3 className='button'>Sign Up</h3>
      </div>
    </div>
  );
}

export default Hero;

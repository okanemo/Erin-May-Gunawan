import React, { useState } from 'react';
import '../css/hero.css';
import Video from '../resources/video.mp4';
import SignUp from './SignUp';

function Hero() {
  const [signUp, setSignUp] = useState(false);

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
        <div className={'hero-content-text ' + (signUp ? 'left' : '')}>
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

          <h3
            className={signUp ? 'none' : 'button'}
            onClick={() => setSignUp(true)}
          >
            Sign Up
          </h3>
        </div>
        {signUp && <SignUp setSignUp={setSignUp} />}
      </div>
    </div>
  );
}

export default Hero;

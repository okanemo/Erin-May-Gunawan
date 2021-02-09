import React from 'react';
import '../css/method.css';
import bank from '../resources/bank.png';
import Video from '../resources/world.mp4';

function Method() {
  return (
    <section className='method' id='method'>
      <div className='method-bg'>
        <video
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
          className='videoBg'
        />
      </div>
      <div className='method-content'>
        <h1>
          The secret behind
          <br /> Okanome's transactions
        </h1>
        <img src={bank} alt='how it works' />
        <div className='bg-green'>
          <h1>
            As easy as <span className='green'>1, 2, 3</span>
          </h1>
          <h2>
            Okanome works as a transaction bridge between banks. <br />
            You only need to transfer to an Okanome account, and let us handle
            all the work.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Method;

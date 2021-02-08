import React from 'react';
import '../css/method.css';
import bank from '../resources/bank.png';

function Method() {
  return (
    <div className='method'>
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
    </div>
  );
}

export default Method;

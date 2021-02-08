import React from 'react';
import '../css/about.css';
import { ReactComponent as Money } from '../resources/credit_card.svg';
import { ReactComponent as Shield } from '../resources/shield.svg';
import { ReactComponent as World } from '../resources/world.svg';
import { ReactComponent as Coin } from '../resources/coin.svg';

function About() {
  return (
    <div className='about'>
      <div className='about-text'>
        <div className='about-content'>
          <h1>A cheaper, faster way to send money</h1>
          <h2>
            <span className='green bold'>Okanemo</span> is an app that
            facilitates money transfer between banks for free!
          </h2>
        </div>
        <Money />
      </div>
      <div className='perks'>
        <div className='perk'>
          <Shield />
          <p>
            Licensed by <br />{' '}
            <span className='green bold'>Bank Indonesia</span>
          </p>
        </div>
        <div className='perk'>
          <World />
          <p>
            Used by <br />
            <span className='green bold'>millions of people</span>
            <br /> in Indonesia
          </p>
        </div>
        <div className='perk'>
          <Coin />
          <p>
            More than <br />
            <span className='green bold'>Rp 6 million</span>
            <br /> sent every month
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

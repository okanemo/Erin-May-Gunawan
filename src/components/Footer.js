import React from 'react';
import '../css/footer.css';
import { ReactComponent as Facebook } from '../resources/facebook.svg';
import { ReactComponent as LinkedIn } from '../resources/linkedin.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='contact-information'>
        <div className='contact-info'>
          <h1>Phone</h1>
          <p>(+62) 812 800 47477</p>
        </div>
        <div className='contact-info'>
          <h1>Email</h1>
          <p>cs@Okanemo.com</p>
        </div>
        <div className='contact-info'>
          <h1>Location</h1>
          <p>
            Cilandak, Kota Jakarta Selatan, THE CEO Building, 12th Floor No.
            18B, Jalan Terminal Bus Simatupang, RT.11/RW.4, West Cilandak,
            Cilandak, South Jakarta City, Jakarta 12430
          </p>
        </div>
      </div>
      <div>
        <a
          href='https://web.facebook.com/okanemodotcom/?_rdc=1&_rdr'
          target='_blank'
          rel='noreferrer'
        >
          <Facebook />
        </a>
        <a
          href='https://www.linkedin.com/company/okanemo/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedIn />
        </a>
      </div>
      <p>© 2019 OKANEMO. All rights reserved</p>
    </footer>
  );
}

export default Footer;

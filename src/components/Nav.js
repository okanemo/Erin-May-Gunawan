import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/nav.css';

function Nav() {
  const [menu, setMenu] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', useEffect);
    };
  }, []);

  return (
    <div className={'nav' + (menu ? '-hide' : '') + (show ? ' bg-black' : '')}>
      <h1>okanemo</h1>
      <ul className={'nav-items' + (menu ? '-open' : '')}>
        <FaTimes className='closeButton' onClick={() => setMenu(false)} />
        <div className='nav-items-wrapper'>
          <li>Help</li>
          <li>Careers</li>
          <li>Fees</li>
          {/* <li>Login</li> */}
        </div>
      </ul>
      <FaBars
        className={'burger' + (menu ? '-close' : '')}
        onClick={() => setMenu(true)}
      />
    </div>
  );
}

export default Nav;

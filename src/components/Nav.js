import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/nav.css';

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div className={'nav' + (menu ? '-hide' : '')}>
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

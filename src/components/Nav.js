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
    <nav className={'nav' + (menu ? '-hide' : '') + (show ? ' bg-black' : '')}>
      <a href='/'>
        <h1>okanemo</h1>
      </a>
      <ul className={'nav-items' + (menu ? '-open' : '')}>
        <FaTimes className='closeButton' onClick={() => setMenu(false)} />
        <div className='nav-items-wrapper'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#method'>Method</a>
          </li>
          <li>
            <a href='#reviews'>Reviews</a>
          </li>
        </div>
      </ul>
      <FaBars
        className={'burger' + (menu ? '-close' : '')}
        onClick={() => setMenu(true)}
      />
    </nav>
  );
}

export default Nav;

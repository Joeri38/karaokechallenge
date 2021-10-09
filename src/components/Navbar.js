import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      <nav className='navbar'>

        <ul className={ click ? 'nav-menu active' : 'nav-menu' }>

          <li className='nav-item'>
            <Link to='/'>
              Karaoke Challenge
              <i id='microphone' className="fas fa-microphone-alt"/>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          {/* interactive open and close
          <li className='nav-item'>
            <div className='menu-icon' onClick={handleClick}>
              <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
          </li> */}

          <li className='nav-item'>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            <img id="react-logo" src="/logo192.png" height="50px"/>
          </li>
        </ul>

      </nav>
    </React.Fragment>
  );

}

export default Navbar;

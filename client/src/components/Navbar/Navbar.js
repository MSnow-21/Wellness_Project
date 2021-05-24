import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return(
    <>
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        WellRounded Fitness
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>
      <ul className={click ? 'nav-menu active': 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/nutrition' className='nav-links' onClick={closeMobileMenu}>
            Nutrition
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/fitness' className='nav-links' onClick={closeMobileMenu}>
            Fitness
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/stats' className='nav-links' onClick={closeMobileMenu}>
            Stats
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/journal' className='nav-links' onClick={closeMobileMenu}>
            Journal
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}


export default Navbar;

    
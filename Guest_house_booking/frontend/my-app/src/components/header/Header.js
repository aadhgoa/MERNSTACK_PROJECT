// Header.js

import React, { useEffect, useRef } from 'react';
import { Container, Row,  } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/Guesthouselogo.jpeg';
import './Header.css'; // Corrected import path


const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/rooms',
    display: 'Room',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    stickyHeaderFunc();
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []); //
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav-Wrap d-flex align-items-center justify-content-between'>
            {/* =============== logo ================ */}
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            {/* =============== logo end ================ */}
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      activeClassName='active_link' // Use activeClassName for active styles
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                <button className='btnlog'>
                  <Link to='/login'>Login</Link>
                </button>
                <button className='btnReg'>
                  <Link to='/register'>Register</Link>
                </button>
              </div>
              <span className='mobile_menu'>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

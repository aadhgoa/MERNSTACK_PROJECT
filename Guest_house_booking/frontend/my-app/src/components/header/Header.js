import React, { useContext, useEffect, useRef } from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Guesthouselogo.jpeg';
import './Header.css';
import { AuthContext } from './../../context/AuthContext.js';

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
  {
    path:'/MyAccount',
    display: 'MyAccount'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyHeaderFunc = ()=>{

    window.addEventListener("scroll", ()=>{
      if(
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ){
        headerRef.current.classList.add("sticky_header");
      }else{
        headerRef.current.classList.remove("sticky_header");
      }
    });
  }

  useEffect(()=>{
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle("show_menu")

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav-Wrap d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} activeClassName='active_link'>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                {user ? (
                  <div>
                    <h5 className='mb-0'>{user.username}</h5>
                    <button className='btn btn-dark' onClick={logout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className='btnlog'>
                      <Link to='/login'>Login</Link>
                    </button>
                    <button className='btnReg'>
                      <Link to='/register'>Register</Link>
                    </button>
                  </div>
                )}
              </div>
              <span className='mobile_menu' onClick={toggleMenu}>
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

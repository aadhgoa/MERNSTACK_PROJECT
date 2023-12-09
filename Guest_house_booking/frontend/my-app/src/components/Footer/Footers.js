import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/Guesthouselogo.jpeg'
import 'remixicon/fonts/remixicon.css'

const quick_links = [
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

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footers = () => {
  const year = new Date().getFullYear()
   return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt=''/>
              <p>The guest house footer information</p>
              <div className='social_links d-flex align-items-center
              gap-4'>
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='foot_link-title'>discover</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='foot_link-title'>Quick Links</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Contact</h5>
              <ListGroup className='footer_quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className='mb-0'>Majorda, goa</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>baswarajchowdhari92@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className='mb-0'>7620983451</p>
                </ListGroupItem>
              </ListGroup>
              <Col lg='15' className='copyright1'>
                <p className='copyright'>Copyright {year}, design and develop by 
                Baswaraj chowdhari.All rights reserved</p>
              </Col>
          </Col>
        </Row>
      </Container>
    </footer>

    
  )
}

export default Footers
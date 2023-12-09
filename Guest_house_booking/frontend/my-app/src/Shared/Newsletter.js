import React from 'react'
import '../Shared/Newsletter.css'
import  {Container, Row, Col} from 'reactstrap'
import infoman from '../images/infoman.jpg'

const Newsletter = () => {
  return (
    <section className='newsletter'> 
      <Container>
        <Row>
          <Col lg='6'>
            <div className='newsletter_content'>
              <h2>Subcribe now to get usefull traveling information</h2>
              <div className='newsletter_input'>
              <input type='email' placeholder='Enter your Emails'></input>
              <button className='btn newsletter_btn'>Subcribe</button>
              </div>
              <p>
                our info is derived based 20 years of experience
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className='newsletter_img'>
              <img src={infoman} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
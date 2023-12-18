import React from 'react'
import {Container, Row, Col, Button} from "reactstrap"
import {Link} from"react-router-dom"
import '.././styles/Thankyou.css'

const Thankyou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
            <div  className='thank-you'>
            <span><i class="ri-checkbox-circle-fill"></i></span>
            <h1 className='mb-3 fw-semibold'>Thank You</h1>
            <h3 className='mb-4'>your Room is booked</h3>
            <Button className='btn primary_btn w-25'><Link to='/home'>Back to Home</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Thankyou
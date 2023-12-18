import React from 'react'
import './CommonSection.css'
import { Container, Row, Col} from 'reactstrap'

const CommonSection = ({Title}) => {
  return (
   <section className='common-section'>
    <Container>
      <Row>
        <Col lg='12'> 
        <h1>{Title}</h1>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default CommonSection
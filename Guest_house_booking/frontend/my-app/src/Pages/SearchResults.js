import React, { useState } from 'react'
import CommonSection from '../Shared/CommonSection'
import { Container , Row, Col} from 'reactstrap'
import { useLocation } from 'react-router-dom'
import RoomCard from '../Shared/RoomCard'
import Newsletter from '../Shared/Newsletter'


const SearchResults = () => {

  const location = useLocation()

  const [data] = useState(location.state)
  return (
    <>
    <CommonSection Title={"Searched result"}/>
    <section>
      <Container>
        <Row>
        {
          data.length === 0 ? (
          <h4 className='text-center'>No Room found</h4>
          ) : (
             data?.map(room=>(
          <Col lg='3' className="mb-4" key={room._id}>
          <RoomCard room={room}/>

          </Col>
             )))
        }
        </Row>

      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default SearchResults
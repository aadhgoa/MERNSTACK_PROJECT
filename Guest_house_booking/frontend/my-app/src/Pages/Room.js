import React from 'react'
import CommonSection from '../Shared/CommonSection'
import "../styles/Room.css";
import RoomData from '../Assets/RoomData'
import RoomCard from './../Shared/RoomCard'
import Search from './../Shared/Search'
import Newsletter from './../Shared/Newsletter'
import { Container, Row, Col} from 'reactstrap';
import {useState, useEffect} from 'react'

const Room = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(()=>{
    const pages = Math.ceil(5 / 8); //later we will use backend data
    setPageCount(pages);
  }, [page]);

  return (
   <>
   <CommonSection Title={"All Rooms"}/>
   <section>
    <Container>
      <Row>
        <Search></Search>
      </Row>
    </Container>
   </section>
   <section className='pt-0'>
    <Container>
      <Row>
        {
          RoomData?.map(room=> (<Col lg='3' key={room.id} >
            <RoomCard room={room}></RoomCard>
          </Col>
          ))}
        <Col lg='12'>
        <div className='pagination d-flex align-items-center
        justify-content-center mt-4 gap-3'>
          {[...Array(pageCount).keys()].map(number=>(
            <span key={number} onClick={()=> setPage(number)}
            className={page === number ? "active_page": ""}
            >
              {number+1}
            </span>
          ))}
          </div></Col>
      </Row>
    </Container>
   </section>
   <Newsletter/>
   </>
  )
}

export default Room
import React from 'react'
import CommonSection from '../Shared/CommonSection'
import "../styles/Room.css";
import RoomData from '../Assets/RoomData'
import RoomCard from './../Shared/RoomCard'
import Search from './../Shared/Search'
import Newsletter from './../Shared/Newsletter'
import { Container, Row, Col} from 'reactstrap';
import {useState, useEffect} from 'react'
import useFetch from '../hooks/usefetch';
import { BASE_URL } from '../utils/config';



const Room = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const {data:rooms,loading, error }=useFetch(`${BASE_URL}/rooms?page=${page}`)
  const {data:RoomCount}=useFetch(`${BASE_URL}/rooms/search/getRoomCount`)


  useEffect(()=>{
    const pages = Math.ceil(RoomCount / 8); //later we will use backend data
    setPageCount(pages);
    window.scrollTo(0,0)
  }, [page, RoomCount, rooms]);

  

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
      {
      !loading && <h4 className='text-center pt-5'>Loading....</h4>
      }
      {
        error && <h4 className='text-center pt-5'>{error}</h4>
      }
      {
        !loading && 
        !error &&
        <Row>
        {
          rooms?.map(room=> (<Col lg='3' md="6" sm="6" key={room._id} >
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
      }
    </Container>
   </section>
   <Newsletter/>
   </>
  )
}

export default Room
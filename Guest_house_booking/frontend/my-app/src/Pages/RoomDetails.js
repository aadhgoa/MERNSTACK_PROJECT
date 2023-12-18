import React, {useRef, useState} from 'react';
import { Container, Row, Col,Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import RoomData from '../Assets/RoomData';
import calculateAvgRating from '../utils/avgRating';
import '../styles/Room-details.css'
import avatar from '../images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newsletter from '../Shared/Newsletter';

const RoomDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [roomRating, setRoomRating] = useState(null)

  // Find the room with the specified id
  const room = RoomData.find((room) => room.id === Number(id));

  // If the room doesn't exist, show an error message
  if (!room) {
    return <div>Room not found</div>;
  }

  // Destructure properties from the room object
  const { Rooms, images, costPerDay, description, reviews, Maxpeople } = room;

   const {totalRating,avgRating} = calculateAvgRating(reviews)

   //format date
   const options = {day:'numeric', month:'long', year:'numeric'}

   //submit reques to the server
   const submitHandler = e=>{
    e.preventDefault()
    const reveiwtext = reviewMsgRef.current.value

    alert(`${reveiwtext}, ${roomRating}`);
    //later will callour api
   }

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='room_content'>
              {/* Check if images is an array and has at least one item */}
              {Array.isArray(images) && images.length > 0 ? (
                images.map((image, index) => (
                  <img key={index} src={image} alt={`Room ${Rooms} ${index + 1}`} />
                ))
              ) : (
                <img src={images} alt={`Room ${Rooms}`} />
              )}
              <div className='room_info'>
                <h2>{Rooms}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className='room_rating d-flex align-items-center gap-1'>
                    <i class="ri-star-s-fill"></i>
                    {avgRating === 0 ? null: avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) :  (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                </div>
                <div className='Room-extra-details'>
                  <span><i class="ri-money-rupee-circle-fill"></i>Rs.{costPerDay} Per Person</span>
                  <span><i class="ri-group-line"></i>{Maxpeople}</span>
                </div>
                <h5>Description</h5>
                <p>{description}</p>
              </div>
              <div className='room_review mt-4'>
                <h4>Reviews ({reviews?.length}) reviews</h4>
                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                  <span onClick={()=>setRoomRating(1)}>
                    1 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRoomRating(2)}>
                    2 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRoomRating(3)}>
                    3 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRoomRating(4)}>
                   4 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=>setRoomRating(5)}>
                   5 <i class="ri-star-s-fill"></i>
                  </span>
                  </div>
                  <div className='review_input'>
                    <input type='text' ref={reviewMsgRef} placeholder='Share your thoughts' required></input>
                    <button className='btn primary_btn text-black'
                    type='submit'>Submit</button>
                  </div>
                </Form>
                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(review=>(
                      <div className='review_item'>
                        <img src={avatar} alt=''/>
                        <div className='w-100'>
                          <div className='d-flex align-items-center
                          justify-content-between'>
                            <div>
                              <h5>Posted</h5>
                              <p>{new Date('11-12-2023').toLocaleDateString(
                                "en-US", options
                              )}
                              </p>
                            </div>
                            <span  className='d-flex align-items-center'>
                              5<i class="ri-star-s-fill"></i>
                              </span>

                          </div>
                          <h6>Amazing Room</h6>
                        </div>
                      </div>
                    ))
                  }

                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <Booking room={room} avgRating={avgRating}/>

          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  );
};

export default RoomDetails;

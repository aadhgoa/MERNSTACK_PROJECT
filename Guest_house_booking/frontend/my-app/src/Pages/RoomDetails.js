import React, {useContext, useEffect, useRef, useState} from 'react';
import { Container, Row, Col,Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import RoomData from '../Assets/RoomData';
import calculateAvgRating from '../utils/avgRating';
import '../styles/Room-details.css'
import avatar from '../images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newsletter from '../Shared/Newsletter';
import useFetch from '../hooks/usefetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';

const RoomDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("")
  const [roomRating, setRoomRating] = useState(null);
  const {user} = useContext(AuthContext)

  // Find the room with the specified id
const {data:room, loading, error} = useFetch(`${BASE_URL}/rooms/${id}`)

  // Destructure properties from the room object
  const { Rooms, images, costPerDay, description, reviews, Maxpeople } = room;

   const {totalRating,avgRating} = calculateAvgRating(reviews)

   //format date
   const options = {day:'numeric', month:'long', year:'numeric'}

   //submit reques to the server
   const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  
    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in');
      }
  
      const reviewObj = {
        username: user.username,
        reviewText,
        rating: roomRating,
      };
  
      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });
  
      // Check HTTP status code
  
      const result = await res.json();
      alert(result.message);
      console.log("submitted")
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');

    }
  };
  

   useEffect(()=>{
    window.scrollTo(0, 0) 
   }, [room])

  return (
    <>
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading......
          </h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
       {
        !loading && !error && 
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
                    <span>({reviews?.length})</span>
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
              <h4>Reviews ({reviews?.length})</h4>
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
                            <h5>{review.username}</h5>
                            <p>{new Date(review.createdAt).toLocaleDateString(
                              "en-US", options
                            )}
                            </p>
                          </div>
                          <span  className='d-flex align-items-center'>
                            {review.rating}
                            <i class="ri-star-s-fill"></i>
                            </span>

                        </div>
                        <h6>{review.reviewText}</h6>
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
       }
      </Container>
    </section>
    <Newsletter/>
    </>
  );
};

export default RoomDetails;
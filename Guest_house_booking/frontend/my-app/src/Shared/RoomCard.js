import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../Shared/RoomCard.css'
import calculateAvgRating from '../utils/avgRating'


const RoomCard = ({room}) => {

  const {_id,Rooms,images,costPerDay,featured,reviews} = room;
  const {totalRating,avgRating} = calculateAvgRating(reviews)

  return (
    <div className='room_card'>
      <Card>
        <div  className='room_img'>
          <img src={images} alt='room-img'/>
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
        <div  className='card_top d-flex align-items-center 
        justify-content-between'>
          <span className='room_rating d-flex align-items-center gap-1'>
          <i class="ri-star-s-fill"></i>{avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            'Not rated'
            ) : (
            <span>({reviews?.length})</span>
          )}
          
          </span>
        </div>
        <h5 className='room_title'><Link to={`/rooms/${_id}`}>{Rooms}</Link></h5>
        <div className='card_bottom a b d-flex align-items-center 
        justify-content-between mt-3'>
          <h5>Rs.{costPerDay}<span>/Room</span></h5>
          <button className='btn booking_btn'>
            <Link className='Link' to={`/rooms/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
      </Card>
      

    </div>
  )
}

export default RoomCard
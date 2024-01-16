import React from 'react'
import RoomCard from '../../Shared/RoomCard'
import {Col} from 'reactstrap'
import useFetch from '../../hooks/usefetch'
import { BASE_URL } from '../../utils/config'




const FeaturedRoomList = () => {


  const {data: featuredRooms, loading, error} = useFetch(
    `${BASE_URL}/rooms/search/getFeaturedRooms`
  );

  console.log(featuredRooms)
  return (
    <>
    {
      loading && <h4>Loading....</h4>
    }
    {
      error && <h4>{error}</h4>
    }
   

    {!loading && 
    !error  && 
    featuredRooms?.map(room =>(
      <Col lg="3" md='4' sm='6' className="mb-4" key={room._id}>
        <RoomCard room={room}/>
      </Col>
    ))}
    </>
  )
}

export default FeaturedRoomList
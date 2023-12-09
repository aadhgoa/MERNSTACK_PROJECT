import React from 'react'
import RoomCard from '../../Shared/RoomCard'
import {Col} from 'reactstrap'
import RoomData from '../../Assets/RoomData'




const FeaturedRoomList = () => {
  return (
    <>
    {RoomData?.map(rum =>(
      <Col lg="3" className="mb-4" key={rum.id}>
        <RoomCard room={rum}/>
      </Col>
    ))}
    </>
  )
}

export default FeaturedRoomList
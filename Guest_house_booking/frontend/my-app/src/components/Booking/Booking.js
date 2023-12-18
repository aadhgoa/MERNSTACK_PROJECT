import React from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = ({room , avgRating}) => {

  const {costPerDay, reviews} = room
  const navigate = useNavigate()
  const[credentials, setCredentials] = useState({
    userId:'01', //later with dynamic
    userEmail:'example2gmail.com',
    fullName:"Leander p",
    phone:'',
    guesSzie:1,
    bookAt:''


  })

  const handleChange = e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))

  }

  const ServiceFee = 50
  const totalAmount = Number(costPerDay) * Number(credentials.guesSzie) + Number(ServiceFee)

  //send data to the server
  const handleClick = e=>{
    e.preventDefault();
    navigate("/thank-you")
  }
  return (
    <>
    <div className='booking'>
      <div className='booking_top d-flex align-items-center
      justify-content-between'>
        <h3>Rs.{costPerDay} <span>/Person</span></h3>
        <span className='room_rating d-flex align-items-center'>
                    <i class="ri-star-s-fill"></i>
                    {avgRating === 0 ? null: avgRating} ({reviews?.length})
                   
                  </span>

      </div>
      <div className='booking_form'>
      <Form className='booking_info-form' onSubmit={handleClick}>
        <FormGroup>
          <input type='text' placeholder='full Name' id='fullName'
          required onChange={handleChange}></input>
        </FormGroup>
        <FormGroup>
          <input type='number' placeholder='Phone' id='Phone'
          required onChange={handleChange}></input>
        </FormGroup>
        <FormGroup className='d-flex align-items-center gap-3'>
          <input 
          type='Date' 
          placeholder='' 
          id='bookAt'
          required 
          onChange={handleChange}/>
          <input 
          type='number' 
          placeholder='Guest' 
          id='GuestSize'
          required 
          onChange={handleChange}/>
        </FormGroup>
        
      </Form>

      </div>
      <div className='booking_bottom'>
        <ListGroup>
          <ListGroupItem  className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>Rs.{costPerDay} <i class='ri-close-line'></i>1 Room</h5>
            <span>Rs.{costPerDay}</span>
          </ListGroupItem>
          <ListGroupItem  className='border-0 px-0'>
            <h5>Service Charge</h5>
            <span>Rs.{ServiceFee}</span>
          </ListGroupItem>
          <ListGroupItem  className=' total border-0 px-0'>
            <h5>Total</h5>
            <span>Rs.{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className='btn primary_btn w-100 mt-4 ' onClick={handleClick}>Book Now</Button>
      </div>

      

      </div></>
      
  )
}

export default Booking
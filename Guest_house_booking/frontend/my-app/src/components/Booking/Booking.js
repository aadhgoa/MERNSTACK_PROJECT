import React from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

// Utility function to format date as YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Booking = ({ room, avgRating }) => {
  const { costPerDay, reviews, Rooms } = room;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    roomName: Rooms,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: formatDate(new Date()), // Set initial date format
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'bookAt') {
      // Convert the input date to YYYY-MM-DD format
      setBooking((prev) => ({ ...prev, [id]: formatDate(new Date(value)) }));
    } else {
      setBooking((prev) => ({ ...prev, [id]: value }));
    }
  };

  const ServiceFee = 50;
  // const totalAmount = Number(costPerDay) * Number(booking.guestSize) + Number(ServiceFee);
  let totalAmount;

if (Number(booking.guestSize) <= 2) {
  totalAmount = Number(costPerDay) + Number(ServiceFee);
} else {
  totalAmount = Number(costPerDay) + (Number(booking.guestSize) - 2) * 1000 + Number(ServiceFee);
}



  // send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);

    // /

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please sign in');
      }
      const accessToken = document.cookie.split('; ').find(cookie => cookie.startsWith('accessToken='));
      const id = JSON.parse(localStorage.getItem('user'))?._id;

      if (!accessToken) {
        console.error('Access token is missing.');
        return;
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers: {
          "Authorization": accessToken.split('=')[1],
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();
      console.log(result.message);

      navigate('/thank-you');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='booking'>
        <div className='booking_top d-flex align-items-center justify-content-between'>
          <h3>Rs.{costPerDay} <span>/Apartment</span></h3>
          <span className='room_rating d-flex align-items-center'>
            <i className='ri-star-s-fill'></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>
        <div className='booking_form'>
          <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup>
              <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
              <input
                type='date'
                placeholder=''
                id='bookAt'
                required
                onChange={handleChange}
                value={booking.bookAt} // Bind the value to ensure controlled input
              />
              <input
                type='number'
                placeholder='Guest'
                id='guestSize'
                required
                onChange={handleChange}
                value={booking.guestSize} // Bind the value to ensure controlled input
              />
            </FormGroup>
          </Form>
        </div>
        <div className='booking_bottom'>
          <ListGroup>
            <ListGroupItem className='border-0 px-0'>
              <h5 className='d-flex align-items-center gap-1'>Rs.{costPerDay} <i className='ri-close-line'></i>1 Room</h5>
              <span>Rs.{costPerDay}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
              <h5>Service Charge</h5>
              <span>Rs.{ServiceFee}</span>
            </ListGroupItem>
            <ListGroupItem className=' total border-0 px-0'>
              <h5>Total</h5>
              <span>Rs.{totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className='btn primary_btn w-100 mt-4 ' onClick={handleClick}>
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Booking;
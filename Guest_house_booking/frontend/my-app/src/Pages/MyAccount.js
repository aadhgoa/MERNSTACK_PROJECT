import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import Cookies from 'js-cookie';

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const accessToken = document.cookie.split('; ').find(cookie => cookie.startsWith('accessToken='));
        const id = JSON.parse(localStorage.getItem('user'))?._id;

        if (!accessToken) {
          console.error('Access token is missing.');
          return;
        }

        const response = await fetch(`${BASE_URL}/booking/user/${id}`, {
          method: "GET",
          headers: {
            "Authorization": accessToken.split('=')[1],
            "Content-Type": "application/json",
          }
        });

        const data = await response.json();
        setBookings(data.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);
  return (
    <div>
      {loading ? (
        <p>please login to to see your details</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>My Bookings</h2>

          
          <ul>
          
            {bookings && bookings.map((booking) => (
              <li key={booking._id}>
                <p>Room Name: {booking.roomName}</p>
                <p>FullName: {booking.fullName}</p>
                <p>Guest Size: {booking.guestSize}</p>
                <p>Phone: {booking.phone}</p>
                <p>Booked On : {booking.bookAt}</p>

                {/* Add more booking details as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
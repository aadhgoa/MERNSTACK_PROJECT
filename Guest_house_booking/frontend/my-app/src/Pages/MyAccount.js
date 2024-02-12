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
        const cookies = document.cookie.split('; ')
        console.log(cookies)
        const accessTokenCookie = cookies.find(cookie => cookie.startsWith('accessToken='));
        const accessToken = accessTokenCookie ? accessTokenCookie.split('=')[1] : undefined;
        
        const user_str = localStorage.getItem('user')
        const user_obj = JSON.parse(user_str)
        const id = user_obj["_id"]
        console.log(id)
        console.log(accessToken)
        if (!accessToken) {
          console.error('Access token is missing.');
          // Handle the absence of the access token, e.g., redirect to login page
          return;
        }
        console.log(`${BASE_URL}/booking/${id}`)
        const response = await fetch(`${BASE_URL}/booking/user/${id}`, {
          method: "GET",
          headers: {
            "Authorization": `${accessToken}`,
            "Content-Type": "application/json",
          }


        });

        const data = await response.json();
        setBookings(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings. Please try again.');
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
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>My Bookings</h2>

          
          <ul>
          
            {bookings && bookings.map((booking) => (
              <li key={booking._id}>
                <p>Room Name: {booking.roomName}</p>
                <p>Guest Size: {booking.guestSize}</p>

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

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error('Access token is missing.');
                // Handle the absence of the access token, e.g., redirect to login page
                return;
            }
          const response = await fetch(`${BASE_URL}/booking`, {
          method: "GET",
          headers: {
            "Authorization": `${token}`, 
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
          <h2>My Bookings{bookings}</h2>
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

import React from 'react';
import Booking from '../components/Booking';
// import './Bookings.css';

const bookings = [
  { id: 1, mentor: 'John Doe', date: '2023-07-30', time: '10:00 AM' },
  { id: 2, mentor: 'Jane Smith', date: '2023-07-31', time: '2:00 PM' },
  // More bookings...
];

const Bookings = () => {
  return (
    <div className="bookings-page">
      <h1>Your Bookings</h1>
      <div className="bookings-list">
        {bookings.map(booking => (
          <Booking key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;

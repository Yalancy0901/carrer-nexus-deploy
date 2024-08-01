import React from 'react';
import './styles/Booking.css';

const Booking = ({ booking }) => {
  return (
    <div className="booking">
      <h3>{booking.mentor}</h3>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>
    </div>
  );
};

export default Booking;

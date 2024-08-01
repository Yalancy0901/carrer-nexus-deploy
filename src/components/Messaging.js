// src/components/Messaging.js

import React from 'react';
import './styles/Messaging.css';

const Messaging = ({ message }) => {
  return (
    <div className="message">
      <p><strong>{message.user}</strong>: {message.message}</p>
    </div>
  );
};

export default Messaging;

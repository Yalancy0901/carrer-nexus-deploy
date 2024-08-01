import React, { useState } from 'react';
import Messaging from '../components/Messaging';
import './styles/Messages.css';

const initialMessages = [
  { id: 1, user: 'John Doe', message: 'Hi, I can help you with your career!' },
  { id: 2, user: 'Jane Smith', message: 'Let’s discuss your project.' },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObject = {
        id: messages.length + 1,
        user: 'Current User',
        message: newMessage,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-page">
      <h1>Messages</h1>
      <div className="messages-list">
        {messages.map(message => (
          <Messaging key={message.id} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;

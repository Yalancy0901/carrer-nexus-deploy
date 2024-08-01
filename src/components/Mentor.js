import React from 'react';
import './styles/Mentor.css';

const Mentor = ({ mentor }) => {
  return (
    <div className="mentor">
      <img src={`/${mentor.name}.jpg`} alt={mentor.name} className="mentor-pic" />
      <div className="mentor-info">
        <h3>{mentor.name}</h3>
        <p>{mentor.industry}</p>
        <p>{mentor.location}</p>
        <span>{mentor.availability}</span>
      </div>
      <button className="mentor-btn">View Profile</button>
    </div>
  );
};

export default Mentor;

import React from 'react';
import Mentor from '../components/Mentor';
import './styles/Mentors.css';

const mentors = [
  { id: 1, name: 'John Doe', industry: 'Software Engineering', location: 'San Francisco, CA', availability: 'Available' },
  { id: 2, name: 'Jane Smith', industry: 'Product Design', location: 'New York, NY', availability: 'Available' },
  // More mentors...
];

const Mentors = () => {
  return (
    <div className="mentors-page">
      <h1>Find a Mentor</h1>
      <div className="mentors-list">
        {mentors.map(mentor => (
          <Mentor key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;

import React from 'react';
import Discussion from '../components/Discussion';
import './styles/Discussions.css';

const discussions = [
  { id: 1, topic: 'Career Advice', posts: 23 },
  { id: 2, topic: 'Industry Trends', posts: 17 },
  // More discussions...
];

const Discussions = () => {
  return (
    <div className="discussions-page">
      <h1>Discussion Forums</h1>
      <div className="discussions-list">
        {discussions.map(discussion => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </div>
  );
};

export default Discussions;

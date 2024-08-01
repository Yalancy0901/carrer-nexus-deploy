import React from 'react';
import './styles/Discussion.css';

const Discussion = ({ discussion }) => {
  return (
    <div className="discussion">
      <h3>{discussion.topic}</h3>
      <p>{discussion.posts} Posts</p>
    </div>
  );
};

export default Discussion;

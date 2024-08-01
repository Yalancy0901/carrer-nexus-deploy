import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './styles/CreatePost.css';

const CreatePost = ({ onPostCreated }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      const newPost = { 
        id: Date.now(), 
        user: user ? user.name : 'Anonymous', 
        content 
      };
      onPostCreated(newPost);
      setContent(''); // Clear the textarea after posting
    }
  };

  return (
    <div className="create-post-page">
      <h1>Create Post</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CreatePost;

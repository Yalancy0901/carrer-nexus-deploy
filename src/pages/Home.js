// src/pages/Home.js
import React, { useState } from 'react';
import MainContent from '../components/MainContent';
import './styles/Home.css';

const Home = () => {
  const [posts] = useState([
    {
      // id: 1,
      // user: 'X_AE_A_13',
      // role: 'Product Designer, slothUI',
      // content: 'Habitant morbi tristique senectus et netus...',
      // hashtags: ['#amazing', '#great', '#lifetime'],
      // image: 'https://www.marvelengineers.co.in/wp-content/uploads/2018/10/Careers-logo-1024x250.png',
      // likes: 12,
      // comments: 25,
      // shares: 187,
      // saved: 8,
    },
    // More posts...
  ]);

  return (
    <div className="home-page">
     
      <MainContent posts={posts} />
    </div>
  );
};

export default Home;

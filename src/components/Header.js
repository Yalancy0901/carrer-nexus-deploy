import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';


const Header = () => {

  const navigate = useNavigate();

  const handleAddPostClick = () => {
    navigate('/create-post');
  };
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://www.shutterstock.com/image-vector/hr-logo-design-letter-c-600nw-2209264841.jpg" alt="Logo" className="logo" />
        <h3 color=' #a55cff'>CareerNexus</h3>
      </div>
      <input type="text" placeholder="Search for friends, groups, pages" className="search-bar" />
      {/* <button className="add-post-btn" onClick={handleAddPostClick}>Add New Post</button> */}
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './AppLayout.css'; // Your CSS file

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prev => !prev);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">Logo</div>
        <div className="search-bar">Search</div>
        <button className="add-post-btn">Add Post</button>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          &#9776; {/* Unicode character for hamburger icon */}
        </div>
      </header>

      <div className={`sidebar-menu ${isSidebarOpen ? 'active' : ''}`}>
        {/* Sidebar content */}
        <button onClick={toggleSidebar}>Close Sidebar</button>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>

      <div className={`right-sidebar-menu ${isRightSidebarOpen ? 'active' : ''}`}>
        {/* Right Sidebar content */}
        <button onClick={toggleRightSidebar}>Close Right Sidebar</button>
        <ul>
          <li>Right Sidebar Item 1</li>
          <li>Right Sidebar Item 2</li>
          <li>Right Sidebar Item 3</li>
        </ul>
      </div>

      <main>
        {/* Main content */}
      </main>
    </div>
  );
};

export default AppLayout;

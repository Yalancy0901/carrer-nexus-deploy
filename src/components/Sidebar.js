import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/mentors">Mentors</Link></li>
          <li><Link to="/discussions">Discussions</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          {user && user.role === 'content-creator' && (
            <li><Link to="/create-post">Create Post</Link></li>
          )}
          <li>Settings</li>
          <li>Help & Support</li>
        </ul>
      </nav>
      <div className="profile-section">
        {user ? (
          <div className="profile">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" className="profile-pic" />
            <div>
              <p>{user.name}</p>
              <span>{user.role === 'content-creator' ? 'Content Creator' : 'Basic Member'}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/signup" className="signup-link">Signup</Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

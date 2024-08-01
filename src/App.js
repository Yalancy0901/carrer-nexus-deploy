// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import RightSidebar from './components/RightSidebar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Mentors from './pages/Mentors';
// import Discussions from './pages/Discussions';
// import Messages from './pages/Messages';
// import Bookings from './pages/Bookings';

// import { AuthProvider } from './context/AuthContext';
// import './App.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="app">
//           <Header />
//           <div className="app-body">
//             <Sidebar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/mentors" element={<Mentors />} />
//               <Route path="/discussions" element={<Discussions />} />
//               <Route path="/messages" element={<Messages />} />
//               <Route path="/bookings" element={<Bookings />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//             </Routes>
//             <RightSidebar />
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import Discussions from './pages/Discussions';
import Messages from './pages/Messages';
import Bookings from './pages/Bookings';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/mentors" element={<ProtectedRoute><Mentors /></ProtectedRoute>} />
              <Route path="/discussions" element={<ProtectedRoute><Discussions /></ProtectedRoute>} />
              <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
              <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
            </Routes>
            <RightSidebar />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// // AuthContext.js
// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [userData, setUserData] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser, userData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// // // src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../components/firebase/firebase'; // Adjust the path as needed
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
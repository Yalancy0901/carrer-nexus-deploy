import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKZ4Ar6T0Tu7445XdR51IuZQ3FG_qjSSI",
  authDomain: "login-signup-1af67.firebaseapp.com",
  projectId: "login-signup-1af67",
  storageBucket: "login-signup-1af67.appspot.com",
  messagingSenderId: "1023954363000",
  appId: "1:1023954363000:web:c2b87fab5c33444185c38d",
  measurementId: "G-VRQGEWVLPR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };

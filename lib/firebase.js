// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEs87wZHTTkaWXfYLA73A--33NiUBW20A",
  authDomain: "assignment-auth-3e7d2.firebaseapp.com",
  projectId: "assignment-auth-3e7d2",
  storageBucket: "assignment-auth-3e7d2.firebasestorage.app",
  messagingSenderId: "554249880981",
  appId: "1:554249880981:web:83e4d9a9ed913e20be229c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

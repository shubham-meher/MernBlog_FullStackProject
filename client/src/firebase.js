// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6f6db.firebaseapp.com",
  projectId: "mern-blog-6f6db",
  storageBucket: "mern-blog-6f6db.appspot.com",
  messagingSenderId: "332322859095",
  appId: "1:332322859095:web:bb06b89a9b88e49f171b12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

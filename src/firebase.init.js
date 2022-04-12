// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwV3Dfk0qz9UAG9cC5ujYv9t4U2V4NynE",
  authDomain: "ema-john-simple-a3c17.firebaseapp.com",
  projectId: "ema-john-simple-a3c17",
  storageBucket: "ema-john-simple-a3c17.appspot.com",
  messagingSenderId: "461180872038",
  appId: "1:461180872038:web:1c6ee25e7678112cc954a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
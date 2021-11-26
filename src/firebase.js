// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59Vex7RxuMF4fBfFFiDVbexE_qWIsp3g",
  authDomain: "linkdin-clone-ce688.firebaseapp.com",
  projectId: "linkdin-clone-ce688",
  storageBucket: "linkdin-clone-ce688.appspot.com",
  messagingSenderId: "82316577536",
  appId: "1:82316577536:web:61739ba8dbcbf275b941e5",
  measurementId: "G-NYM9BL1MSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export  {auth, provider} ;
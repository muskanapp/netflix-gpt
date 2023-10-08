// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNphvrVUca7Xa8xH41It_wm0Mg5xL9BY",
  authDomain: "netflixgpt-c945d.firebaseapp.com",
  projectId: "netflixgpt-c945d",
  storageBucket: "netflixgpt-c945d.appspot.com",
  messagingSenderId: "929468750422",
  appId: "1:929468750422:web:cf7fef2c9e29eef766b9f7",
  measurementId: "G-MPF856S8CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
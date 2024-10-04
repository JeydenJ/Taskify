// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWeD3SCctAzi5Q2cpNQIYi1voQ_2qjQIA",
  authDomain: "taskify-jey.firebaseapp.com",
  projectId: "taskify-jey",
  storageBucket: "taskify-jey.appspot.com",
  messagingSenderId: "224244161283",
  appId: "1:224244161283:web:73ec4630a888c5da69e736",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export the auth object
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
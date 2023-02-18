// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'firebase/auth'
import 'firebase/database'
// import {registrationUser} from "./register";
Notify.init({
  timeout: 2000,
  clickToClose: true,
});
const firebaseConfig = {
  apiKey: "AIzaSyCAzOEobkX7zjzKcWCZNu8dhUnsurUUSAw",
  authDomain: "news-goit-1.firebaseapp.com",
  databaseURL: "https://news-goit-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "news-goit-1",
  storageBucket: "news-goit-1.appspot.com",
  messagingSenderId: "618434101899",
  appId: "1:618434101899:web:58e5277fd4ec3d55f6ca8e",
  measurementId: "G-7YDFYWJH4S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const  auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    
//     Notify.success('Registration successful');
//     registrationUser(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     Notify.failure(`${errorMessage}`)
//     // ..
//   });

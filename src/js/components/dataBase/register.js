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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { authUser } from './auth.js';
import { writeUserData } from './setDatabase';


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const refs = {
    nameRef: document.getElementById('nameReg'),
    passRef: document.getElementById('passReg'),
    emailRef: document.getElementById('emailReg'),
    formRef: document.getElementById('formReg')
}
refs.formRef.addEventListener('submit', (e)=>{
    e.preventDefault()
    registrationUser(e.target.emailReg.value, e.target.passReg.value, e.target.nameReg.value)
})
// , e.target.name.value  , name
    function registrationUser(email, password, UserName) {
    const  auth = getAuth();
     const createUser = createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Notify.success('Registration successful');
    return user
  }).then(user => {
    console.log("🚀 ~ user.uid", user.uid);
    
    writeUserData(user.uid, {name: UserName})
    return user
  }).then((user)=>{
    authUser(password, user.email)
  }

  )
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
        Notify.failure(`Користувач за таким вже зареєстрований`) 
    } else if(errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        console.log(errorMessage);
        Notify.failure(`пароль повинен містити мінімум 6 символів`) 
    } else{
        console.log(errorMessage);
        Notify.failure(`${errorMessage}`) 
    }
  });
    
}
// Notify.failure(`${Користувач за таким  вже зареєстрований}`)
// 







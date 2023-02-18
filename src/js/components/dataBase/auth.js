import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onGetUserName } from "./onGetUserName";
Notify.init({
    timeout: 50000,
    clickToClose: true,
  });
const refs = {
    nameRef: document.getElementById('name'),
    passRef: document.getElementById('pass'),
    emailRef: document.getElementById('email'),
    formRef: document.getElementById('form')
}


// refs.formRef.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // console.log(e.target.name.value); e.target.name.value,
//     console.log(e.target.pass.value);
//     console.log(e.target.email.value);
//     authUser( e.target.pass.value, e.target.email.value)
// })

export const authUser = function(password, email){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        return user
    }).then((user)=> {
     onGetUserName(user.uid)  
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage ==='Firebase: Error (auth/user-not-found).') {
            Notify.failure(`Такого користувача не знайдено. Необхідно зареєструватись`)
        } else if(errorMessage === 'Firebase: Error (auth/wrong-password).'){
            Notify.failure(`Помилковий пароль`)

        }
        else {
            Notify.failure(`${errorMessage}`)
        }
    });
}



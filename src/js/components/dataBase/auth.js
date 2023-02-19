import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onGetUserName } from "./onGetUserName";
Notify.init({
    timeout: 7000,
    clickToClose: true,
  });
const refs = {
    nameRef: document.getElementById('name'),
    passRef: document.getElementById('pass'),
    emailRef: document.getElementById('email'),
    formRef: document.getElementById('form'),
    buttonLogin: document.getElementById('login'),
    buttonRegistr: document.querySelector('.registr'),
    buttonLogout: document.querySelector('.logout')
}
onButtonDisablet()


refs.formRef.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.pass.value);
    console.log(e.target.email.value);
    authUser( e.target.pass.value, e.target.email.value)
})

export const authUser = function(password, email){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        return user
    }).then((user)=> {
        localStorage.setItem('user', user.uid)
        onButtonDisablet()
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

function onButtonDisablet() {
    if (localStorage.getItem('user')) {
        refs.buttonRegistr.classList.toggle('displayNone')
        refs.buttonLogin.classList.toggle('displayNone')
        refs.buttonLogout.classList.toggle('displayNone')
        refs.buttonLogout.addEventListener('click', onLogout)
    } 

}
function onLogout() {
    localStorage.removeItem('user');
    refs.buttonRegistr.classList.toggle('displayNone')
    refs.buttonLogin.classList.toggle('displayNone')
    refs.buttonLogout.classList.toggle('displayNone')
}
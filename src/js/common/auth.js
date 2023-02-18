import firebase from "firebase/app";

export async function onAuth({email, password}) {
    try {
        await firebase.auth().signInWhithEmailAndPassword(email, password)
    } catch (error) {
        
    }
}
export async function register({email, password}) {
    try {
        await firebase.auth().createUserEmailAndPassword(userName, email, password)
        await firebase.database()
    } catch (error) {
        
    }
}
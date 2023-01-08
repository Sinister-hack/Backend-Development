import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYS8Jf1vkYPeiKSQUOVoTkUwhGdMc6ZYg",
  authDomain: "edtech-2d2f8.firebaseapp.com",
  projectId: "edtech-2d2f8",
  storageBucket: "edtech-2d2f8.appspot.com",
  messagingSenderId: "488386774919",
  appId: "1:488386774919:web:8022401c60713c258f7522"
};



const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}
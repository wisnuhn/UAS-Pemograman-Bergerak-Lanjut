// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3p_hi8JDU3ir24t1g0ZHdQzWderdDFHc",
  authDomain: "wisnu-app-37d5c.firebaseapp.com",
  projectId: "wisnu-app-37d5c",
  storageBucket: "wisnu-app-37d5c.appspot.com",
  messagingSenderId: "342703419557",
  appId: "1:342703419557:web:f59d0bcc3f876af67d1d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db, getFirestore, collection , addDoc, getDocs};
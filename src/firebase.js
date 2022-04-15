// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbTtArL-wbpERzuKMXW7reo-QN46gwxV8",
  authDomain: "chic-house.firebaseapp.com",
  projectId: "chic-house",
  storageBucket: "chic-house.appspot.com",
  messagingSenderId: "381629988978",
  appId: "1:381629988978:web:29d13e9e53299372bc42eb",
  measurementId: "G-KEVB3DMTSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
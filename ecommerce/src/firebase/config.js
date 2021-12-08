// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTZ59jOP9Gtm7O317FY7e_O8sJq4c1e-4",
  authDomain: "reactjs-coderhouse-fc8c9.firebaseapp.com",
  projectId: "reactjs-coderhouse-fc8c9",
  storageBucket: "reactjs-coderhouse-fc8c9.appspot.com",
  messagingSenderId: "222627084441",
  appId: "1:222627084441:web:d23580179e5a7d3df7a008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
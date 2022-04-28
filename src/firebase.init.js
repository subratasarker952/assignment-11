// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVUcvqegveVzx33XGqGJlk2ODGa2wMono",
  authDomain: "smartphone-inventory.firebaseapp.com",
  projectId: "smartphone-inventory",
  storageBucket: "smartphone-inventory.appspot.com",
  messagingSenderId: "786580857394",
  appId: "1:786580857394:web:a9228c0ff1ebcc60b9522b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
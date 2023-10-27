// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6umVp9OJdJQjPRXryXzMnQqxFE4K5PRc",
  authDomain: "todo-application-45e83.firebaseapp.com",
  projectId: "todo-application-45e83",
  storageBucket: "todo-application-45e83.appspot.com",
  messagingSenderId: "533508207378",
  appId: "1:533508207378:web:97ecc70a26b066ac3c79cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
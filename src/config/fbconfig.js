// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiUXdmo7Tp9a_prU9C--E75F6nfg59UDo",
  authDomain: "goodbook-lk.firebaseapp.com",
  projectId: "goodbook-lk",
  storageBucket: "goodbook-lk.appspot.com",
  messagingSenderId: "768524823787",
  appId: "1:768524823787:web:e812c71b559579e36b62ae",
  measurementId: "G-LEWW0JD31F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// Use compat version to match your other pages
import firebase from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js";
import "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRrm0ZrKfhrBWa7A0VghOz82ufJvHeJqI",
  authDomain: "r6stattracker.firebaseapp.com",
  databaseURL: "https://r6stattracker-default-rtdb.firebaseio.com",
  projectId: "r6stattracker",
  storageBucket: "r6stattracker.appspot.com",
  messagingSenderId: "575541861129",
  appId: "1:575541861129:web:28682f4fc01279e46651d8",
  measurementId: "G-TN7LJDJP3R"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

export { db, auth };

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import firebase and firestore
import firebase from 'firebase/app';
import 'firebase/firestore';

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkG0nOpsVHRabAoc8gZ_sE7-YaBXsI1xM",
  authDomain: "cart-9443a.firebaseapp.com",
  projectId: "cart-9443a",
  storageBucket: "cart-9443a.appspot.com",
  messagingSenderId: "237190607504",
  appId: "1:237190607504:web:2af57c20acaad2a07e5e15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <App />,
  document.getElementById('root')
);



import firebase from "firebase/app";
import database from 'firebase/database'
//insert config from firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4jhaErdtWKfHcAS2mbXMdsv-9bZJkzF4",
    authDomain: "kmitl-ite-pcc.firebaseapp.com",
    databaseURL: "https://kmitl-ite-pcc.firebaseio.com",
    projectId: "kmitl-ite-pcc",
    storageBucket: "kmitl-ite-pcc.appspot.com",
    messagingSenderId: "23140303052",
    appId: "1:23140303052:web:9a20fdbc7888cc77bf8269",
    measurementId: "G-L57T6EZER8"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
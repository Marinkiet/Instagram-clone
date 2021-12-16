// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//import firebase from "firebase";
//import * as firebase from "firebase"
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH6H5CVM47ouhPP2U023ils8-_WO4mhhE",
  authDomain: "myinstagram-clone-8016c.firebaseapp.com",
  projectId: "myinstagram-clone-8016c",
  storageBucket: "myinstagram-clone-8016c.appspot.com",
  messagingSenderId: "755818387003",
  databaseURL:"https://myinstagram-clone.firebaseio.com",
  appId: "1:755818387003:web:2b4b36f8cae46dc7d3ee1e",
  measurementId: "G-41B8PMDG68"
};

//const firebaseApp = firebase.initializeApp(firebaseConfig);
     
  
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db,auth,storage};
//export default db;
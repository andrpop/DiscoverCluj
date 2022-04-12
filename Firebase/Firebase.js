import Firebase from 'firebase';
import '@firebase/auth';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjJ0iQzoCH30K8mNBF8APQSGJqRV98zuw",
  authDomain: "discovercluj.firebaseapp.com",
  databaseURL: "https://discovercluj-default-rtdb.firebaseio.com",
  projectId: "discovercluj",
  storageBucket: "discovercluj.appspot.com",
  messagingSenderId: "520467623753",
  appId: "1:520467623753:web:363d1b811055eeb9fd7498",
  measurementId: "G-27KJYV4C0H",
};

const app = Firebase.initializeApp(firebaseConfig);

// Firebase.firestore();

export const db = app.database();

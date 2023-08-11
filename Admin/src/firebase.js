import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqQHOHnrOMKsViIm3AQJpALCNz26fl0UM",
  authDomain: "netflix-clone-273ad.firebaseapp.com",
  projectId: "netflix-clone-273ad",
  storageBucket: "netflix-clone-273ad.appspot.com",
  messagingSenderId: "1063644548106",
  appId: "1:1063644548106:web:e0ed279fe2ea61738863f3",
  measurementId: "G-FB1D0QP198",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage();
export default storage;
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWiKFaDQk9EcKvMiRXlIOCMFY0FsU91eE",
  authDomain: "social-a7dbf.firebaseapp.com",
  projectId: "social-a7dbf",
  storageBucket: "social-a7dbf.appspot.com",
  messagingSenderId: "861605604358",
  appId: "1:861605604358:web:ae4773812d12b009cde787",
  measurementId: "G-BZFHYBJP3M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
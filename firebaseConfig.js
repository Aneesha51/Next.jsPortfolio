import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyBZpcU2UpoPV43ntrHUuHbANYaYeTMLolE",
  authDomain: "hrt-project-e2ed3.firebaseapp.com",
  projectId: "hrt-project-e2ed3",
  storageBucket: "hrt-project-e2ed3.firebasestorage.app",
  messagingSenderId: "332386685714",
  appId: "1:332386685714:web:6b04b3c2b1532fe422d9cb",
  measurementId: "G-1FJDJZ3E94"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };

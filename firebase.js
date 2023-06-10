import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyAxlFx4utkbCMq_UuO_Ob8Reo3ioXIwLac",
  authDomain: "to-do-app-53679.firebaseapp.com",
  projectId: "to-do-app-53679",
  storageBucket: "to-do-app-53679.appspot.com",
  messagingSenderId: "1075828785936",
  appId: "1:1075828785936:web:9464cca2bef61eee7c9b95",
  measurementId: "G-PJJXRF62ZR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth();
export const firestore = getFirestore();

export {createUserWithEmailAndPassword, doc, setDoc}
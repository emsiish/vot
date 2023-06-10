import { auth, createUserWithEmailAndPassword } from './firebase.js'
import { firestore, doc, setDoc } from './firebase.js';

const loginButton = document.querySelector('#login');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get user input values
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Call a function to sign up the user with the email and password
  signUpUser(email, password);
});

async function signUpUser(email, password) {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
  
      // Store the user's email in the existing Firestore collection
      const userRef = doc(firestore, 'user', userId);
      await setDoc(userRef, {
        email,
        password
    });
  
      console.log('User signed up successfully and email and password stored in Firestore.');
      window.location.href = 'to-do.html';
    } catch (error) {
      console.error('Error signing up user or storing email and password in Firestore:', error);
    }
  }
  
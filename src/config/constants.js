import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAIwSiswyXPQ1GDINtslfXkk962IO1bnrE",
  authDomain: "vision-ml-react-app.firebaseapp.com",
  databaseURL: "https://vision-ml-react-app.firebaseio.com",
  projectId: "vision-ml-react-app",
  storageBucket: "vision-ml-react-app.appspot.com",
  messagingSenderId: "591174605830"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });

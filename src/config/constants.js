import firebase from 'firebase';
// Initialize Firebase
const config = {
   apiKey: "AIzaSyB_6SrGB2EFrsf6sLUA-vkyVlgIUP1iAOM",
    authDomain: "gl-ml-app.firebaseapp.com",
    databaseURL: "https://gl-ml-app.firebaseio.com",
    projectId: "gl-ml-app",
    storageBucket: "gl-ml-app.appspot.com",
    messagingSenderId: "159930080578"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });

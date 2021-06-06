import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy7Uowit2k9y2AtULXrbHBC9bmdR-BLg0",
  authDomain: "coachneuro-dev.firebaseapp.com",
  projectId: "coachneuro-dev",
  storageBucket: "coachneuro-dev.appspot.com",
  messagingSenderId: "52792328185",
  appId: "1:52792328185:web:84e8952f8a93d9bfa3c728",
  measurementId: "G-15NBV6R233"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth: firebase.auth.Auth = firebaseApp.auth();
const db: firebase.firestore.Firestore = firebaseApp.firestore();
const storage: firebase.storage.Storage = firebaseApp.storage();

export { firebase, auth, db, storage };

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTJZwkehj-5FKW2oV1kiDj0HFnH9vbwY4",
  authDomain: "coachneuro.firebaseapp.com",
  projectId: "coachneuro",
  storageBucket: "coachneuro.appspot.com",
  messagingSenderId: "405525062820",
  appId: "1:405525062820:web:ef03f911b40a91ae03f231",
  measurementId: "G-BKF04767N4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { firebase, auth, db, storage };

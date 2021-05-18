import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP80QkeyXM86qN4odMiwLTxEKaw3RLOpA",
  authDomain: "react-journal-app-55aa3.firebaseapp.com",
  projectId: "react-journal-app-55aa3",
  storageBucket: "react-journal-app-55aa3.appspot.com",
  messagingSenderId: "76713614927",
  appId: "1:76713614927:web:870efd8024e0441b38543a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

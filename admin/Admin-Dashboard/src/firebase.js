// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8I653HDlt_De3eB1wKJflMgHz2tHfjAo",
  authDomain: "netflickx-dd57d.firebaseapp.com",
  projectId: "netflickx-dd57d",
  storageBucket: "netflickx-dd57d.appspot.com",
  messagingSenderId: "152478245389",
  appId: "1:152478245389:web:a2bfaab3d76097c4632b44",
  measurementId: "G-EZKJGXMD47",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

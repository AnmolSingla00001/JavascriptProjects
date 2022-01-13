import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEtY7d4HtCSrMC8oec-riOOuHh05rt4Ac",
  authDomain: "react-job-portal-693f8.firebaseapp.com",
  projectId: "react-job-portal-693f8",
  storageBucket: "react-job-portal-693f8.appspot.com",
  messagingSenderId: "361994780325",
  appId: "1:361994780325:web:5fbc0511d895b1f8f2d74c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebaseConfig };

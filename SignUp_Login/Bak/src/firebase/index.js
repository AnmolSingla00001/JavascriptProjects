// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwEOccLR2S3ulsqqpnK1o3T26dYINeXzg",
  authDomain: "signup-login-react-657c1.firebaseapp.com",
  projectId: "signup-login-react-657c1",
  storageBucket: "signup-login-react-657c1.appspot.com",
  messagingSenderId: "484463630406",
  appId: "1:484463630406:web:0e8baa7fbfcad7c9025247",
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, app as default };

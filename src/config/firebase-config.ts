import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5jreDa9boPJ_xuY3oPfqDkJOXBYW8eAE",
  authDomain: "links-api-auth.firebaseapp.com",
  projectId: "links-api-auth",
  storageBucket: "links-api-auth.appspot.com",
  messagingSenderId: "629293412999",
  appId: "1:629293412999:web:6418adb44953e17f3e7e22"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
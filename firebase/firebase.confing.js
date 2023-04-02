// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYbC7FX6J_1nivjoxK0R92wo9NPFx-TkA",
  authDomain: "scientifque-club.firebaseapp.com",
  projectId: "scientifque-club",
  storageBucket: "scientifque-club.appspot.com",
  messagingSenderId: "8665147299",
  appId: "1:8665147299:web:690eda12383234269d5c16",
  measurementId: "G-66F92KGPWN"
};

//console.log(process.env.API_KEY)

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };



// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



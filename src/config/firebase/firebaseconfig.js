// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5l1ToXun3H21GphdfwWg31DlZbm12J_0",
  authDomain: "baseoffirebasemethods.firebaseapp.com",
  databaseURL: "https://baseoffirebasemethods-default-rtdb.firebaseio.com",
  projectId: "baseoffirebasemethods",
  storageBucket: "baseoffirebasemethods.appspot.com",
  messagingSenderId: "332244331170",
  appId: "1:332244331170:web:c8bc0329f706f627e985fb",
  measurementId: "G-P3N3G6DKFQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
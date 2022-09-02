// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtt1Pkl7NV2gUhvZa1vyG1ZxV72Nh5V3g",
  authDomain: "testreact-de236.firebaseapp.com",
  projectId: "testreact-de236",
  storageBucket: "testreact-de236.appspot.com",
  messagingSenderId: "524744672433",
  appId: "1:524744672433:web:24bf47ba9bbf7e06fe0e90",
  measurementId: "G-ZVPLLVR23V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
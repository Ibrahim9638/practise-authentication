// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkm1GR6WT-bTwQ2jo26-R2Bu_2JCIoLxw",
  authDomain: "react-integration-9ac48.firebaseapp.com",
  projectId: "react-integration-9ac48",
  storageBucket: "react-integration-9ac48.appspot.com",
  messagingSenderId: "1017268331399",
  appId: "1:1017268331399:web:df5639d5715224d5da6922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

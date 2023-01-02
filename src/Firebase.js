// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// copied from docs
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWZdkygC7Vr_1fZeamMq-TW-h-ssc07KM",
    authDomain: "my-app-a8464.firebaseapp.com",
    projectId: "my-app-a8464",
    storageBucket: "my-app-a8464.appspot.com",
    messagingSenderId: "341491431567",
    appId: "1:341491431567:web:38ca07141eb4c9e34318fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVmDNsR5rxwoND-M8MIgTmSuvdY9iStDM",
  authDomain: "ecommerceproggis.firebaseapp.com",
  projectId: "ecommerceproggis",
  storageBucket: "ecommerceproggis.appspot.com",
  messagingSenderId: "569019831908",
  appId: "1:569019831908:web:d2495448732c9bf3c17171",
  measurementId: "G-T4J1X9P4WH",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

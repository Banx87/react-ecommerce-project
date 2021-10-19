// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  // createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// INITIALIZE APP
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCVmDNsR5rxwoND-M8MIgTmSuvdY9iStDM",
  authDomain: "ecommerceproggis.firebaseapp.com",
  projectId: "ecommerceproggis",
  storageBucket: "ecommerceproggis.appspot.com",
  messagingSenderId: "569019831908",
  appId: "1:569019831908:web:d2495448732c9bf3c17171",
  measurementId: "G-T4J1X9P4WH",
});

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
  });
};

// createUserWithEmailAndPassword(auth, email, password).then(userCredential)=> {
//   const user = userCredential.user;
// }

// CREATE A NEW USER WITH EMAIL AND PASSWORD
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log("in createUserProfileDocument");
  if (!userAuth) {
    // console.log("!userAuth");
    return;
  }

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  // console.log(userRef, "userRef");
  // console.log(snapShot, "snapshot");

  if (!snapShot.exists()) {
    // console.log("No snapshot exists");
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      }).then(() => console.log("user creation succesful"));
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

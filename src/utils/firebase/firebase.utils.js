import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7DLTrElKygxCHZ1YqfDYrzebRqRhDBWU",
  authDomain: "crwn-clothing-db-9f6b1.firebaseapp.com",
  projectId: "crwn-clothing-db-9f6b1",
  storageBucket: "crwn-clothing-db-9f6b1.appspot.com",
  messagingSenderId: "36274971633",
  appId: "1:36274971633:web:d5fd5899e3e976b1ed5a50",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInAuthUserEmailAndPassword = async ({ email, password }) => {
  if (!email || !password)
    return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data not exists
  // create/set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

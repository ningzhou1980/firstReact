import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVJzLYDttvkWsf6EkOpv_bLsLW8lgBNYA",
  authDomain: "first-vigil-136323.firebaseapp.com",
  databaseURL: "https://first-vigil-136323.firebaseio.com",
  projectId: "first-vigil-136323",
  storageBucket: "first-vigil-136323.appspot.com",
  messagingSenderId: "411132849952",
  appId: "1:411132849952:web:ef1eeba9063de8c82bf145",
  measurementId: "G-C3NCDW2V8W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

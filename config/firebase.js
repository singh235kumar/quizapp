import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD6y93vT0vJ1hF17vXirJquW_81RObsNaY",
    authDomain: "wechat-c6fbf.firebaseapp.com",
    projectId: "wechat-c6fbf",
    storageBucket: "wechat-c6fbf.appspot.com",
    messagingSenderId: "894413482861",
    appId: "1:894413482861:web:da9769e87988719efb8864"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
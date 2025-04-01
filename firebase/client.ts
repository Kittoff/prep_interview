// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLrbME1pcVHXLdJjAVOafSn0hO0ApXaw8",
  authDomain: "prepwise-b7e91.firebaseapp.com",
  projectId: "prepwise-b7e91",
  storageBucket: "prepwise-b7e91.firebasestorage.app",
  messagingSenderId: "311747173396",
  appId: "1:311747173396:web:024ab27ffb8bddc40a1b01",
  measurementId: "G-NG7SHDMPZ2",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

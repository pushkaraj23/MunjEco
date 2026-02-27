import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHWZR55dSyZsOjJ3EqyxXnGJ2SIuEb1lw",
  authDomain: "munj-eco.firebaseapp.com",
  projectId: "munj-eco",
  storageBucket: "munj-eco.firebasestorage.app",
  messagingSenderId: "574811451553",
  appId: "1:574811451553:web:c0d7a231f7617fde6500e0",
  measurementId: "G-W331Y2SK9W",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };

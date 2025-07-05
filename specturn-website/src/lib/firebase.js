// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClYF-WyzlRKAXoPu0OaEoAja_M8v8fnZk",
  authDomain: "specturn-ab619.firebaseapp.com",
  projectId: "specturn-ab619",
  storageBucket: "specturn-ab619.firebasestorage.app",
  messagingSenderId: "389550063954",
  appId: "1:389550063954:web:d5cfe169fff6ca4108ba8b",
  measurementId: "G-XQK2E0KWV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);

// Owner UIDs for admin access
export const OWNER_UIDS = [
  "admin-uid-1", // Replace with actual Firebase User ID for owner 1
  "admin-uid-2",  // Add more OWNER_UIDs if there are multiple owners
  "2UXeKIovhBfMTskAjZWxLDxZf313" // Added as admin ID
];

export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ZCA9T7XDZ3bgMTyXiA1O8WT5LxrZ1xQ",
  authDomain: "insurtech-50e65.firebaseapp.com",
  projectId: "insurtech-50e65",
  storageBucket: "insurtech-50e65.firebasestorage.app",
  messagingSenderId: "701940917568",
  appId: "1:701940917568:web:fdd5be8f5a4688628ac6a5",
  measurementId: "G-T44HPBVW38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };


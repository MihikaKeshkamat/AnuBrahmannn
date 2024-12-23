import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbQ8NDmxh-AiPAbu1AYi2W25Maf9E2w-E",
  authDomain: "my-anonymous-anubrahman.firebaseapp.com",
  projectId: "my-anonymous-anubrahman",
  storageBucket: "my-anonymous-anubrahman.firebasestorage.app",
  messagingSenderId: "835156112009",
  appId: "1:835156112009:web:01c5d659199f123c0a4c58",
  measurementId: "G-Z5BGLJX3QW",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

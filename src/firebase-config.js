import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA02U-LsT2-b78eQzCPELZBV67GZ4e5Iok",
  authDomain: "final-test-auth.firebaseapp.com",
  projectId: "final-test-auth",
  storageBucket: "final-test-auth.appspot.com",
  messagingSenderId: "524482668969",
  appId: "1:524482668969:web:33d69d8712d4144415bcb8",
  measurementId: "G-QWXBFYMY9R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

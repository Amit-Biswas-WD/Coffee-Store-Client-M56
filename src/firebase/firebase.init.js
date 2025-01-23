
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz-SR-dKKHzOhonf6kHTKgG5VMfvyXTkU",
  authDomain: "coffee-m56-e478b.firebaseapp.com",
  projectId: "coffee-m56-e478b",
  storageBucket: "coffee-m56-e478b.firebasestorage.app",
  messagingSenderId: "835381101631",
  appId: "1:835381101631:web:dc66de26587f85b794e48a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
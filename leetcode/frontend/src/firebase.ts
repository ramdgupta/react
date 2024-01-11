import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUfvck3ohhGe3204VnjwiSx0nQQ8xoVX8",
  authDomain: "leet-clone-190c7.firebaseapp.com",
  projectId: "leet-clone-190c7",
  storageBucket: "leet-clone-190c7.appspot.com",
  messagingSenderId: "404306596749",
  appId: "1:404306596749:web:0a1842573f6a0aa47163c4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
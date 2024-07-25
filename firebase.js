import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCltw2Mfr2zQ5brFB9J4e_XNNyJ0bOkFsw",
    authDomain: "foodxpress-56563.firebaseapp.com",
    projectId: "foodxpress-56563",
    storageBucket: "foodxpress-56563.appspot.com",
    messagingSenderId: "654373990690",
    appId: "1:654373990690:web:12456e3cffd2345799357b"
  };
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

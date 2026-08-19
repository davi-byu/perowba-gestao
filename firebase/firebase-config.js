import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-IR5pAbBGG-VozHH8s-1p7K63nj7a0Uo",
  authDomain: "perowba-finance.firebaseapp.com",
  projectId: "perowba-finance",
  storageBucket: "perowba-finance.firebasestorage.app",
  messagingSenderId: "264004465757",
  appId: "1:264004465757:web:b473e813e63747a99049b4",
  measurementId: "G-5WZRNMTTSD"
};

const app = initializeApp(firebaseConfig);

export { app };
export const db = getFirestore(app);
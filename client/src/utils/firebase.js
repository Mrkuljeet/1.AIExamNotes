import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-5cbaf.firebaseapp.com",
  projectId: "examnotesai-5cbaf",
  storageBucket: "examnotesai-5cbaf.firebasestorage.app",
  messagingSenderId: "358344146327",
  appId: "1:358344146327:web:dc0bb7e1faf092a36bd8d2",
  measurementId: "G-6090TX29S3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}

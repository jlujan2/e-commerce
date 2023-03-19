import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7MVSJx3G6D6NVBf0Qkqq23N_wt4UUYXM",
    authDomain: "crwn-clothing-db-ac079.firebaseapp.com",
    projectId: "crwn-clothing-db-ac079",
    storageBucket: "crwn-clothing-db-ac079.appspot.com",
    messagingSenderId: "459377359690",
    appId: "1:459377359690:web:518f66a1fcb00aa290dfb3"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
import {initializeApp} from 'firebase/app'
import {getFirestore} from  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDKIAqDjKLRX6y_G048nSDoH0EZKFoE_8o",
    authDomain: "slack-clone-6c9c5.firebaseapp.com",
    projectId: "slack-clone-6c9c5",
    storageBucket: "slack-clone-6c9c5.appspot.com",
    messagingSenderId: "118852253016",
    appId: "1:118852253016:web:86ef0783f134ebd4c3212d"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

export default db;
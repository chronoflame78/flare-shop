import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOSqj8jGDeveiNaRJYCluQakiW7nWd0F0",
    authDomain: "flare-db.firebaseapp.com",
    projectId: "flare-db",
    storageBucket: "flare-db.appspot.com",
    messagingSenderId: "1087721988750",
    appId: "1:1087721988750:web:4448d27ae625f78e985fdf",
    measurementId: "G-M6PE1KYJXW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
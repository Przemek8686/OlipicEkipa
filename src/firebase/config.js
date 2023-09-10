import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAvlKQ8et8yn_ohDNPeT5W2kciml5mCrhE",
    authDomain: "olimpicphoto.firebaseapp.com",
    projectId: "olimpicphoto",
    storageBucket: "olimpicphoto.appspot.com",
    messagingSenderId: "352475880258",
    appId: "1:352475880258:web:375e6741252483db8746db",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

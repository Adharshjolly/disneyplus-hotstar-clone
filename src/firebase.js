import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSRXBRMnHV_PQuimL1xafk4WQHrdtLIcw",
    authDomain: "aj-codes-clone-3.firebaseapp.com",
    projectId: "aj-codes-clone-3",
    storageBucket: "aj-codes-clone-3.appspot.com",
    messagingSenderId: "822880573788",
    appId: "1:822880573788:web:01916e5840a47b515c0999",
    measurementId: "G-N7WCW13FQ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

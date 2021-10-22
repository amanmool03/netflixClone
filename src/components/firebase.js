
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2vWaKiVkTwjo5v0TkFz7ROm9Hwa09-j8",
    authDomain: "netflix-clone-mrs.firebaseapp.com",
    projectId: "netflix-clone-mrs",
    storageBucket: "netflix-clone-mrs.appspot.com",
    messagingSenderId: "808468964645",
    appId: "1:808468964645:web:6d4d6830e68efefd1026cc"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
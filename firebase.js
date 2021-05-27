import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDKhthtMh0LEwEnQI2W_XbNqdO6yz5Rth0",
    authDomain: "fire-blogs-eb627.firebaseapp.com",
    projectId: "fire-blogs-eb627",
    storageBucket: "fire-blogs-eb627.appspot.com",
    messagingSenderId: "331039763577",
    appId: "1:331039763577:web:e9b8d243e1899d599638a8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
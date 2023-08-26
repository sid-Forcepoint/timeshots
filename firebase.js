import firebase from "firebase/compat/app"; 
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// Import AsyncStorage from the new package


const firebaseConfig = {
  apiKey: "AIzaSyBrbufNW5pktcO6aHXbsiu0PnJC5yKnkYw",
  authDomain: "timeshots-eb6fd.firebaseapp.com",
  projectId: "timeshots-eb6fd",
  storageBucket: "timeshots-eb6fd.appspot.com",
  messagingSenderId: "490955935202",
  appId: "1:490955935202:web:c4ecd64a11dcb279c63dbb"
};


firebase.initializeApp(firebaseConfig)

const db=firebase.firestore()

export {firebase,db}
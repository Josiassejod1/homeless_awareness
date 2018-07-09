// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';


// Initalize and export Firebase.
 const config = {
    apiKey: "AIzaSyD00jCiU85omP1DJEjo9zEGFRvW2HS2Nwo",
    authDomain: "homeless-66617.firebaseapp.com",
    databaseURL: "https://homeless-66617.firebaseio.com",
    projectId: "homeless-66617",
    storageBucket: "",
    messagingSenderId: "82465353024"
  };
export default firebase.initializeApp(config);
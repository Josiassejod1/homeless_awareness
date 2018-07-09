// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';


// Initalize and export Firebase.
 const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.URL,
    projectId: process.env.PROJECT_URL,
    storageBucket: "",
    messagingSenderId: process.env.SENDER_ID
  };
export default firebase.initializeApp(config);
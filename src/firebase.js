import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD00jCiU85omP1DJEjo9zEGFRvW2HS2Nwo",
    authDomain: "homeless-66617.firebaseapp.com",
    databaseURL: "https://homeless-66617.firebaseio.com",
    projectId: "homeless-66617",
    storageBucket: "homeless-66617.appspot.com",
    messagingSenderId: "82465353024"
  };
  firebase.initializeApp(config);
  
  export default firebase;
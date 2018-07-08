import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

const config = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  databaseURL: 'https://<YOUR-DATABASE-NAME>.firebaseio.com',
  projectId: '<YOUR-PROJECT-ID>',
  storageBucket: '<YOUR-STORAGE-BUCKET>.appspot.com',
  messagingSenderId: '<YOUR-MESSAGING-SENDER-ID>'
};
export default firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Heyyy
        </p>
      </div>
    );
  }
}

export default App;

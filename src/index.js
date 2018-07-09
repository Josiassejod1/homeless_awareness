import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './map/map.component';
import Profile from './profile/profile.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();

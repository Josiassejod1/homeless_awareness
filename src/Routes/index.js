import React from 'react';
import LandingPage from '../Pages/LandingPage';
import MapContainer from '../Pages/MapPage';
import CreateProfilePage from '../Pages/CreateProfilePage';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

export default (props) => (
  <Router>
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/map' component={MapContainer} />
        <Route path='/create' component={CreateProfilePage} />
    </Switch>

  </Router>
)
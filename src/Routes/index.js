import React from 'react';
import LandingPage from '../Pages/LandingPage';
import MapPage from '../Pages/MapPage';
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
        <Route path='/map' component={MapPage} />
        <Route path='/create' component={CreateProfilePage} />
    </Switch>

  </Router>
)
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Map from './map/map.component';
import Profile from './profile/profile.component';
import Home from './home/home.component';

class App extends Component {
    render(){
        return(
                <div>
                  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-brand" href="#">Fixed navbar</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/map">Map</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled" href="/profile">Profile</a>
                        </li>
                      </ul>
                    </div>
                    </nav>
                    <Router>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/map" component={Map} />
                      </Switch>
                    </Router>
                </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import {HashRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';

import NavBar from './Components/layout/NavBar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Footer from './Components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content-container">
            <NavBar/>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Redirect from="/" to="home"/>
            </Switch>
            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

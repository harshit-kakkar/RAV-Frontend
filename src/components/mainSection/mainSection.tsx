import React from 'react';
import './mainSectionStyles.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from '../signup/signup';
import Login from '../login/login';

function MainSection() {
  return (
    <Router>
      <div className="main-section-container">
        <Switch>
          <Route path="/" exact component={Signup} /> {/* TODO: Should be changed to homepage when that component is created */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainSection;
import React from 'react';
import './mainSectionStyles.css';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
import Signup from '../signup/signup';
import Login from '../login/login';
import Profile from '../profile/profile';

function MainSection() {
  return (
      <div className="main-section-container">
        <Switch>
          {/* <Route path="/" exact component={Signup} /> 
          TODO: Should be changed to homepage when that component is created */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <Redirect to={{pathname: "/signup"}} />} />
        </Switch>
      </div>
  );
}

export default MainSection;
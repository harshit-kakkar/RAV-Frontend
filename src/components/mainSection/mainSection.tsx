import React from 'react';
import './mainSectionStyles.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Signup from '../signup/signup';
import Login from '../login/login';
import Profile from '../profile/profile';
import SearchMentor from '../searchMentor/searchMentor';

function MainSection() {
  return (
      <div className="main-section-container">
        <Switch>
          {/* <Route path="/" exact component={Signup} /> 
          TODO: Should be changed to homepage when that component is created */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={SearchMentor} />
          <Route render={() => <Redirect to={{pathname: "/signup"}} />} />
        </Switch>
      </div>
  );
}

export default MainSection;
import React from 'react';
import "./signupStyles.css"
import {RootState} from '../../reducers'
import {useDispatch, useSelector} from 'react-redux'
import {isMentorSignup} from '../../actions/IsMentorSignupActions'
import MentorSignup from '../mentorSignup/mentorSignup';

function Signup() {
  const isMentorSignupState = useSelector((state: RootState) => state.isMentorSignup)
  const dispatch = useDispatch()
  return (
    <div className="signup-container">
      <h1 className="signup-header">Welcome to RAV</h1>
      <form className="signup-form-container">
          <input className="signup-input" placeholder="Full Name"></input>
          <input className="signup-input" placeholder="Email Address"></input>
          <input type="password" className="signup-input" placeholder="Password"></input>

          <div className="is-mentor-container">
            <input type="checkbox" className="is-mentor-checkbox" onChange={() => dispatch(isMentorSignup())}></input>
            <label>Become a mentor ?</label>
          </div>
          {isMentorSignupState?<MentorSignup />: <div></div>}

          <button type="button" className="signup-button">Sign up</button>
      </form>
      
    </div>
  );
}

export default Signup;
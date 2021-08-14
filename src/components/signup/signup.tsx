import React, { useState } from 'react';
import "./signupStyles.css"
import {RootState} from '../../reducers'
import {useSelector} from 'react-redux'
// import {isMentorSignup} from '../../actions/IsMentorSignupActions'
import MentorSignup from '../mentorSignup/mentorSignup';

function Signup() {
  const signupScheduleState = useSelector((state: RootState) => state.signupSchedule)
  const [isMentorSignupState, setIsMentorSignupState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');

  return (
    <div className="signup-container">
      <h1 className="signup-header">Welcome to RAV</h1>
      <form className="signup-form-container">
          <input 
            required 
            className="signup-input" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>

          <input 
            required 
            className="signup-input" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </input>

          <input 
            required 
            type="password" 
            className="signup-input" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>

          <div className="is-mentor-container">
            <input type="checkbox" className="is-mentor-checkbox" onChange={() => isMentorSignupState?setIsMentorSignupState(false):setIsMentorSignupState(true)}></input>
            <label>Become a mentor ?</label>
          </div>
          {isMentorSignupState?<MentorSignup setDomain={setDomain} />: <div></div>}

          <button type="button" className="signup-button" onClick={() => console.log(signupScheduleState)}>Sign up</button>
      </form>
      
    </div>
  );
}

export default Signup;
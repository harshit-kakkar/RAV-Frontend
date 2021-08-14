import React, { useEffect, useState } from 'react';
import "./signupStyles.css"
import {RootState} from '../../reducers'
import {useSelector} from 'react-redux'
// import {isMentorSignup} from '../../actions/IsMentorSignupActions'
import MentorSignup from '../mentorSignup/mentorSignup';
import { Link, useHistory } from 'react-router-dom';

function Signup() {
  const history = useHistory();

  const signupScheduleState: any = useSelector((state: RootState) => state.signupSchedule)
  const [isMentorSignupState, setIsMentorSignupState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');

  const [signupStatus, setSignupStatus] = useState(false);
  const [loginRedirectTimer, setLoginRedirectTimer] = useState(-1);

  useEffect(() => {
    setInterval(function(){
      let remainingLoginRedirectTimer:number = loginRedirectTimer-1;
      if(remainingLoginRedirectTimer === 0){
        history.push("/login")
      }
      else if(remainingLoginRedirectTimer>0){
        setLoginRedirectTimer(remainingLoginRedirectTimer)
      }
    },1000)
    return function cleanup() {}
  }, [loginRedirectTimer])

  async function sendSignupRequest(){
   let signupScheduleRequestFormat:any = [] 
    let signupScheduleRequestKeys: Array<string> = Object.keys(signupScheduleState);
    signupScheduleRequestKeys.map((day) => {
      if(signupScheduleState[day]["checked"]){
        let daySchedule = {
          "startTimeHour": signupScheduleState[day]["startTime"],
          "endTimeHour": signupScheduleState[day]["endTime"],
          "day": day
        }
        signupScheduleRequestFormat.push(daySchedule);
      }
    })

    let signupRequestData = {
      "name": name,
      "email": email, 
      "password": password,
      "domain": domain,
      "isMentor": isMentorSignupState,
      "schedule": signupScheduleRequestFormat
    }

    let signupResponse = await fetch('http://localhost:8080/signup', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupRequestData)
    })

    if(signupResponse.status === 200){
      setSignupStatus(true)
      setLoginRedirectTimer(4);
    }
  } 

  return (
    <div className="signup-container">
      <h1 className="signup-header">Welcome to RAV</h1>
      {!signupStatus?
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

          <button type="button" className="signup-button" onClick={() => sendSignupRequest()}>Sign up</button>
        </form>

      :

        <div className="signup-success-div">
          <h2>Congratulations! Your account has been created successfully.</h2>
          <p className="signup-success-redirection-msg">
            (You will redirected to <Link to="/login"><span className="signup-success-login-link"><u>login</u></span></Link> in {loginRedirectTimer})
          </p>
        </div>
      }

      
    </div>
  );
}

export default Signup;
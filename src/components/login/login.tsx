import React, { useState } from 'react';
import './loginStyles.css'

import {useDispatch, useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import {RootState} from '../../reducers'
import {login as IsLoggedInAction} from '../../actions/LoginActions'
import {setJwtToken as setJwtTokenAction} from '../../actions/jwtTokenActions'


function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedInState = useSelector((state: RootState) => state.isLoggedIn)
  const dispatch = useDispatch()


  async function handleSubmit(){
    const data = {email, password};
    let loginResponse = await fetch('http://localhost:8080/login', { 
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data)
                    })

    if(loginResponse.status === 200){
      if(!isLoggedInState){
        await dispatch(IsLoggedInAction())
      }
      let jwtToken = await loginResponse.json()
      let token:String = jwtToken["token"]
      await dispatch(setJwtTokenAction(token))
      history.push("/profile")

    }else{
      console.log("Incorrect Username/password")
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-header">Log in to your account</h1>
      <form className="login-form-container">
          <input className="login-input" required value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" required value={password} className="login-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
          <p className="signup-login-redirect-msg">New to RAV? <Link to="/signup"><span className="signup-login-link"><u>Signup</u></span></Link> instead</p>
          <button type="button" className="login-button" onClick={() => handleSubmit()}>Log in</button>
      </form>
      
    </div>
  );
}

export default Login;
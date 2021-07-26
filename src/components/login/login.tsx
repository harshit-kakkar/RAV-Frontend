import React from 'react';
import './loginStyles.css'

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-header">Log in to your account</h1>
      <form className="login-form-container">
          <input className="login-input" placeholder="Email address"></input>
          <input type="password" className="login-input" placeholder="Password"></input>
          <button type="button" className="login-button">Log in</button>
      </form>
      
    </div>
  );
}

export default Login;
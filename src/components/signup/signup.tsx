import React from 'react';
import "./signupStyles.css"

function Signup() {
  return (
    <div className="signup-container">
      <h1 className="signup-header">Welcome to RAV</h1>
      <form className="signup-form-container">
          <input className="signup-input" placeholder="Full Name"></input>
          <input className="signup-input" placeholder="Email Address"></input>
          <input type="password" className="signup-input" placeholder="Password"></input>

          <div className="is-mentor-container">
            <input type="checkbox" className="is-mentor-checkbox"></input>
            <label>Become a mentor ?</label>
          </div>

          <button type="button" className="signup-button">Sign up</button>
      </form>
      
    </div>
  );
}

export default Signup;
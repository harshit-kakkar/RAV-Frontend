import React, { useState, useEffect } from 'react';
import { useHistory,Link } from 'react-router-dom';


function LoginRedirect() {
  const history = useHistory();

  const [loginRedirectTimer, setLoginRedirectTimer] = useState(4)

  useEffect(() => {
    if(!loginRedirectTimer) history.push("/login")
    const intervalId = setInterval(function(){
       setLoginRedirectTimer(loginRedirectTimer-1)
    },1000)
    return () => clearInterval(intervalId);
  }, [loginRedirectTimer])

  return (
    <div className="signup-success-div">
          <h2>Congratulations! Your account has been created successfully.</h2>
          <p className="signup-success-redirection-msg">
            (You will redirected to <Link to="/login"><span className="signup-success-login-link"><u>login</u></span></Link> in {loginRedirectTimer})
          </p>
    </div>
  );
}

export default LoginRedirect;
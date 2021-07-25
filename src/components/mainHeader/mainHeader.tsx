import React from 'react';
import './mainHeaderStyles.css';
import ravLogo from '../../assets/rav-logo2.png'
import {RootState} from '../../reducers/index'
import {useSelector} from 'react-redux'

function MainHeader() {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
  return (
    <div className="main-header-container">
      <div className="rav-logo-container">
          <img className="rav-logo" src={ravLogo} alt="RAV Logo"></img>
      </div>
      {
        isLoggedIn? 
          <div>
            nav
          </div>
          : 
          <></>
      }
      
    </div>
  );
}

export default MainHeader;
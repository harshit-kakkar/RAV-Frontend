import React from 'react';
import './mainHeaderStyles.css';
import ravLogo from '../../assets/rav-logo2.png'
import {RootState} from '../../reducers/index'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function MainHeader() {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
  return (
    <div className="main-header-container">
      <div className="rav-logo-container">
          <img className="rav-logo" src={ravLogo} alt="RAV Logo"></img>
      </div>
      {
        isLoggedIn? 
          <nav className="main-navigation-container">
            <ul className="main-navigation-list">
              <li>Events</li>
              <Link to="/search"><li>Search</li></Link>
              <Link to='/profile'><li>Profile</li></Link>
            </ul>
          </nav>
          : 
          <></>
      }
      
    </div>
  );
}

export default MainHeader;
import React from 'react';
import './profileStyles.css'

function Profile() {
    let intro = `I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    `
    let name = "HARSHIT KAKKAR"
    let email = "kharshit0@gmail.com"
    let domain = "Backend"


  return (
    <div className="profile-container">
      <div className="profile-base-container">
          <div className="basic-details-container">
              <div className="profile-picture-container">
                  <div className="profile-picture"></div>
              </div>
              <div className="basic-details">
                  <div className="profile-name">{name}</div>
                  <div className="profile-email">{email}</div>
              </div>
          </div>
          <div className="intro-details-container">
              <div className="intro-container">
                  <p className="intro-label">Introduction</p>
                  <p className="intro-para">{intro}</p>
              </div>
              <div className="profile-domain-container">
                  <p className="profile-domain-label">Domain</p>
                  <p className="profile-domain-para">{domain}</p>
              </div>
          </div>
      </div>



      <div className="experience-container">
          Experience
      </div>
    </div>
  );
}

export default Profile;
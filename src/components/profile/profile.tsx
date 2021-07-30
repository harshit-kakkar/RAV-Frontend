import React from 'react';
import './profileStyles.css'
import JobDetail from '../jobDetail/jobDetail';
import AvailabilitySchedule from '../availabilitySchedule/availabilitySchedule';

function Profile() {

    //Mock data
    let intro = `I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    `
    let name = "HARSHIT KAKKAR"
    let email = "kharshit0@gmail.com"
    let domain = "Backend"
    let exp = [
        {
            "company_name": "Amazon",
            "role": "Software Engineer",
            "start_date": "2018-11-01",
            "end_date": "2020-04-01"
        },
        {
            "company_name": "Amazon",
            "role": "Software Engineer",
            "start_date": "2018-11-01",
            "end_date": "2020-04-01"
        }
    ]

    let schedule = {
        "MON" : {
            "startTime": 19,
            "endTime": 23
        },
        "TUE" : {
            "startTime": 21,
            "endTime": 22
        }
    
    }


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



      <div className="profile-experience-container">
          <div className="profile-experience-label">
            <p>Experience</p>
          </div>
          <div className="experience-job-container">
              {exp.map((job) => <JobDetail job={job}/>)}
          </div>
      </div>

      <div className="profile-availability-schedule-container">
          <div className="profile-availability-schedule-label">
            <p>Availability Schedule</p>
          </div>
          <div className="user-availability-schedule disable-pointer">
              <AvailabilitySchedule schedule={schedule} />
          </div>
      </div>

    </div>
  );
}

export default Profile;
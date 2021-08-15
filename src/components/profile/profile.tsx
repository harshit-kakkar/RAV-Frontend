import React, { useEffect, useState } from 'react';
import './profileStyles.css'
import JobDetail from '../jobDetail/jobDetail';
import AvailabilitySchedule from '../availabilitySchedule/availabilitySchedule';

import { RootState } from '../../reducers';
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';

interface scheduleModel{
    "id": string,
    "startTimeHour": number,
    "endTimeHour": number,
    "day": string
}

interface jobDetailModel{
    company_name: string, 
    role: string,
    start_date: string,
    end_date: string
}

function Profile(props: any) {

    const history = useHistory();

    const jwtToken = useSelector((state: RootState) => state.jwtToken)

    let isOwnProfile = true
    let id: string = '';
    if(props.location.state){
        isOwnProfile = props.location.state.isOwnProfile
        id = props.location.state.id

    }
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [domain, setDomain] = useState('');
    const [schedule, setSchedule] = useState({});

    useEffect(() => {
        let endpoint: string = 'profile'
        if(!isOwnProfile){
            endpoint='user/?id=' + id
        }
        fetch('http://localhost:8080/'+endpoint, {
            headers: {
                'Authorization': 'Bearer ' + jwtToken,
              }
        })
        .then((profileResponse) => {
                if(profileResponse.status === 200){
                    setProfileDetails(profileResponse)
                }else{
                    history.push("/login");
                }
            }
        )
        .catch((err) => console.log(err))
    }, [])



    function modifyScheduleFormat(scheduleList: Array<scheduleModel>) {
        let modifiedScheduleFormat: any = {};
        for(let i=0; i<scheduleList.length; i++){
            let schedule = scheduleList[i];
            modifiedScheduleFormat[schedule["day"]] = {
                "startTime": schedule["startTimeHour"],
                "endTime": schedule["endTimeHour"]
            }
        }
        return modifiedScheduleFormat;
    }

    async function setProfileDetails(profileResponse: any){
        let profileJsonBody = await profileResponse.json();
        setEmail(profileJsonBody["email"]);
        setName(profileJsonBody["name"]);
        if(profileJsonBody["domain"]){
            setDomain(profileJsonBody["domain"]);
        }
        setSchedule(modifyScheduleFormat(profileJsonBody["schedule"]));
    }

    //Mock data
    let intro = `I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    I have extensively worked with backend technologies.I have extensively worked with backend technologies.
    `
    let exp: Array<jobDetailModel> = [
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
              {exp.length>0?exp.map((job, i) => <JobDetail key={i} job={job}/>):<p><i> No job experience provided</i></p>}
          </div>
      </div>


        {Object.keys(schedule).length === 0? <></>:
      <div className="profile-availability-schedule-container">
          <div className="profile-availability-schedule-label">
            <p>Availability Schedule</p>
          </div>
          <div className="user-availability-schedule disable-pointer">
              <AvailabilitySchedule key={1} schedule={schedule} />
          </div>
      </div>
        }

    </div>
  );
}

export default Profile;
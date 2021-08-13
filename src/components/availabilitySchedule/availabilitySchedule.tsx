import React from 'react';
import './availabilityScheduleStyles.css'

interface AvailabilityScheduleModel {
  schedule?: {
    [day : string] : {
      startTime:number,
      endTime:number
    }
  },
  setSchedule?: Function
}

function AvailabilitySchedule (props:AvailabilityScheduleModel){
  let days: Array<string> = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
<>
    {days.map((day: string, index: number) => 
      
      

    <div className="availability-schedule-container" key={index}>
        <label className="availability-schedule-day-label">{day}</label>
        <input type="checkbox" className="availability-schedule-checkbox" defaultChecked={props.schedule?props.schedule[day]?true:false:false}></input>
        <div className="time-select-container">
          <select className="time-select">
            {props.schedule?props.schedule[day]?getTimeSelectOptions(props.schedule[day]["startTime"]):getTimeSelectOptions():getTimeSelectOptions()}
          </select>
          <span> to </span>
          <select className="time-select">
            {props.schedule?props.schedule[day]?getTimeSelectOptions(props.schedule[day]["endTime"]):getTimeSelectOptions():getTimeSelectOptions()}
          </select>
        </div>
    </div>

    )}
</>
  );
}

function getTimeSelectOptions(defaultTime:number = -1){
  let timeSelectOptions: Array<any> = [];
  for(let i=0; i<=23; i++){
    let formattedTime: string = "";
    if(i<10){
      formattedTime = "0"+i;
    }
    else{
      formattedTime = i.toString();
    }
    formattedTime += ":00";
    if(defaultTime === i){
      timeSelectOptions.push(<option key={i} selected>{formattedTime}</option>)
    }
    else{
      timeSelectOptions.push(<option key={i}>{formattedTime}</option>)
    }
    
  }
  return timeSelectOptions
}

export default AvailabilitySchedule;
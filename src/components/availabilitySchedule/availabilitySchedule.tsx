import React from 'react';
import './availabilityScheduleStyles.css'

function AvailabilitySchedule (){
  let days: Array<String> = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
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
    timeSelectOptions.push(<option>{formattedTime}</option>)
  }
  return (
<>
    {days.map((day: String, index: number) => 
      
      

    <div className="availability-schedule-container">
        <label className="availability-schedule-day-label">{day}</label>
        <input type="checkbox" className="availability-schedule-checkbox"></input>
        <div className="time-select-container">
          <select className="time-select">
            {timeSelectOptions}
          </select>
          <span> to </span>
          <select className="time-select">
            {timeSelectOptions}
          </select>
        </div>
    </div>

    )}
</>
  );
}

export default AvailabilitySchedule;
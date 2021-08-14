import React from 'react';
import './availabilityScheduleStyles.css'
import { RootState } from '../../reducers';
import {useSelector, useDispatch} from 'react-redux'
import {setSignupSchedule} from '../../actions/signupScheduleActions'

interface AvailabilityScheduleModel {
  schedule?: {
    [day : string] : {
      startTime:number,
      endTime:number
    }
  },
  scheduleState?: {
    [day : string] : {
      startTime:number,
      endTime:number,
      checked:Boolean
    }
    
  }
}

function AvailabilitySchedule (props:AvailabilityScheduleModel){

  const signupScheduleState:any = useSelector((state: RootState) => state.signupSchedule)
  const dispatch = useDispatch()

  function updateScheduleCheckbox(e:any, day: string){
    if(Object.keys(signupScheduleState).length>0){
      if(day in signupScheduleState){
        let updatedScheduleState = signupScheduleState;
        updatedScheduleState[day]["checked"] = e.target.checked
        dispatch(setSignupSchedule(updatedScheduleState));
        }
      else{
          let updatedScheduleState = signupScheduleState;
          updatedScheduleState[day] = {
            "checked": e.target.checked,
            "startTime": "00",
            "endTime": "00"
          }
          dispatch(setSignupSchedule(updatedScheduleState));
        }
      }
    else{
        let updatedScheduleState: any = {}
        updatedScheduleState[day] = {
          "checked": e.target.checked,
          "startTime": "00",
          "endTime": "00"
        }
        dispatch(setSignupSchedule(updatedScheduleState));
      }
  }

  function updateScheduleTime(day:string, timeRaw:string, isStartTime:Boolean){
   let updatedScheduleState = signupScheduleState
   let time:string = timeRaw[0] + timeRaw[1];
    if(day in updatedScheduleState){
      isStartTime?updatedScheduleState[day]["startTime"]=time:updatedScheduleState[day]["endTime"]=time
    }
    else{
      if(isStartTime){
        updatedScheduleState[day] = {
          "checked": false,
          "startTime": time,
          "endTime": 0
        }
      }else{
        updatedScheduleState[day] = {
          "checked": false,
          "startTime": 0,
          "endTime": time
        }
      }
    }
    dispatch(setSignupSchedule(updatedScheduleState));
  }

  let days: Array<string> = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
<>
    {days.map((day: string, index: number) => 
      
      

    <div className="availability-schedule-container" key={index}>

        <label className="availability-schedule-day-label">{day}</label>
        <input 
          type="checkbox" 
          className="availability-schedule-checkbox" 
          defaultChecked={props.schedule?
                                  props.schedule[day]? 
                                    true:false
                                  :false}
          onChange={(e) => {updateScheduleCheckbox(e, day)}
          }
        >
        </input>

        <div className="time-select-container">
          <select className="time-select" onChange={(e) => updateScheduleTime(day, e.target.value, true)}>
            {props.schedule?props.schedule[day]?getTimeSelectOptions(props.schedule[day]["startTime"]):getTimeSelectOptions():getTimeSelectOptions()}
          </select>
          <span> to </span>
          <select className="time-select" onChange={(e) => updateScheduleTime(day, e.target.value, false)}>
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
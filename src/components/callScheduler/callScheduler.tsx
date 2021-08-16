import React, { useState } from "react";
import ScheduleSelector from "../scheduleSelector/scheduleSelector";
import './callScheduler.css'


function CallScheduler(props:any){
    const {userName, schedule} = props

    const [activeDateItem, setActiveDateItem] = useState(0)
    const [activeTimeItem, setActiveTimeItem] = useState(-1)

    function confirmAppointment(){
        console.log(activeDateItem , activeTimeItem)
    }

    function dateSelectorComp() {
        let dateSelectorList: Array<any> = []
        let requiredDate = new Date();
        for(let i=1; i<8; i++){
            requiredDate.setDate(requiredDate.getDate() + 1)
            let month = requiredDate.toLocaleString('default', {month: 'short'});
            let day = requiredDate.toLocaleString('default', {weekday: 'short'});
            let isAvailable = false;
            if(day.toUpperCase() in schedule){
                isAvailable = true;
            }
            let data: string = requiredDate.getDate() + " " + month + ", " + day;
            dateSelectorList.push(<ScheduleSelector 
                                            idx={i} 
                                            content={data} 
                                            setActiveItem={setActiveDateItem} 
                                            activeItem={activeDateItem} 
                                            isAvailable={isAvailable}
                                    /> )
        }
        return dateSelectorList
    }

    function timeSelectorComp() {
        let timeSelectorList: Array<any> = []
        let selectedDate = new Date();
        selectedDate.setDate(selectedDate.getDate() + activeDateItem)
        let day = selectedDate.toLocaleString('default', {weekday: 'short'}).toUpperCase();
        let startTime = schedule[day]["startTime"]
        let endTime = schedule[day]["endTime"]
        for(let i = startTime; i<endTime; i++){
            let formattedTimeSlot = i + ":00 - " + (i+1) +":00"
            timeSelectorList.push(<ScheduleSelector 
                                        idx={i} 
                                        content={formattedTimeSlot} 
                                        setActiveItem={setActiveTimeItem} 
                                        activeItem={activeTimeItem} 
                                        isAvailable={true} 
                                        confirmAppointment={confirmAppointment}
                                    />)
        }
        return timeSelectorList
    }

    return (
        <div className="scheduler-container">
            <div className="call-with-intro"> Schedule call with {userName}</div>
            <div className="scheduler-select-date-time-container">
                <div className="scheduler-select-date">
                    <p className="select-date-heading">Select date</p>
                    {dateSelectorComp()}
                </div>
                <div className="scheduler-select-time">
                    {activeDateItem === 0 ? 
                        
                        <></>
                        : 
                        <div>
                            <p className="select-time-heading">Select time slot</p>
                            {timeSelectorComp()}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default CallScheduler;
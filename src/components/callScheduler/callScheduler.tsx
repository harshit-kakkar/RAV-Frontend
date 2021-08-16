import React, { useState } from "react";
import ScheduleSelector from "../scheduleSelector/scheduleSelector";
import './callScheduler.css'


function CallScheduler(props:any){
    const {userName, schedule} = props

    const [activeDateItem, setActiveDateItem] = useState(0)


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
            dateSelectorList.push(<ScheduleSelector idx={i} content={data} setActiveItem={setActiveDateItem} activeItem={activeDateItem} isAvailable={isAvailable}/> )
        }
        return dateSelectorList
    }

    return (
        <div className="scheduler-container">
            <div className="call-with-intro"> Schedule call with {userName}</div>
            <div className="scheduler-select-date-time-container">
                <div className="scheduler-select-date">
                    {dateSelectorComp()}
                </div>
                <div className="scheduler-select-time">
                    {activeDateItem === 0 ? 
                        
                        <></>
                        : 
                        <div>
                            
                        </div>
                
                }
                </div>
            </div>
        </div>
    )
}


export default CallScheduler;
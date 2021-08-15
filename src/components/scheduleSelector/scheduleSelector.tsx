import React, { useState } from "react";
import './scheduleSelector.css'


function ScheduleSelector(props:any){
    const {content} = props
    const [selectedOption, setSelectedOption] = useState(false)
    return (
        <div className={selectedOption?"schedule-selector-container selected-schedule": "schedule-selector-container"} onClick={() => setSelectedOption(true)}>
            {content}
        </div>
    )
}


export default ScheduleSelector;
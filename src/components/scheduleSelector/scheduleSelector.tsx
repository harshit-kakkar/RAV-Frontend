import React, { useState } from "react";
import './scheduleSelector.css'


function ScheduleSelector(props:any){
    const {idx, content, setActiveItem, activeItem, isAvailable} = props
    return (
        <div className={isAvailable?idx === activeItem?"schedule-selector-container selected-schedule": "schedule-selector-container": "schedule-selector-container inactive-item-selector"} onClick={() => {isAvailable?setActiveItem(idx): console.log("Not available")}}>
            {content}
        </div>
    )
}


export default ScheduleSelector;
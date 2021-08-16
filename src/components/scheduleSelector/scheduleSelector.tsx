import React from "react";
import './scheduleSelector.css'


function ScheduleSelector(props:any){
    const {idx, content, setActiveItem, activeItem, isAvailable, confirmAppointment} = props
    return (
        <div className="schedule-selector-with-button-div">
            <div className={isAvailable?idx === activeItem?"schedule-selector-container selected-schedule": "schedule-selector-container": "schedule-selector-container inactive-item-selector"} onClick={() => {isAvailable?setActiveItem(idx): console.log("Not available")}}>
                {content}
            </div>
            <div className="schedule-selector-confirm-button-container">
                {confirmAppointment? idx === activeItem?
                    <button onClick={() => confirmAppointment()} className="confirm-appointment-button">
                        Confirm
                    </button>
                    :
                    <div></div>
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}


export default ScheduleSelector;
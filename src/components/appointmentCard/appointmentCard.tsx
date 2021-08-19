import React from 'react'
import './appointmentCardStyles.css'

function AppointmentCard(prop: any){

    return (
        <div className="appointment-card-container">
            <div className="appointment-card-date-name-container">
                <div className="appointment-card-date-day-container">
                    <p className="appointment-card-date">{prop.date}</p>
                    <p className="appointment-card-day">{prop.day}</p>
                </div>
                <div className="appointment-card-name-container">
                    <p>with <b>{prop.name}</b></p>
                </div>
            </div>
            <div className="appointment-card-amount-paid">
                Rs 500
            </div>
            
        </div>
    )
}

export default AppointmentCard
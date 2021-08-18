import React from 'react'
import './appointmentCardStyles.css'

function AppointmentCard(){

    return (
        <div className="appointment-card-container">
            <div className="appointment-card-date-name-container">
                <div className="appointment-card-date-day-container">
                    <p className="appointment-card-date">26 July</p>
                    <p className="appointment-card-day">SUN</p>
                </div>
                <div className="appointment-card-name-container">
                    <p>with <b>Harshit</b></p>
                </div>
            </div>
            <div className="appointment-card-amount-paid">
                Rs 500
            </div>
            
        </div>
    )
}

export default AppointmentCard
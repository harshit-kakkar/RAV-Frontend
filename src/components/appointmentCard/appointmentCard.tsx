import React, { useEffect, useState } from 'react'
import './appointmentCardStyles.css'

function AppointmentCard(){

    return (
        <div className="appointment-card-container">
            <div>
                <p>26 July</p>
                <p>SUN</p>
            </div>
            <div>
                <p>with Harshit</p>
            </div>
            <div>
                Rs 500
            </div>
            
        </div>
    )
}

export default AppointmentCard
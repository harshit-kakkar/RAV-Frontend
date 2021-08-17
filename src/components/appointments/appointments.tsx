import React, { useEffect, useState } from 'react'
import AppointmentCard from '../appointmentCard/appointmentCard';
import './appointments.css'

import { RootState } from '../../reducers';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";

interface AppointmentModel{
    "id": string,
    "appointmentDate": string,
    "appointmentStartTime": number,
    "location": string
}

function Appointments(){

    const history = useHistory()

    const [appointmentsList, setAppointmentList] = useState([]);
    const [asMentor, setAsMentor] = useState(true)

    const jwtToken = useSelector((state: RootState) => state.jwtToken)

    useEffect(() => {
        fetch('http://localhost:8080/appointment?asMentor=false', {
            headers: {
                'Authorization': 'Bearer ' + jwtToken,
              }
        })
        .then((appointmentListRes) => {
            if(appointmentListRes.status === 200){
            changeAppointmentList(appointmentListRes)
            }else{
                history.push("/login")
            }
        })
    }, [])

    async function changeAppointmentList(appointmentList: any){
        let appointmentListJson= await appointmentList.json();
        console.log(appointmentListJson)
        setAppointmentList(Array.from(appointmentListJson));
    }

    function getAppointmentCardList(){
        let appointmentCards: any = []
        appointmentsList.map((appointment: AppointmentModel) => {
            appointmentCards.push(<AppointmentCard key={appointment.id} />)
        })
        return appointmentCards
    }

    return (
        <div className="appointments-list-container">
            <h1 className="appointments-list-heading">Your Appointments</h1>
            <div className="appointment-card-list-container">
                {appointmentsList.length !== 0?

                    getAppointmentCardList()
                    // <div></div>
                    :
                    <p>No appointments to display </p>
            
            }
            </div>
        </div>
    )
}

export default Appointments
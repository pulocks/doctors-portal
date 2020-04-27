import React, { useState, useEffect } from 'react';
import ShowAppointment from '../ShowAppointment/ShowAppointment';
import './DoctorsDashboard.css';

const DoctorsPage = () => {

    const [appointment, setAppointment] = useState([]);
    let len = 1;

    useEffect(() => {
    
        fetch('http://localhost:4200/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointment(data);
        })
    }, [])


    return (
        <div>
            <div className="dashboard">
                <h2>Total Appointments: {appointment.length > 0 && appointment.length}</h2>
            </div>
            {
                appointment.length > 0 &&
                <div className="dashboard-header">
                    <h5>Sl No</h5>
                    <h5>Date</h5>
                    <h5>Time</h5>
                    <h5>Name</h5>
                    <h5>Contact</h5>
                    <h5>Prescription</h5>
                    <h5>Action</h5>
                </div>
            }
            
            {
                appointment.length > 0 && 
                appointment.map(a => <ShowAppointment key={a.id} a={a} length={len++}></ShowAppointment>)
            }
        </div>
    );
};

export default DoctorsPage;
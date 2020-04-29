import React, { useState, useEffect } from 'react';
import './DoctorsPage.css';
import ReactCalendar from '../ReactCalendar/ReactCalendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';

const DoctorsPage = () => {
    const [date, setDate] = useState(new Date());
    const [option, setOption] = useState(false);
    const [appointment, setAppointment] = useState([]);


    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayString = `${day}/${month}/${year}`;
    const appointmentByDate = appointment.filter(a => a.date === dayString);

    const onChange = date => {
        setDate(date);
        setOption(true);
    }

    useEffect(() => {

        fetch('https://limitless-beach-33697.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointment(data);
        })
        
    }, [appointment])


    return (
        <div className="doctorsPage">
            <div className="left">
                <nav>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/doctors">Appointment</a>
                    <a href="/doctors">Patients</a>
                    <a href="/doctors">Prescriptions</a>
                    <a href="/doctors">Settings</a>
                </nav>
            </div>
            <div className="mid">
                <h3>Choose a date to show appointments</h3>
                <ReactCalendar onChange={onChange} date={date}></ReactCalendar>
            </div>
            <div className="right">
                {
                    option && appointmentByDate.length === 0 &&
                    <h4 style={{color: 'red'}}>No appointments found on {dayString}</h4> 
                }
                {
                    option && appointmentByDate.length > 0 &&
                    <h4 style={{color: 'green'}}>{appointmentByDate.length} appointments found on {dayString}</h4> 
                }
                {
                    option && appointmentByDate.length > 0 &&
                    <div className="header-content">
                        <h5>Name</h5><h5>Schedule</h5><h5>Action</h5>
                    </div>
                }
                {
                    option && appointmentByDate.length > 0 && 
                    appointmentByDate.map(a => <AppointmentsByDate key={a.id} a={a}></AppointmentsByDate>)
                }
            </div>
        </div>
    );
};

export default DoctorsPage;
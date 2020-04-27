import React, { useState, useContext } from 'react';
import './Home.css';
import image from '../../images/Mask Group 1.png';
import ReactCalendar from '../ReactCalendar/ReactCalendar';
import appointmentList from '../../AppointmentList';
import AllAppointment from '../AllAppointment/AllAppointment';
import { dateContext } from '../../App';

const Home = () => {

    let [myDate, myNewDate] = useContext(dateContext);
    const [calendar, setCalendar] = useState(false);
    const [option, setOption] = useState(false);
    const [validDate, setValidDate] = useState(true);
    const [date, setDate] = useState(new Date());
    const appointment = appointmentList;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const message = `${day}/${month}/${year}`;
    myNewDate(`${day}/${month}/${year}`);


    function checkValidDate(date) {
        const d1 = date.getDate();
        const m1 = date.getMonth() + 1;
        const y1 = date.getFullYear();
        
        const d2 = new Date().getDate();
        const m2 = new Date().getMonth() + 1;
        const y2 = new Date().getFullYear();

        if(y1 < y2) setValidDate(false);
        else if(y1 === y2 && m1 < m2) setValidDate(false);
        else if(y1 === y2 && m1 === m2 && d1 < d2) setValidDate(false);
        else setValidDate(true);
        
    }

    const onChange = date => {
        checkValidDate(date);
        setDate(date);
        setOption(true);
    }

    const showCalendar = () => {
        setCalendar(true);
    }

    return (
        <div>
            <div className="home">
                <div>
                    {
                        calendar ? <h2>Pick a Date for Your Appointment</h2> : <h1>Your New Smile Starts Here</h1>
                    }
                    <div className='button-calendar'>
                    {
                        
                        calendar ? <ReactCalendar onChange={onChange} date={date}></ReactCalendar> : 
                        <button className="main-button" onClick={showCalendar}>GET APPOINTMENT</button>
                        
                    }
                    </div>
                    
                </div>
                <div>
                    <img src={image} alt=""/>
                </div>
            </div>
            <div style={{display: validDate ? 'block':'none'}} className="appointment-list">
                {
                    option && <h1>Available Appointments on {message}</h1>
                }
                <div className="row">
                {
                    option && appointment.map(a => <AllAppointment key={a.id} a={a}>
                                                    </AllAppointment>)
                }
                </div>
            
            </div>
            {
                <h1 style={{display: validDate ? 'none':'block'}} className="invalid-date">Choose a valid Date...</h1>
            }
        </div>
    );
};

export default Home;
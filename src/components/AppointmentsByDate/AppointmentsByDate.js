import React from 'react';
import './AppointmentsByDate.css';

const AppointmentsByDate = (props) => {

    const {name, time} = props.a;

    return (
        <div className="appointmentsByDate">
            <h6>{name}</h6>
            <h6>{time}</h6>
            <button>Not Visited</button>
        </div>
    );
};

export default AppointmentsByDate;
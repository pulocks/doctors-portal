import React from 'react';
import './AllAppointment.css';
import { Link } from 'react-router-dom';

const AllAppointment = (props) => {

    const {name, time} = props.a;
    
    return (
        
        <div className="col-md-4">
            <h3>{name}</h3>
            <h4>{time}</h4>
            <h6>10 spaces available</h6>
            <Link to={`/appointment/${name}`}>
            <button className="main-button">Book Appointment</button>
            </Link>
        </div>
        
    );
};

export default AllAppointment;
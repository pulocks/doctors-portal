import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect} from 'react';
import './ViewAppointment.css';


const ViewAppointment = () => {

    const {key} = useParams();

    const [viewById, setViewById] = useState({});

    useEffect(() => {

        fetch('https://limitless-beach-33697.herokuapp.com/views/' + key)
        .then(res => res.json())
        .then(data => {
            setViewById(data);
        });
        
    }, [key]);

    const{name, phone, email, time, date} = viewById;

    return (
        <div className="view-appointment">
            <h4>Patient's Name: {name}</h4>
            <p>Phone No: {phone}</p>
            <p>Email: {email}</p>
            <p>Wants to visit at {time} on {date}</p>
        </div>
    );
};

export default ViewAppointment;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect} from 'react';
import './ViewAppointment.css';


const ViewAppointment = () => {

    const {key} = useParams();
    const [view, setView] = useState({});

    useEffect(() => {
        fetch('http://localhost:4200/views/' + key)
        .then(res => res.json())
        .then(data => {
            setView(data);
        })
    }, [key])

    const {name, phone, email, time, date} = view;

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
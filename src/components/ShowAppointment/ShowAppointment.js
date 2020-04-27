import React from 'react';
import './ShowAppointment.css';
import { Link } from 'react-router-dom';

const ShowAppointment = (props) => {

    const {id, date, time, name, phone} = props.a;
    
    return (
        <div>
            <div className="show-appointment">
                <h6>{props.length}</h6>
                <h6>{date}</h6>
                <h6>{time}</h6>
                <h6>{name}</h6>
                <h6>{phone}</h6>
                <Link to={`/viewAppointment/${id}`}><button>View</button></Link>
                <button>Pending</button>
            </div>
        </div>
    );
};

export default ShowAppointment;
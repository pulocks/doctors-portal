import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './AddAppointment.css';
import { dateContext } from '../../App';

const AddAppointment = () => {
    const {name} = useParams();
    const [myDate, myNewDate] = useContext(dateContext);
    const [id, setId] = useState(0);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const num = Date.now();
        data.id = num;
        fetch('http://localhost:4200/allAppointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setId(data.id);
        })
    }

    return (
        <div>

            <form style={{display: id ? 'none' : 'block'}} className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>{name}</h3>
                <br/>

                <select id="time" name="time" defaultValue={'default'} ref={register({ required: true })}>
                    <option value="default" disabled>Select Time</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                </select>

                <br/>

                <input name="name" ref={register({ required: true })} placeholder="Your Name"/>
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" ref={register({ required: true })} placeholder="Your Email"/>
                {errors.email && <span className="error">Email is required</span>}

                <input name="phone" ref={register({ required: true })} placeholder="Phone"/>
                {errors.phone && <span className="error">Phone number is required</span>}

                <input name="date" ref={register({ required: true })} defaultValue={myDate} placeholder="dd/mm/yyyy"/>
                {errors.date && <span className="error">Date is required</span>}

                <input type="submit"/>

            </form>
            <h2 style={{display: id ? 'block' : 'none'}} className="thankYouMessage">
                Thank you for making an Appointment. Your Appointment id is {id}</h2>
        </div>
    );
};

export default AddAppointment;
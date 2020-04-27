import React from 'react';
import Calendar from 'react-calendar';
import './ReactCalendar.css';

const ReactCalendar = (props) => {
    
    return (
        <div className="calendar">
            <Calendar onChange={props.onChange} value={props.date}></Calendar>
        </div>
    );
};


export default ReactCalendar;
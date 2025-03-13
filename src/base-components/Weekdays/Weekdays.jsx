import React from 'react';
import PropTypes from 'prop-types';

import './Weekdays.scss';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Weekdays = ({today}) => {
    return (
        <div className="weekdays">
            {DAYS.map((day, index) => <span className={index === today ? 'active' : ''} key={index}>{day}</span>)}
        </div>
    )
}

Weekdays.propTypes = {
    day: PropTypes.number
}

export default Weekdays;
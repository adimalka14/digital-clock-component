import React from 'react';
import PropTypes from 'prop-types';

import './DigitalClock.scss';
import DigitalTime from '../DigitalTime/DigitalTime.jsx';
import { Weekdays, AmPm } from '../../base-components';
import { useClockTime } from '../../hooks';

const DigitalClock = ({color = 'light'}) => {
    const time = useClockTime();

    const hours = (time.getHours() % 12).toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const day = time.getDay();
    const amPm = time.getHours() >= 12 ? 'PM' : 'AM';

    return (
        <div className={`digital-clock ${color}`} style={{ height: '100px', width: '300px' }}>
            <Weekdays today={day} />
            <DigitalTime hours={hours} minutes={minutes} seconds={seconds} color={color} />
            <AmPm amPm={amPm} />
        </div>
    );
};

DigitalClock.propTypes = {
    color: PropTypes.oneOf(['light', 'dark'])
}

export default DigitalClock;
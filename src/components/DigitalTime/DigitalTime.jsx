import React from 'react';
import PropTypes from 'prop-types';

import './DigitalTime.scss';
import { DigitalNumber } from '../../base-components';

const DigitalTime = ({ hours, minutes, seconds }) => {
    return (
        <div className={`digital-time`}>
            <DigitalNumber number={+hours[0]} />
            <DigitalNumber number={+hours[1]} />
            <span className="colon">:</span>
            <DigitalNumber number={+minutes[0]} />
            <DigitalNumber number={+minutes[1]} />
            <span className="colon">:</span>
            <DigitalNumber number={+seconds[0]} />
            <DigitalNumber number={+seconds[1]} />
        </div>
    );
};

DigitalTime.propTypes = {
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
};

export default DigitalTime;

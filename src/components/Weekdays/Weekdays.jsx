import React from 'react';
import PropTypes from 'prop-types';

import './Weekdays.scss';
import { VisibilityText } from '../../base-components/index.js';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Weekdays = ({ today }) => {
    return (
        <div className="weekdays">
            {DAYS.map((day, index) =>
                <VisibilityText key={day}
                                text={day}
                                visibility={index === today ? 'visible' : 'partially'}>
                </VisibilityText>)}
        </div>
    );
};

Weekdays.propTypes = {
    day: PropTypes.number,
};

export default Weekdays;
import React from 'react';
import PropTypes from 'prop-types';

import './DigitalClock.scss';
import DigitalTime from '../DigitalTime/DigitalTime.jsx';
import Weekdays from '../Weekdays/Weekdays.jsx';
import AmPm from '../AmPm/AmPm.jsx';
import { useClockTime } from '../../hooks';
import { VisibilityText } from '../../base-components/index.js';

const DigitalClock = ({
    size = 250,
    bgColor = '#d3d3d3',
    fgColor = '#232323',
    hoverColor = 'rgba(197,197,197,0.44)',
    format = '24h',
    timezone,
}) => {
    const { time, title } = timezone ? useClockTime(timezone) : useClockTime();

    const hours =
        format === '24h'
            ? time.getHours().toString().padStart(2, '0')
            : (time.getHours() % 12).toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const day = time.getDay();
    const amPm = time.getHours() >= 12 ? 'PM' : 'AM';

    return (
        <div
            className={`digital-clock`}
            style={{
                '--clock-size': `${size}px`,
                '--clock-bg': bgColor,
                '--clock-fg': fgColor,
                '--clock-hover': hoverColor,
                // only add height if timezone is set:
                ...(timezone && title ? { height: 'calc(var(--clock-size) * 0.4)' } : {}),
            }}
        >
            <div className={'top'}>
                {timezone && title ? <VisibilityText text={title} visibility={'visible'} /> : ''}
                <Weekdays today={day} />
            </div>
            <div className={'bottom'}>
                <DigitalTime hours={hours} minutes={minutes} seconds={seconds} />
                {format === '12h' ? <AmPm amPm={amPm} /> : ''}
            </div>
        </div>
    );
};

DigitalClock.propTypes = {
    size: PropTypes.number,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    hoverColor: PropTypes.string,
    format: PropTypes.oneOf(['24h', '12h']),
    timezone: PropTypes.string,
};

export default DigitalClock;

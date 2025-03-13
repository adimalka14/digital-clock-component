import React from 'react';
import PropTypes from 'prop-types';

import './DigitalNumber.scss';

const NUMBERS_MAP = {
    //  top,  tl,   tr,   br,   bl,   bottom, mid
    0: [true, true, true, true, true, true, false],
    1: [false, false, true, true, false, false, false],
    2: [true, false, true, false, true, true, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, false, true],
    5: [true, true, false, true, false, true, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, true, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
};

const DigitalNumber = ({ number = 0 }) => {
    return (
        <div className="digital-number">
            <span className={`top horizontal ${NUMBERS_MAP[number][0]? 'on' : 'off'}`}></span>
            <span className={`top left vertical ${NUMBERS_MAP[number][1]? 'on' : 'off'}`}></span>
            <span className={`top right vertical ${NUMBERS_MAP[number][2]? 'on' : 'off'}`}></span>
            <span className={`bottom right vertical ${NUMBERS_MAP[number][3]? 'on' : 'off'}`}></span>
            <span className={`bottom left vertical ${NUMBERS_MAP[number][4]? 'on' : 'off'}`}></span>
            <span className={`bottom horizontal ${NUMBERS_MAP[number][5]? 'on' : 'off'}`}></span>
            <span className={`mid horizontal ${NUMBERS_MAP[number][6]? 'on' : 'off'}`}></span>
        </div>
    );
};

DigitalNumber.propTypes = {
    number: PropTypes.number,
};

export default DigitalNumber;
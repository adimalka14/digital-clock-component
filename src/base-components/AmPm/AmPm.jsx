import React from 'react';
import PropTypes from 'prop-types';

import './AmPm.scss';

const AmPm = ({amPm}) => {
    const isAm = amPm === 'AM';

    return (
        <div className='ampm'>
            <span className={isAm? 'active' : ''}>AM</span>
            <span className={isAm? '' : 'active'}>PM</span>
        </div>
    )
}

AmPm.propTypes = {
    amPm: PropTypes.string
}

export default AmPm
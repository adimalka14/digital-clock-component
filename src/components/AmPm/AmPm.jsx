import React from 'react';
import PropTypes from 'prop-types';

import './AmPm.scss';
import { VisibilityText } from '../../base-components/index.js';

const AmPm = ({amPm}) => {
    const isAm = amPm === 'AM';

    return (
        <div className='ampm'>
            <VisibilityText text={'AM'} visibility={isAm ? 'visible' : 'hidden' }></VisibilityText>
            <VisibilityText text={'PM'} visibility={isAm ? 'hidden' : 'visible'}></VisibilityText>
        </div>
    )
}

AmPm.propTypes = {
    amPm: PropTypes.string
}

export default AmPm
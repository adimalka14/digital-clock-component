import React from 'react';
import PropTypes from 'prop-types';

const VISIBILITY = {
    visible : '1.0',
    hidden : '0',
    partially: '0.2'
}

export default function VisibilityText({text = '', visibility = 'visible'}) {
    return <span style={{opacity: VISIBILITY[visibility]}}>{text}</span>
}

VisibilityText.PropTypes = {
    text: PropTypes.string,
    visibility: PropTypes.oneOf(['hidden', 'partially', 'visible']),
}

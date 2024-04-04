import React from 'react';
import PropTypes from 'prop-types';
import './TechStackName.css';

const TechStackName = ({ onClick, borderStyle, name }) => {

    return (
        <h2
            className='tech-stack-name'
            onClick={onClick}
            style={borderStyle}
        >
            {name}
        </h2>
    );

};

TechStackName.propTypes = {
    onClick: PropTypes.func.isRequired,
    borderStyle: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

export default TechStackName;
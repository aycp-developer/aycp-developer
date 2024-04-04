import React from 'react';
import PropTypes from 'prop-types';
import './Technology.css';

const Technology = ({ icon, name }) => {

    return (
        <div className='technology'>
            {icon}
            <span className='name'>
                {name}
            </span>
        </div>
    );

};

Technology.propTypes = {
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

export default Technology;
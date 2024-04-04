import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, backgroundColor, color, icon, text }) => {

    return (
        <button
            className='button'
            onClick={onClick}
            style={{ backgroundColor, color }}
        >
            <div className='icon-container'>
                {icon}
            </div>
            {text}
        </button>
    );

};

Button.propTypes = {
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.object,
    text: PropTypes.string,
};

export default Button;
import React from 'react';
import PropTypes from 'prop-types';
import './TechStack.css';
import { Technology } from '../../exports/exports';

const TechStack = ({ icons, gap }) => {

    return (
        <div
            className='tech-stack'
            style={{ gap }}
        >
            {icons.map((item, index) => (
                <Technology
                    key={index}
                    icon={item.icon}
                    name={item.name}
                />
            ))}
        </div>
    );

};

TechStack.propTypes = {
    icons: PropTypes.array.isRequired,
    gap: PropTypes.string.isRequired
};

export default TechStack;
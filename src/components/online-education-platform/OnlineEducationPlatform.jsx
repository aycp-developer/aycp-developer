import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './OnlineEducationPlatform.css';
import { ThemeContext } from '../../exports/exports';
import { List } from 'react-bootstrap-icons';

const OnlineEducationPlatform = ({ logo, name }) => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;

    return (
        <div
            className='online-education-platform'
            style={{ border: (themeState == 'dark') ? '0.1rem solid white' : '0.1rem solid black' }}
        >
            <div className='list-icon-container'>
                <List height='100%' width='100%' />
            </div>
            {logo}
            <span
                className='name'
                style={{ color: (themeState == 'dark') ? 'white' : 'black' }}
            >
                {name}
            </span>
        </div>
    );

};

OnlineEducationPlatform.propTypes = {
    logo: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

export default OnlineEducationPlatform;
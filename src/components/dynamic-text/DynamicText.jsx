import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DynamicText.css';
import { Context } from '../../exports/exports';
import Typewriter from 'typewriter-effect/dist/core';

const DynamicText = ({ strings, autoStart, loop, delay, deleteSpeed }) => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const textRef = useRef();

    useEffect(() => {
        //eslint-disable-next-line
        const typewriter = new Typewriter(textRef.current, {
            strings,
            autoStart,
            loop,
            delay,
            deleteSpeed
        });
    }, []);

    return (
        <span
            className='dynamic-text'
            ref={textRef}
            style={{color: (themeState == 'dark') ? 'white' : 'black'}}
        />
    );

};

DynamicText.propTypes = {
    strings: PropTypes.string.isRequired,
    autoStart: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    delay: PropTypes.number.isRequired,
    deleteSpeed: PropTypes.number
};

export default DynamicText;
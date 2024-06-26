import React, { useContext } from 'react';
import './Themes.css';
import { ThemeContext } from '../../exports/exports';
import { MoonFill, SunFill } from 'react-bootstrap-icons';

const Themes = () => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const themeDispatch = context.themeDispatch;

    const lightThemeDispatcher = () => {
        themeDispatch({
            type: 'light',
            payload: {
                theme: 'light'
            }
        });
    };

    const darkThemeDispatcher = () => {
        themeDispatch({
            type: 'dark',
            payload: {
                theme: 'dark'
            }
        });
    };

    const themesDispatcher = (e) => {
        e.preventDefault();

        if (themeState == 'dark') {
            lightThemeDispatcher();
        } else {
            darkThemeDispatcher();
        }
    };

    return (
        <div className='themes'>
            {
                (themeState == 'dark') ?
                    (
                        <button
                            className='light-theme-button'
                            onClick={themesDispatcher}
                        >
                            <div className='sun-fill-icon-container'>
                                <SunFill height='100%' width='100%' />
                            </div>
                            CLARO
                        </button>

                    ) :
                    (
                        <button
                            className='dark-theme-button'
                            onClick={themesDispatcher}
                        >
                            <div className='moon-fill-icon-container'>
                                <MoonFill height='100%' width='100%' />
                            </div>
                            OSCURO
                        </button>
                    )
            }
        </div>
    );

};

export default Themes;
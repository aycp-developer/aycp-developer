import React, { useContext, useState } from 'react';
import './Navbar.css';
import { darkLogo, lightLogo } from '../../assets/aycp.developer-logo/aycpDeveloperLogo';
import { ToggleNavbarContext, ThemeContext, Themes } from '../../exports/exports';
import { Link } from 'react-router-dom';
import { GridFill, X } from 'react-bootstrap-icons';

const Navbar = () => {

    const toggleNavbarContext = useContext(ToggleNavbarContext);
    const themeContext = useContext(ThemeContext);
    const toggleNavbarDispatch = toggleNavbarContext.toggleNavbarDispatch;
    const themeState = themeContext.themeState.themeState;
    const persistedButtonUnderlineStyle = localStorage.getItem('buttonUnderlineStyle');
    const [buttonUnderlineStyle, setButtonUnderlineStyle] = useState(persistedButtonUnderlineStyle);
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const routes = [
        {
            functionValue: 'who-am-i',
            to: '/quien-soy',
            linkName: '¿Quién soy?'
        },
        {
            functionValue: 'formation',
            to: '/formacion',
            linkName: 'Formación'
        },
        {
            functionValue: 'technologies',
            to: '/tecnologias',
            linkName: 'Tecnologías'
        },
        {
            functionValue: 'projects',
            to: '/proyectos',
            linkName: 'Proyectos'
        },
        {
            functionValue: 'contact-me',
            to: '/contactame',
            linkName: 'Contáctame'
        }
    ];

    const persistButtonUnderlineStyle = (buttonUnderlineStyle) => {
        localStorage.setItem('buttonUnderlineStyle', buttonUnderlineStyle);
        const persistedButtonUnderlineStyle = localStorage.getItem('buttonUnderlineStyle');
        setButtonUnderlineStyle(persistedButtonUnderlineStyle);
        setToggleNavbar(false);
    };

    const getButtonUnderlineStyle = (buttonName) => {
        return (
            (buttonUnderlineStyle == buttonName) ?
                { textDecorationLine: 'underline', textDecorationColor: (themeState == 'dark') ? 'white' : 'black' } :
                {}
        );
    };

    const activeToggleNavbarDispatcher = () => {
        toggleNavbarDispatch({
            type: 'active',
            payload: {
                toggleNavbar: true
            }
        });

        setToggleNavbar(true);
    };

    const inactiveToggleNavbarDispatcher = () => {
        toggleNavbarDispatch({
            type: 'inactive',
            payload: {
                toggleNavbar: false
            }
        });

        setToggleNavbar(false);
    };

    return (
        <div className={`navbar ${themeState}`}>
            <div className='desktop-navbar-container'>
                <div
                    className='root-logo-container'
                    onClick={() => persistButtonUnderlineStyle('')}
                >
                    <Link className='root' to='/'>
                        {
                            (themeState == 'dark') ?
                                (
                                    <img className='logo' src={darkLogo} alt='AYCP DEVELOPER' />
                                ) :
                                (
                                    <img className='logo' src={lightLogo} alt='AYCP DEVELOPER' />
                                )
                        }
                    </Link>
                </div>
                {
                    routes.map((item, index) => (
                        <div
                            key={index}
                            className='routes-container'
                            onClick={() => persistButtonUnderlineStyle(item.functionValue)}
                            style={getButtonUnderlineStyle(item.functionValue)}
                        >
                            <Link
                                className='route'
                                to={item.to}
                                style={{ color: (themeState == 'dark') ? 'white' : 'black' }}
                            >
                                {item.linkName}
                            </Link>
                        </div>
                    ))
                }
                <div className='themes-container'>
                    <Themes />
                </div>
            </div>
            <div className='mobile-navbar-container'>
                {
                    (!toggleNavbar) ?
                        (
                            <div className='grid-fill-icon-container'>
                                <GridFill
                                    onClick={() => activeToggleNavbarDispatcher()}
                                    height='100%'
                                    width='100%'
                                />
                            </div>
                        ) :
                        (
                            (
                                <div className='mobile-navbar'>
                                    <div className='x-icon-container'>
                                        <X
                                            onClick={() => inactiveToggleNavbarDispatcher()}
                                            height='100%'
                                            width='100%'
                                        />
                                    </div>
                                    <div
                                        className='routes-themes-container'
                                        style={{
                                            backgroundColor: (themeState == 'dark') ? 'black' : 'white',
                                            color: (themeState == 'dark') ? 'white' : 'black'
                                        }}
                                    >
                                        {
                                            routes.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className='routes-container'
                                                    onClick={() => persistButtonUnderlineStyle(item.functionValue)}
                                                    style={getButtonUnderlineStyle(item.functionValue)}
                                                >
                                                    <Link
                                                        className='route'
                                                        to={item.to}
                                                        style={{ color: (themeState == 'dark') ? 'white' : 'black' }}
                                                    >
                                                        {item.linkName}
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                        <div className='themes-container'>
                                            <Themes />
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                }
            </div>
        </div>
    );

};

export default Navbar;
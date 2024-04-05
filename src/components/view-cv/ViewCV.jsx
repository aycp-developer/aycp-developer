import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ViewCV.css';
import { ThemeContext } from '../../exports/exports';
import { EyeFill, X, ZoomIn, ZoomOut } from 'react-bootstrap-icons';

const ViewCV = ({ backgroundColor, color, cvImage }) => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const [cvFileWindow, setCvFileWindow] = useState(false);
    const [scale, setScale] = useState(1);
    const [marginAtTheTopOfTheImage, setMarginAtTheTopOfTheImage] = useState(null);

    const showCvWindow = () => {
        setCvFileWindow(true);
    };

    const hideCvWindow = () => {
        setCvFileWindow(false);
    };

    const zoomIn = () => {
        setScale(scale + 0.4);
        setMarginAtTheTopOfTheImage(marginAtTheTopOfTheImage + 58);

        if (scale === 1) {
            setMarginAtTheTopOfTheImage(89);
        }

        if ((scale >= 2.5) && (marginAtTheTopOfTheImage >= 262)) {
            setScale(2.6);
            setMarginAtTheTopOfTheImage(263);
        }
    };

    const zoomOut = () => {
        setScale(scale - 0.4);
        setMarginAtTheTopOfTheImage(marginAtTheTopOfTheImage - 58);

        if ((scale <= 1.1) && (marginAtTheTopOfTheImage <= 32)) {
            setScale(1);
            setMarginAtTheTopOfTheImage(31);
        }
    };

    return (
        <div className='view-cv'>
            <button
                className='view-cv-button'
                onClick={showCvWindow}
                style={{ backgroundColor, color }}
            >
                <div className='eye-fill-icon-container'>
                    <EyeFill height='100%' width='100%' />
                </div>
                VISUALIZAR CV
            </button>
            {
                (cvFileWindow) &&
                (<div className='cv-file-window-container'>
                    <img
                        className='cv-image'
                        src={cvImage}
                        style={{
                            transform: `scale(${scale})`,
                            marginTop: `${marginAtTheTopOfTheImage}vh`,
                        }}
                        alt='AYCP Developer CV'
                    />
                    <div className='x-icon-container'>
                        <X
                            onClick={hideCvWindow}
                            style={{
                                backgroundColor: (themeState == 'dark') ? 'white' : 'black',
                                color: (themeState == 'dark') ? 'black' : 'white',
                                borderRadius: '0.4rem'
                            }}
                            height='100%'
                            width='100%'
                        />
                    </div>
                    <div className='zoom-in-icon-container'>
                        <ZoomIn
                            onClick={zoomIn}
                            style={{
                                backgroundColor: (themeState == 'dark') ? 'white' : 'black',
                                color: (themeState == 'dark') ? 'black' : 'white',
                                borderRadius: '0.4rem'
                            }}
                            height='100%'
                            width='100%'
                        />
                    </div>
                    <div className='zoom-out-icon-container'>
                        <ZoomOut
                            onClick={zoomOut}
                            style={{
                                backgroundColor: (themeState == 'dark') ? 'white' : 'black',
                                color: (themeState == 'dark') ? 'black' : 'white',
                                borderRadius: '0.4rem'
                            }}
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>)
            }
        </div>
    );

};

ViewCV.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cvImage: PropTypes.string.isRequired
};

export default ViewCV;
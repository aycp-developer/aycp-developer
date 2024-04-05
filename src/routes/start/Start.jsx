import React, { useContext } from 'react';
import './Start.css';
import { ThemeContext, Image, DynamicText, GetToKnowMe, ViewCV, DownloadCV } from '../../exports/exports';
import profilePicture from '../../assets/profile-picture/profilePicture';
import cvImage from '../../assets/cv-image/cvImage';

const Start = () => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const startParagraph = '¡Hola, me llamo Alexander Yosimar Cervantes Pineda y soy Desarrollador FullStack!';

    return (
        <div className={`start ${themeState}`}>
            <div className='profile-picture-container'>
                <Image
                    boxShadow={true}
                    image={profilePicture}
                    alt='AYCP Developer'
                />
            </div>
            <div className='start-paragraph-view-cv-download-cv-container'>
                <div className='start-paragraph-container'>
                    <DynamicText
                        strings={startParagraph}
                        autoStart={true}
                        loop={true}
                        delay={76}
                        deleteSpeed={10}
                    />
                </div>
                <div className='get-to-know-me-profile-picture-view-cv-download-cv-container'>
                    <GetToKnowMe
                        backgroundColor={(themeState == 'dark') ? 'white' : 'black'}
                        color={(themeState == 'dark') ? 'black' : 'white'}
                    />
                    <ViewCV
                        backgroundColor={(themeState == 'dark') ? 'white' : 'black'}
                        color={(themeState == 'dark') ? 'black' : 'white'}
                        cvImage={cvImage}
                    />
                    <DownloadCV
                        backgroundColor={(themeState == 'dark') ? 'white' : 'black'}
                        color={(themeState == 'dark') ? 'black' : 'white'}
                        cvFile={cvImage}
                        cvName='cv.aycp.developer.png'
                    />
                </div>
            </div>
        </div>
    );

};

export default Start;
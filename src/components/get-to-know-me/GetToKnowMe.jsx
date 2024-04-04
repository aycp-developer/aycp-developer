import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './GetToKnowMe.css';
import { Context, Image } from '../../exports/exports';
import profilePicture from '../../assets/profile-picture/profilePicture';
import { FilePerson, X } from 'react-bootstrap-icons';

const GetToKnowMe = ({ backgroundColor, color }) => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const [profilePictureWindow, setProfilePictureWindow] = useState(false);

    return (
        <div className='get-to-know-me'>
            <button
                className='get-to-know-me-button'
                onClick={() => setProfilePictureWindow(true)}
                style={{ backgroundColor, color }}
            >
                <div className='file-person-icon-container'>
                    <FilePerson height='100%' width='100%' />
                </div>
                ¡CONÓCEME!
            </button>
            {
                (profilePictureWindow) &&
                (
                    <div className='x-icon-profile-picture-container'>
                        <div className='x-icon-container'>
                            <X
                                onClick={() => setProfilePictureWindow(false)}
                                style={{
                                    backgroundColor: (themeState == 'dark') ? 'white' : 'black',
                                    color: (themeState == 'dark') ? 'black' : 'white',
                                    borderRadius: '0.4rem'
                                }}
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='profile-picture-container'>
                            <Image
                                boxShadow={true}
                                image={profilePicture}
                                alt='AYCP Developer'
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );

};

GetToKnowMe.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default GetToKnowMe;
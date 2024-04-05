import React, { useContext } from 'react';
import './Formation.css';
import { ThemeContext, TitleParagraph, OnlineEducationPlatform } from '../../exports/exports';
import { openbootcamp, freecodecamp, udemy, edx, youtube } from '../../assets/online-education-platforms-images/onlineEducationPlatformsImages';
import { PersonWorkspace, BadgeHd } from 'react-bootstrap-icons';

const Formation = () => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const formationParagraph = `A lo largo de mi aprendizaje me he formado en distintas plataformas de educación en línea,
    ya que, como buen autodidacta, disfruto mucho aprender por mi propia cuenta.`;

    const onlineEducationPlatforms = [
        {
            icon: <img
                className='online-education-platform-logo'
                src={openbootcamp}
                style={{ height: '74%', width: '10%' }}
                alt='OpenBootcamp Logo'
            />,
            name: 'OpenBootcamp'
        },
        {
            icon: <img
                className='online-education-platform-logo'
                src={freecodecamp}
                style={{ height: '68%', width: '12%' }}
                alt='FreeCodeCamp Logo'
            />,
            name: 'FreeCodeCamp'
        },
        {
            icon: <img
                className='online-education-platform-logo'
                src={udemy}
                style={{ height: '65%', width: '11%' }}
                alt='Udemy Logo'
            />,
            name: 'Udemy'
        },
        {
            icon: <img
                className='online-education-platform-logo'
                src={edx}
                style={{ height: '74%', width: '18%' }}
                alt='Edx Logo'
            />,
            name: 'Edx'
        },
        {
            icon: <img
                className='online-education-platform-logo'
                src={youtube}
                style={{ height: '74%', width: '14%' }}
                alt='YouTube Logo'
            />,
            name: 'YouTube'
        },
    ];

    return (
        <div className={`formation ${themeState}`}>
            <div className='formation-title-paragraph-icons-container'>
                <div className='formation-title-paragraph-container'>
                    <TitleParagraph
                        title='Formación'
                        paragraph={formationParagraph}
                    />
                </div>
                <div className='icons-container'>
                    <div className='person-workspace-icon-container'>
                        <PersonWorkspace height='100%' width='100%' />
                    </div>
                    <div className='badge-hd-icon-container'>
                        <BadgeHd height='100%' width='100%' />
                    </div>
                </div>
            </div>
            <div className='online-education-platforms-container'>
                {onlineEducationPlatforms.map((item, index) => (
                    <OnlineEducationPlatform
                        key={index}
                        logo={item.icon}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    );

};

export default Formation;
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';
import { ThemeContext, ProjectCover } from '../../exports/exports';
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';

const Carousel = ({ projectCovers }) => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const length = 4;
    const [projectCoverIndex, setProjectCoverIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = projectCoverIndex - 1;

        setProjectCoverIndex((newIndex < 0) ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = projectCoverIndex + 1;

        setProjectCoverIndex((newIndex >= length) ? 0 : newIndex);
    };

    return (
        <div
            className='carousel'
            style={{ border: `${(themeState == 'dark') ? '0.15rem solid white' : '0.15rem solid black'}` }}
        >
            <button
                className='previous-button'
                onClick={handlePrevious}
                style={{
                    backgroundColor: (themeState == 'dark') ? 'black' : 'white',
                    color: (themeState == 'dark') ? 'white' : 'black'
                }}
            >
                <div className='arrow-left-short-icon-container'>
                    <ArrowLeftShort height='100%' width='100%' />
                </div>
            </button>
            <div className='project-cover-container'>
                {(projectCoverIndex === 0) && (<ProjectCover image={projectCovers[0].imageLink} alt='..' />)}
                {(projectCoverIndex === 1) && (<ProjectCover image={projectCovers[1].imageLink} alt='..' />)}
                {(projectCoverIndex === 2) && (<ProjectCover image={projectCovers[2].imageLink} alt='..' />)}
                {(projectCoverIndex === 3) && (<ProjectCover image={projectCovers[3].imageLink} alt='..' />)}
            </div>
            <button
                className='next-button'
                onClick={handleNext}
                style={{
                    backgroundColor: (themeState == 'dark') ? 'black' : 'white',
                    color: (themeState == 'dark') ? 'white' : 'black'
                }}
            >
                <div className='arrow-right-short-icon-container'>
                    <ArrowRightShort height='100%' width='100%' />
                </div>
            </button>
        </div>
    );

};

Carousel.propTypes = {
    projectCovers: PropTypes.array.isRequired
};

export default Carousel;
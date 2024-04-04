import React from 'react';
import PropTypes from 'prop-types';
import './TitleParagraph.css';
import { DynamicText } from '../../exports/exports';

const TitleParagraph = ({ title, paragraph }) => {

    return (
        <div className='title-paragraph'>
            <div className='title-container'>
                <DynamicText
                    strings={title}
                    autoStart={true}
                    loop={false}
                    delay={250}
                />
            </div>
            <div className='paragraph-container'>
                <DynamicText
                    strings={paragraph}
                    autoStart={true}
                    loop={false}
                    delay={45}
                />
            </div>
        </div>
    );

};

TitleParagraph.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
};

export default TitleParagraph;
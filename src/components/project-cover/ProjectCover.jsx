import React from 'react';
import PropTypes from 'prop-types';

const ProjectCover = ({ image, alt }) => {

    return (
        <img
            className='project-cover'
            src={image}
            alt={alt}
        />
    );

};

ProjectCover.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default ProjectCover;
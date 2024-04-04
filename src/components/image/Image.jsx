import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Image.css';
import { Context } from '../../exports/exports';

const Image = ({ boxShadow, image, alt }) => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const [imageLoaded, setImageLoaded] = useState(false);
    const shadowStyle = ((themeState == 'dark') ? '0 0 24px white' : '0 0 20px black');

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <img
            className={`image ${imageLoaded ? 'loaded' : ''}`}
            style={{ boxShadow: boxShadow ? shadowStyle : '' }}
            src={image}
            onLoad={handleImageLoaded}
            alt={alt}
        />
    );

};

Image.propTypes = {
    boxShadow: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Image;
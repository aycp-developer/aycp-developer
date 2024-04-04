import React from 'react';
import PropTypes from 'prop-types';
import './DownloadCV.css';
import { saveAs } from 'file-saver';
import { Download } from 'react-bootstrap-icons';

const DownloadCV = ({ backgroundColor, color, cvFile, cvName }) => {

    const downloadCV = () => {
        saveAs(cvFile, cvName);
    };

    return (
        <button
            className='download-cv'
            onClick={downloadCV}
            style={{ backgroundColor, color }}
        >
            <div className='download-icon-container'>
                <Download height='100%' width='100%' />
            </div>
            DESCARGAR CV
        </button>
    );

};

DownloadCV.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cvFile: PropTypes.string.isRequired,
    cvName: PropTypes.string.isRequired
};

export default DownloadCV;
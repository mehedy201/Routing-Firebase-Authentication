import React from 'react';
import notFoundImage from '../../images/99776312_s (1).webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not_found'>
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;
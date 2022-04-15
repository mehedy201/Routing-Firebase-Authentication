import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex, justify-content-center align-items-center'>
            <div>
                <h2>Loading...........</h2>
                <Spinner animation="grow" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import './PageNotFound.scss';
import {useNavigate} from "react-router-dom";
import { Button } from '@mui/material';

function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div id='page-not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <div className='not-found-content'>
                <h5>We can not find the page that you are looking for.</h5>
                <h5> Please try again or return to home.</h5>
                <Button id='return-home-btn' onClick={() => navigate('/')}>Return to Home</Button>
            </div>
        </div>
    );
}

export default PageNotFound;
import React from 'react';
import './Footer.scss';
import {useNavigate} from "react-router-dom";
import Contact from '../Contact/Contact';

import HomeIcon from '@mui/icons-material/Home';

function Footer() {

    const myEmail = 'youremail@gmail.com';
    const myPhone = '123-456-7890';

    const navigate = useNavigate();

    return (
    <div id='footer'>
        <Contact/>
        
        <div className='footer-links'>
            <div className='footer-links-body'>
                <div className='footer-body-left'>
                    <div className='logo' onClick={() => navigate('/')}>
                        <HomeIcon/>
                        <div className='logo-text'>
                            <h5>Nathaniel Lester</h5>
                            <h6>Real Estate</h6>
                        </div>
                    </div>
                    <div className='footer-link-div'>
                        <a href ={`mailto: ${myEmail}`}><h5>Email: {myEmail}</h5></a>
                        <a href={`tel:${myPhone}`}><h5>Phone: {myPhone}</h5></a>
                    </div>
                </div>
                <hr/>
                <div className='footer-body-right'>
                    <h3>About Nathaniel</h3>
                    <div className='footer-link-div'>
                        <a href={'/about'}><h5>My Story</h5></a>
                        <a href={'/testimonials'}><h5>Testimonials</h5></a>
                    </div>
                </div>
            </div>
            <div className='footer-links-footer'>
                <h5>© 2023 All Rights Reserved</h5>
            </div>
        </div>
    </div>
    );
}

export default Footer;
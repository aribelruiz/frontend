import React from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import pfp from '../../Images/defaultpfp.jpg';

function Home() {

  const navigate = useNavigate();

  return (
    <div id='home'>
      <div className='home-left'>
        <div className='welcome-header'>
          <h4 className='header-underline'>Welcome to</h4>
          <h1>Your Name</h1>
          <h2>Real Estate</h2>
        </div>
        
        <div className='welcome-body'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='welcome-footer'>
          <Button id='learn-btn' onClick={() => navigate('/about')}>Learn More</Button>
          <Button id='splash-contact-btn' onClick={() => navigate('/contact')}>Contact Me</Button>
        </div>
      </div>
      <div className='home-right'>
        <div className='pfp-img'>
          <img src={pfp} alt='profile-img'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
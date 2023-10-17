import React from 'react';
import './About.scss';

import pfp from '../../Images/defaultpfp.jpg';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function About() {

  const name = 'Nathaniel Lester';
  const license = '0000000'
  const email = 'youremail@gmail.com';
  const phone = '123-456-7890';

  return (
    <div id='about'>
      <div className='page-header'>
        <p>About</p>
      </div>

      <div className='about-content'>
        <div className='about-left'>
          <div className='pfp-img'>
            <img src={pfp} alt='profile-img'/>
          </div>
        </div>

        <div className='about-right'>
          <div className='welcome-header'>
            <h4 >Meet</h4>
            <h1>{name}</h1>
            <h2>Real Estate</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className='about-footer'>
            <div className='contact-info'>
              <h4>
                <PersonIcon/>
                {name} | Realtor | License #{license}
              </h4>
              <h4>
                <EmailIcon/>
                {email}
              </h4>
              <h4>
                <LocalPhoneIcon/>
                {phone}
              </h4>
            </div>
          </div>


        </div>
      </div>

      
    </div>
  );
}

export default About;
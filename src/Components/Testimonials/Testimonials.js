import React from 'react';
import './Testimonials.scss';
// import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import AddTestimonial from './AddTestimonial';

function Testimonials() {

  const defaultCard = {
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    clientName: 'JohnDoe',
    title: 'Home Buyer',
    city: 'Orlando, FL'
  }

  const listOfReviews = [defaultCard, defaultCard, defaultCard, defaultCard, defaultCard, defaultCard];

  // Create use Effect here for pulling testimonials from database
  // const [listOfReviews, SetListOfReviews] = useState([]);

  return (
    <div id='testimonials'>
      <div className='page-header'>
        <p>Testimonials</p>
      </div>

      {/* WILL ONLY BE VISIBLE TO ADMIN */}
      <AddTestimonial/>

      <div className='testim-body'>
          <div className='testim-child testim-back'>
              {/* background */}
          </div>
          <div className='testim-child testim-cards'>
                  { listOfReviews.map((card, index) => {
                      return (
                          <>
                          <div className='testim-card' key={index}>
                              <p>"{card.text}"</p>
                              <div className='rating'>
                                  <StarIcon/>
                                  <StarIcon/>
                                  <StarIcon/>
                                  <StarIcon/>
                                  <StarIcon/>
                              </div>
                              <div className='card-footer'>
                                  <h5 className='card-name'>{card.clientName} | {card.title}</h5>
                                  <h5 className='card-city'>{card.city}</h5>
                              </div>
                          </div>
                          </>
                      );    
                  })
                  }
          </div>
      </div>
    </div>
  );
}

export default Testimonials;
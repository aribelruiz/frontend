import React, { useEffect } from 'react';
import './Testimonials.scss';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

function TestimonialsHome() {

    const defaultCard = {
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        clientName: 'JohnDoe',
        title: 'Home Buyer',
        city: 'Orlando, FL'
    }

    const listOfReviews = [defaultCard, defaultCard, defaultCard];
    const navigate = useNavigate();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    // Create use Effect here for pulling testimonials from database
    // const [listOfReviews, SetListOfReviews] = useState([defaultCard, defaultCard, defaultCard]);


    // Initializes observer reference for cards animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });

        // console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();

        //eslint-disable-next-line
    }, []);

    // When element comes into view, display element animation
    useEffect(() => {
        if(isIntersecting){
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.add('cards-show');
            });
        }
        else {
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.remove('cards-show');
            });
        }
    }, [isIntersecting]);


    return (
        <div id='testimonials-home'>
            <div className='testim-header'>
                <h1>What Clients Say</h1>
                <Button id='testim-btn' onClick={() => navigate('/testimonials')}>View More Testimonials</Button>
            </div>
            <div className='testim-body'>
                <div className='testim-child testim-back'>
                    {/* background */}
                </div>
                <div className='testim-child testim-cards' ref={ref}>
                        { listOfReviews.map((card, index) => {
                            return (
                                <div className='testim-card cards-hide' key={index}>
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
                            );    
                        })
                        }
                </div>
            </div>
        </div>
    );
}

export default TestimonialsHome;
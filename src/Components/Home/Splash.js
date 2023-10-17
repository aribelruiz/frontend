import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 

import house from '../../Images/house.jpg';
import house1 from '../../Images/house1.jpg';
import house2 from '../../Images/house2.jpg';

const slides = [house, house1, house2];

function Splash() {
    return (
        <>
        <Carousel className='splash-carousel' fade interval={5000} >
            {
                slides.map((item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <div 
                                id='splash' 
                                style={{
                                    backgroundImage: `url(${item})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <h1>Nathaniel Lester</h1>
                                <h3>Making Dreams A Reality</h3>
                            </div>
                        </Carousel.Item>
                    );
                })
            }



            
            

        </Carousel>
        
        </>
    );
}

export default Splash;
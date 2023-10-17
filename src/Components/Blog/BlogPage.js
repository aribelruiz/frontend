import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import house from '../../Images/house.jpg';

function BlogPage() {

    // let {id} = useParams();
    const navigate = useNavigate();

    const blogObj = {
        title: 'Example Title',
        image: `${house}`,
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '01/22/2023'
    }

    // Pull blogObj from database in useEffect
    // const [blogObj, setBlogObj] = useState({});

    return (
        <div id='blog-page'>
            {/* BlogPage {id} */}
            <ArrowBackIcon className='back-btn' onClick={() => navigate('/blog')}/>
            <h1>{blogObj.title}</h1>
            <h3>Posted: {blogObj.date}</h3>
            <div 
                className='blog-page-img'
                style={{
                    backgroundImage: `url(${blogObj.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />
            <p>{blogObj.text}</p>
            <Button id='blog-btn' onClick={() => navigate('/blog')}>Back To Blog</Button>
        </div>
    );
}

export default BlogPage;
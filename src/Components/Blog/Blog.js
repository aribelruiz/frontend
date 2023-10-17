import React from 'react';
import './Blog.scss';

import house from '../../Images/house.jpg';
import { useNavigate } from 'react-router-dom';
import AddBlog from './AddBlog';

function Blog() {

    const navigate = useNavigate();

    const defaultBlog = {
        id: '1',
        title: 'Signs That Now Is The Time To Sell Your Home',
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

    const defaultBlog2 = {
        id: '2',
        title: 'When Should I Contact A Realtor?',
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
    
    const listOfPosts = [defaultBlog, defaultBlog2, defaultBlog, defaultBlog, defaultBlog, defaultBlog];

    // Create use Effect here for pulling blog posts from database
    // const [listOfPosts, SetListOfPosts] = useState([]);


    return (
        <div id='blog'>
            <div className='page-header'>
                <p>Blog</p>
            </div>
            <AddBlog/>
            <div className='blog-list'>
                {
                    listOfPosts.map((post, index) => {
                        return (
                            <div key={index} className='blog-card' onClick={() => navigate(`/blog/${post.id}`)}>
                                <div className='blog-img'
                                    style={{
                                        backgroundImage: `url(${post.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'
                                    }}
                                />
                                <div className='blog-info'>
                                    <h3>{post.title}</h3>
                                    <h5>Posted: {post.date}</h5>
                                    <p className='blog-text'>{post.text}</p>
                                </div>
                                <h6>Read More</h6>
                            </div>
                        );
                    })
                }
            </div>  



            
        </div>
    );
}

export default Blog;
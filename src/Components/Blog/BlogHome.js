import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import house from '../../Images/house.jpg';
import house3 from '../../Images/house3.jpg';

function BlogHome() {

    const navigate = useNavigate();
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    
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

    const listOfPosts = [defaultBlog, defaultBlog, defaultBlog];

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
                el.classList.add('blog-show');
            });
        }
        else {
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.remove('blog-show');
            });
        }
    }, [isIntersecting]);

    return (
        <div id='blog-home' 
            style={{
                backgroundImage: `url(${house3})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: '100vw 65vh'
            }}
        >
             <h1>Latest Articles</h1>
            <div className='blog-list' ref={ref}>
                    {
                        listOfPosts.map((post, index) => {
                            return (
                                <div key={index} className='blog-card blog-hide' onClick={() => navigate(`/blog/${post.id}`)}>
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

export default BlogHome;
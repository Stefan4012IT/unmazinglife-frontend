import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Post from './Post';
import postData from '../../data/postData.json';

const RecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        AOS.init({ easing: 'linear', duration: 1500 });

        // Sortiramo po datumu i uzimamo 5 najnovijih postova
        const sortedPosts = [...postData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPosts(sortedPosts.slice(0, 5));
    }, []);

    return (
        <div className="recent-posts" data-aos="zoom-in">
                {recentPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default RecentPosts;

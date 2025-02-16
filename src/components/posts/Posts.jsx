import React, { useState, useEffect } from 'react';
import Post from './Post';
import postData from '../../data/postData.json';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData); // Direktno postavljamo podatke iz JSON-a
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;


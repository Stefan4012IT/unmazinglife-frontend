import React from 'react';
import PREFIX from '../../config';

const Post = ({ post }) => {
    if (!post) {
        return null;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    };

    const truncateContent = (content) => {
        return content.length > 80 ? content.slice(0, 80) + '...' : content;
    };

    return (
        <div className="post">
            <div className='img-box'>
                <img src={`${PREFIX}/${post.imgSrc}`} alt={post.title} />
            </div>
            <div className='post-box'>
                <span className='post-created'>{formatDate(post.createdAt)}</span>
                <h3 className='post-title'>{post.title}</h3>
                <p className='post-content'>{truncateContent(post.content)}</p>
                <a href="#">Read more</a>
            </div>
        </div>
    );
};

export default Post;

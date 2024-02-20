import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    return (
        <div className='container'>
            <h1 className='single-post center'>
                <span className='heading center'>Chill.</span> Will need state so it's a Class Component
            </h1>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default Post;
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" style={{maxWidth: '750px'}}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </Container>
        </>
    );
};

export default NewsFeed;
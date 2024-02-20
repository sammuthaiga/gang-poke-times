import React, { Component } from 'react';
import axios from 'axios';
import Rainbow from '../hoc/Rainbow'
class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {                
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                        <div className='card-content'>
                            <span className='card-title'>{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className='center'>No posts yet</div>
        );
        return (
            <div className='container'>
                <h1 className='center'>Home</h1>
                <h4 className='center'>
                    {postList}
                </h4>

            </div>
        );
    }
}
export default Rainbow(Home);
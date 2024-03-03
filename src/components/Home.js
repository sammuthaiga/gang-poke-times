import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow'
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
class Home extends Component {
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                        <img src={Pokeball} alt='A pokeball' />
                        
                        <div className='card-content'>
                            <Link to={'/' + post.id}>
                                <span className='card-title red-text'>{post.title}</span>
                            </Link>
                            <p className='black-text'>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className='center'>No posts yet</div>
        );
        return (
            <div className='container home'>
                <h1 className='center'>Home</h1>
                <h4 className='center'>
                    {postList}
                </h4>

            </div>
        );
    }
}
export default Rainbow(Home);
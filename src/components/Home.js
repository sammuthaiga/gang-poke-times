import React, { Component } from 'react';
import axios from 'axios';
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
        return (
            <div className='container'>
                <h1 className='center'>Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus mi mauris nec dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, </p>
            </div>
        );
    }
}
export default Home;
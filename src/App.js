import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Signin from './components/Signin';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/:postId" element={<Post />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
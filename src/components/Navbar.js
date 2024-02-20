import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/about');
        }, 20000);

        // Clean up the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, [navigate]);
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a href='/' className='brand-logo'>Poke' Times</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink to='/signin'>Signin</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
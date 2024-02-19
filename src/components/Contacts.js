import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/about');
        }, 2000);

        // Clean up the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div className='container'>
            <h1 className='center'>Contacts</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac
                neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique,
                tortor mauris molestie elit, et luctus mi mauris nec dui. Cras ultricies mi eu turpis hendrerit fringilla.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
                consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            </p>
        </div>
    );
};

export default Contacts;

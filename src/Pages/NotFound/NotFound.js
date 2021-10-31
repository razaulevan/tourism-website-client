import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../HeaderImg/notfound.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', maxHeight: '700px' }} src={notfound} alt="" />
            <br />
            <Link to="/"> <button>Go Back</button></Link>

        </div>
    );
};

export default NotFound;
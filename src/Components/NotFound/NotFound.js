import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jfif'

const NotFound = () => {
    return (
        <div>
            <img className="img" src={img} alt="" />
            <Link to="/home" className="m-2" >
                <button type="button" className="btn btn-warning ">Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = (props) => {
    const { picture, catagory, pricing, description, carDetails } = props.service
    return (


        <div className="col-md-3 col-12">

            {
                <div className="card h-100">
                    <div>
                        <img src={picture} className="card-img-top img-size mt-4" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{description}</h5>
                        <h4 className="card-text">Catagory : {catagory}.</h4>
                        <h4 className="card-text">Price:  {pricing}.</h4>
                        <p className="card-text">{carDetails}.</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/home" className="m-2" >
                            <button type="button" className="btn btn-warning ">Back</button>
                        </Link>
                        <Link to="*" >
                            <button type="button" className="btn btn-warning">Cart</button>
                        </Link>
                    </div>
                </div>
            }

        </div>


    );
};

export default AllServices;
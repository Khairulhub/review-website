import React from 'react';
import { Link } from 'react-router-dom';

import './LogIn.css'

const LogIn = () => {
    return (
        <div className="container">
            <h1 className="text"> LogIn From</h1>
            <div className="text w-25 m-auto">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="mb-4">
                        <small>
                            <Link>
                                Forgate Password
                            </Link>
                        </small>
                        <small className="m-3">
                            or
                        </small>
                        <small>
                            <Link to="/signup" >
                               SignIn 
                            </Link>
                        </small>
                    </div>
                </form>
            </div>
          
           
        </div>
    );
};

export default LogIn;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary  ">
            <div className="container">
                <div className="row pt-5 ">

                    <div className="col-12 col-md-3 border border-1 shadow-sm p-3 mb-5 bg-body rounded">
                        <h1>Book-Bd</h1>
                        <br />
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos quaerat sunt, reprehenderit voluptates enim nemo quia perspiciatis temporibus in, molestias aliquam consectetur? Aliquam quas, velit non quam doloribus blanditiis.</article>
                    </div>
                    <div className=" col-12 col-md-3 border border-1 shadow-sm p-3 mb-5 bg-body rounded">
                        <h1>Components</h1><br />
                        <Link to="/home">Home</Link><br />
                        <Link to="/about">About</Link><br />
                        <Link to="/services">Services</Link><br />
                        <Link to="/blog">Blog</Link><br />
                    </div>
                    <div className=" col-12 col-md-3 border border-1 shadow-sm p-3 mb-5 bg-body rounded">
                        <h1>Book-Bd</h1>
                        <br />
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos quaerat sunt, reprehenderit voluptates enim nemo quia perspiciatis temporibus in, molestias aliquam consectetur? Aliquam quas, velit non quam doloribus blanditiis.</article>
                    </div>

                    <div className="col-12 col-md-3 border border-1 shadow-sm p-3 mb-5 bg-body rounded">
                        <h1>Social-Link</h1><br />
                        <Link to="/home">facebook</Link><br />
                        <Link to="/about">twitter</Link><br />
                        <Link to="/services">whatsapp</Link><br />
                       
                    </div>
                </div>

                <div ><h5 className="mb-5 p-5">&copy; Khairul Islam 2021</h5></div>
            </div>
        </div>
    );
};

export default Footer;
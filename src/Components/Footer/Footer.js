import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/iubat.jfif'

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary  ">
            <div className="container">
                <div className="row pt-5  ">

                    <div className="col-12 col-md-3 shadow-sm  mb-5 bg-primary p-2 rounded">
                        <img src={img} alt="" />
                        <article> Repellat eos quaerat sunt, reprehenderit voluptates enim nemo quia perspiciatis temporibus in, molestias aliquam consectetur? Aliquam quas.</article>
                    </div>
                    <div className=" col-12 col-md-3  shadow-sm  mb-5 bg-primary p-2 rounded ">
                        <h1 className="text-decoration-underline">Components</h1><br />
                        <Link to="/home"  className="text-dark">Home</Link><br />
                        <Link to="/about" className="text-dark">About</Link><br />
                        <Link to="/services" className="text-dark">Services</Link><br />
                        <Link to="/blog" className="text-dark">Blog</Link><br />
                    </div>
                    <div className=" col-12 col-md-3  shadow-sm  mb-5 bg-primary p-2 rounded">
                        <h1 className="text-decoration-underline">Book-Bd</h1>
                        <br />
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos quaerat sunt, reprehenderit voluptates enim nemo quia perspiciatis temporibus in, molestias aliquam consectetur? Aliquam quas, velit non quam doloribus blanditiis.</article>
                    </div>

                    <div className="col-12 col-md-3  shadow-sm  mb-5 bg-primary p-2 rounded ">
                        <h1 className="text-decoration-underline">Social-Link</h1><br />
                        <Link to="https://web.facebook.com/profile.php?id=100069895190183"className="text-dark">facebook</Link><br />
                        <Link to="/about" className="text-dark">twitter</Link><br />
                        <Link to="/services" className="text-dark">whatsapp</Link><br />
                       
                    </div>
                </div>

                <div ><h5 className="mb-5 p-5">&copy; Khairul Islam 2021</h5></div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import img from '../../images/images.jfif'
import img1 from '../../images/my-bg.png'
import img2 from '../../images/contact.jfif'
import './About.css'
const About = () => {
    return (
        <div className="container">
            <h2 className="text-decoration-underline fw-bold mb-5"> About </h2>
            <div className="row mt-5 mb-5">
                <div className="col col-md-6">
                    <img className="img1" src={img} alt="" />
                </div>
                <div className="col col-md-6">
                    <h2 className="text-decoration-underline fw-bold">About Us</h2>
                    <div className="text">
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col col-md-6 mb-5">
                    <h2 className="text-decoration-underline fw-bold">About Me</h2>
                    <div className="text">
                        <article className="lh-lg">Hi, This is Md KHairul Islam. I am  a student. I read in a university and my department  is Computer Scince and Tecnology. I want to be a web developer. I know about html, css, bootstrap, js, react, tailwind ect
                        </article>
                        <article className="lh-lg mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        <button type="button" className="btn btn-primary">Download Cv</button>

                    </div>
                </div>
                <div className="col col-md-6">
                    <img className="me" src={img1} alt="" />
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <h2 className="text-decoration-underline fw-bold mb-5">Contact Us</h2>
                    <div className="mb-3">
                        <label for="Md YOusuf " className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={img2} className="img-fluid img" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
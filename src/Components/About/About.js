import React from 'react';
import img from '../../images/images.jfif'
const About = () => {
    return (
        <div>
            <h2> About </h2>
            <div className="d-flex justify-content-between mt-5">
                <div>
                    <img className="img1" src={img} alt="" />
                </div>
                <div>
                    <h2>About Us</h2>
                    <div className="text">
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
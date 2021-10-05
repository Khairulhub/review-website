import React, { useEffect, useState } from 'react';
import img1 from '../../images/home.png'
import img from '../../images/images.jfif'
import Service from '../Service/Service';
import './Home.css'


const Home = (props) => {
    const { array } = props;
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container-fluid mt-5">

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="row mt-5">
                    
                    <div className="col-md-4 col-12">
                        <img className="img1" src={img} alt="" />
                    </div>
                    <div className="col-md-8 col-12">
                        <h2 className="text-decoration-underline fw-bold">About Us</h2>
                        <div className="text">
                            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam recusandae consectetur dicta quidem officia, doloribus eius nesciunt ab praesentium. Cumque iure explicabo natus eveniet aut cupiditate, nesciunt delectus dolorum?</article>
                        </div>
                    </div>
                </div>
                <div className="row m-4">
                    <h1 className="text-decoration-underline fw-bold mt-4 mb-4">Services</h1>
                    {
                        service.length ? (

                            array?.map((item) => {
                                const serb = service[item]
                                return (
                                    <Service
                                        key={serb._id}
                                        service={serb}
                                    ></Service>
                                )
                            })
                        ) : (
                            <h1>No Result found</h1>
                        )

                    }
                </div>
            </div>


        </div>
    );
};

export default Home;
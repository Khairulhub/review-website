import React from 'react';
import useService from '../../Hook/UseService';
import AllServices from '../AllServices/AllServices';

const Services = () => {
    const [service]=useService()
    return (
        <div className="row g-4 m-3">
            <h1>Services</h1>
            {
                service.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
        </div>
    );
};

export default Services;
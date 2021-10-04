import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    console.log(props.serb);
    const { picture, catagory, pricing, description, carDetails } = props.service
    return (


        <div className="card col-12 col-md-4 ">

            <div>
                <Link to="/services">
                    <img className="img-size mt-5" src={picture} alt="" />
                </Link>
            </div>
            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <h3 className="card-text">Catagory : {catagory}</h3>
                <h4 className="card-text">Price :  {pricing}</h4>
                <p className="card-text">{carDetails}</p>
            </div>
            <div className="card-footer">
                <Link to="/services" >
                    <button type="button" className="btn btn-warning">More View</button>
                </Link>
            </div>

        </div>



    );
};

export default Service;
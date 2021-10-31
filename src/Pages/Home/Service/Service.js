import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, place, description, img, cost } = service;

    return (

        <div className="col mt-5 mx-auto">
            <div className="card cart-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-2">
                    <h2>{place}</h2>
                    <p>{description.slice(0, 300)}</p>
                    <h3> Cost: {cost} BDT</h3>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">Booking</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Service;
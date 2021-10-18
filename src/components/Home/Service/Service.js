import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, id, img, description } = service
    return (
        <div className="services-section">
            <div>
                <img width="250px" height="220px" src={img} alt="" />
            </div>
            <div>
                <h2>{name.slice(0, 20)}</h2>
                <p >{description.slice(0, 180)}</p>
                <Link to={`/home/${id}`}><button className="btn btn-primary">See Details</button></Link>
            </div>
        </div >
    );
};

export default Service;
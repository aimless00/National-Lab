import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    let { Id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleService, setSingleService] = useState({});


    useEffect(() => {
        fetch('/Lab.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const foundService = details.find((detail) => detail.id === Id);
        setSingleService(foundService);
    }, [details]);
    console.log(singleService);


    return (
        <div className="single-service text-primary">
            <h1>Service Details</h1>
            <img src={singleService?.img} alt="" />
            <h3>Service Name: {singleService?.name}</h3>
            <p className="mx-auto w-50">{singleService?.description}</p>
            <Link to="/"><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default ServiceDetails;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./Lab.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service">
            <h1 className="p-2">Our Services</h1>
            <div className="services-section">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
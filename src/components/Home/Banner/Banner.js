import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-section">
            <h2 className="banner-text">Best Outpatient Diagnostic </h2>
            <p> We invite you to discover why over 2 million patients have chosen Health Images for affordable pricing, convenient locations, and compassionate care.</p>
            <button className="btn btn-primary">Learn More</button>
        </div>
    );
};

export default Banner;
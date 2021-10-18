import React from 'react';
import Footer from '../Home/Footer/Footer';
import Nav from '../Home/Nav/Nav';
import './AboutUs.css';

const AboutUs = () => {
    return (

        <div className="about-section">
            <Nav></Nav>
            <div className="about-text">
                <h1>Inception</h1>
                <p>A pioneer in the medical diagnostics arena, National Diagnostics has been at the fore front of world-class diagnostic services since 1990. With supremely high standards and precise testing, our fundamental mission is to propagate healthier living for all of our patients. National Diagnostics is headed by Dr. Harvinder Singh, who is an alumnus of the Dayanand Medical College, Ludhiana.</p>
            </div>
            <div className="about-text">
                <h1>Service</h1>
                <p>When you choose National Diagnostics as your diagnostic services expert, you can expect cutting-edge state-of-the-art lab facilities, home visit facilities as well as online reports at your disposal. National Diagnostics offers a comprehensive menu of pathology and microbiology. Under our vertical of Hospital Lab Management we also have 24X7 hospital-based labs setup in leading hospitals.</p>
            </div>
            <div className="about-text">
                <h1>Moto</h1>
                <p>As an organisation, our motto has been to encourage regular healthcare check-ups for every individual. Don’t do a test after you fall ill, do a test not to fall ill. We strive to ensure your good health through a wide array of preventive health packages. We believe that promoting preventive healthcare is the best way to reduce the burden that disease puts on your health. We strongly believe and leave no stone unturned in achieving our motto #YOUR HEALTH. OUR MISSION.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import Nav from '../Home/Nav/Nav';
import './ContactUs.css'
import img from '../../lab.jpg'
import Footer from '../Home/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="contact-us">
                <div>
                    <p>Phone: 01785455</p>
                    <h2>Contact us by Email</h2>
                    <p>support@nationallab.com</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h3>National Lab</h3>
                    <h5>Dhap, Zila road, Rangpur</h5>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;
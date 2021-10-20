import React from 'react';
import './ContactUs.css'
import img from '../../lab.jpg'
import Footer from '../Home/Footer/Footer';
import { MdOutgoingMail } from 'react-icons/md';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';


const ContactUs = () => {
    return (
        <div>
            <div className="contact-us">
                <div>
                    <p><BsFillTelephoneOutboundFill className="mx-2" />Phone: 01785455</p>
                    <h2>Contact us by Email</h2>
                    <p><MdOutgoingMail className="mx-2" />support@nationallab.com</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h3>National Lab</h3>
                    <h5><BiCurrentLocation className="fs-4" />Dhap, Zila road, Rangpur</h5>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
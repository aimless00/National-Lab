import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="p-5">
                    <h5>CORPORATE OFFICE</h5>
                    <p>8610 Explorer Drive, Suite 300</p>
                    <p>Colorado Springs, CO 80920</p>
                    <p>Phone: 719-955-4332</p>
                </div>
                <div className="p-5">
                    <h5>RESOURCES</h5>
                    <p>Patient Resources</p>
                    <p>Physician Resources</p>
                    <p>Pay Bill Online</p>
                    <p>Careers</p>
                </div>
                <div className="p-5">
                    <h5>FOLLOW US</h5>
                    <p><i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-instagram"></i></p>
                    <button className="btn btn-primary">CONTACT US</button>
                </div>
            </div>
            <div className=" d-flex justify-content-between bg-dark text-white pt-2">
                <p>Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> in Rangpur, Bangladesh</p>
                <p>© CopyWirght from AL Amin</p>
            </div>
        </div>
    );
};

export default Footer;
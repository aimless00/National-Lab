import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';


const Nav = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">DIAGNOSTIC LABORATORY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                            {!user.email && <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                            </li>}
                        </ul>
                        <span className="navbar-text">
                            {user?.email ? <div>
                                <span className="mx-2">{user.displayName}</span>
                                <Link className="btn btn-primary" to="/" onClick={logOut}><FaSignOutAlt className="mx-2" />Log Out</Link>
                            </div> :
                                <Link className="btn btn-primary" to="/login"><FaSignInAlt className="mx-2" />Log In</Link>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">DIAGNOSTIC LABORATORY</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
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
                                <Link className="btn btn-primary" to="/" onClick={logOut}>Log Out</Link>
                            </div> :
                                <Link className="btn btn-primary" to="/login">Log In</Link>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
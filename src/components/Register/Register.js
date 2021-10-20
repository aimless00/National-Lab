import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



    const { handleGoogleSignIn, registerEmailPassword, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleNameSet = e => {
        setName(e.target.value);
    }
    const handleEmailSet = e => {
        setEmail(e.target.value);
    }
    const handlePasswordSet = e => {
        setPassword(e.target.value);
    }
    const setDisplayName = () => {
        setUserName(name);

    }
    const handleSignUp = e => {
        e.preventDefault();
        registerEmailPassword(email, password)
            .then(result => {
                setDisplayName()
                result.user && history.push(redirect_url);
                window.location.reload();

            })
    }

    return (
        <div className="border w-75 mx-auto mt-2 shadow p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSignUp} className="w-50 mb-2 mx-auto">
                <h1 className="text-primary">Please Sign Up</h1>
                <div className="row mb-3 mt-5">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameSet} type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailSet} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordSet} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p>Already have account? <Link to="/login">Log in</Link></p>
            <div className="p-5">
                <button onClick={handleGoogleLogin} className="btn btn-primary "><i class="fab fa-google text-success fs-3 mx-2"></i>Google Sign Up</button>
            </div>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaSignInAlt } from 'react-icons/fa';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { handleGoogleSignIn, signInEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location.state);

    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const useEmail = e => {
        setEmail(e.target.value)
    }
    const usePassword = e => {
        setPassword(e.target.value)
    }

    const handleSignIn = e => {
        e.preventDefault();
        signInEmailPassword(email, password)
            .then(result => {
                history.push(redirect_url);
            })

    }

    return (
        <div className="border w-75 mx-auto mt-2 shadow p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSignIn} className="w-50 mx-auto">
                <h1 className="text-primary">Please Log In</h1>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={useEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={usePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"><FaSignInAlt /> Sign In</button>
            </form>
            <p>New to Account? <Link to="/register">Create Account</Link></p>
            <div className="mt-5 ">
                <button onClick={handleGoogleLogin} className="btn btn-info"><FcGoogle className="fs-3" /> Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;
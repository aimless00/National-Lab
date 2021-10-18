import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <div>
                <h1>Please Log In</h1>
                <div className="w-50 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <button className="btn btn-primary">Sign In</button>
                </div>
                <p>New to Account? <Link to="/register">Create Account</Link></p>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
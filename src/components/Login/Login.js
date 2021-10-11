import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {user, googleSignIn} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        googleSignIn()
        .then(res => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login_Form">
            <div>
                <h1>Login first and please</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" /><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="Submit" /><br />
                    <small>{user.displayName}</small>
                </form>
                <p>first time? <Link to="/regi">Create account</Link></p>
                <div>--------or--------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google signin</button>
            </div>
        </div>
    );
};

export default Login;
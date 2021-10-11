import React from 'react';
import { Link } from 'react-router-dom';

const Regi = () => {
    return (
        <div className="login_Form">
            <div>
                <h1>Register : Create account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" /><br />
                    <input type="password" name="" id="" placeholder="Your password" /><br />
                    <input type="password" name="" id="" placeholder="re-type password" /><br /><br />
                    <input type="submit" value="submit" id="" /><br />
                </form>
                <p>Already registered? <Link to="/login">Log in here</Link></p>
                <div>--------or--------</div>
                <button onClick="" className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Regi;
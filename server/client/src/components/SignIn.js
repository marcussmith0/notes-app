import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <ul>
                <li><a href="/auth/google">Sign in with Google</a></li>
                <li>Sign in with Facebook</li>
                <li>Sign in with GitHub</li>
            </ul> 
            <Link to="/">Back</Link>
        </div>
    );
}

export default SignIn;
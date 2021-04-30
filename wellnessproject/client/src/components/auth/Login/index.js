import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const userData = {
            email: {email},
            password: {password}
        };
        console.log(userData);
    };

    return(
        <div className='login-form'>
            <form>
                <h2>Login</h2>
                <div>
                    <input 
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <button
                    type='submit'
                    className='btn btn-large'
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
            </form>
            <p>Dont have an account, sign in?</p>
            <Link to='/register'>
                Sign up
            </Link>
        </div>        
    )
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = ({ handleSubmit, setPassWord, setUserName }) => {
    return (
        <div className='signup-wrapper'>
            <form className='signup' name='signup' method='POST' action='/signup' onSubmit={handleSubmit}>    
                <h2>Create Account</h2>
                <label for='email'>
                    <p>Email Adress:</p>
                    <input name='email' type='email' className='form-control' id='email-input' placeholder='Email' onChange={e => setUserName(e.target.value)} />
                </label>
                <label for='password'>
                    <p>Password:</p>
                    <input name='password' type='password' className='form-control' id='password-input' placeholder='Password' onChange={e => setPassWord(e.target.value)} />
                </label>
                <div>
                    <button type='submit' className='btn btn-default auth-btn'>Submit</button>
                </div>
                <div className='lpginLink'>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        Log In
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage;
import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = ({ handleSubmit, setUserName, setPassWord }) => {
    return (
        <div className='login-wrapper'>
            <form className='login' method='POST' action='login' onSubmit={handleSubmit}>    
                <h2>Log In!</h2>
                <div className='form-group'>
                    <label>
                        <p>Email Adress:</p>
                        <input name='email' type='email' className='form-control' id='email-input' placeholder='Email' onChange={e => setUserName(e.target.value)} />
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        <p>Password:</p>
                        <input type='password' placeholder='Password' onChange={e => setPassWord(e.target.value)} />
                    </label>    
                </div>
                <div >
                    <button type='submit' className='btn btn-default auth-btn'>Login</button>
                </div>
                <div className='suLink'>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;
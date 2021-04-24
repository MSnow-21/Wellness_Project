import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = ({ handleSubmit, setUserName, setPassWord }) => {
    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>    
                <h2>Log In!</h2>
                <label>
                    <p>Username:</p>
                    <input type='text' onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password:</p>
                    <input type='password' onChange={e => setPassWord(e.target.value)} />
                </label>
                <div>
                    <button type='submit'>Submit</button>
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
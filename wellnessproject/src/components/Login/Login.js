import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <form>
            <div className='login-wrapper'>
                <h2>Log In!</h2>
                <label>
                    <p>Username</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    );
};
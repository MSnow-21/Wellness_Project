import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Login.css';
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser({
            userName,
            passWord
        });
        setToken(token);
    }

    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>    
                <h2>Log In!</h2>
                <label>
                    <p>Username</p>
                    <input type='text' onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' onChange={e => setPassWord(e.target.value)} />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
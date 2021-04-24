import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);
    const handlePassword2Change = event => setPassword2(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: {name},
            email: {email},
            password: {password},
            password2: {password2}
        };
        console.log(newUser);
    };
    

    return (
        <div className='register-form'>
            <h2>Sign Up</h2>
            {name}{password}{password2}{email}
            <form>
                <div>
                    <input 
                    id='name'
                    type='text'
                    placeholder='Name'
                    onChange={handleNameChange}
                    />
                </div>
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
                    <input
                    id='password2'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handlePassword2Change}
                    />
                </div>
                <div>
                    <button 
                    className='btn btn-large'
                    type='submit'
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
                <p>Already have an account?</p>
                <Link to='/login'>
                    Login
                </Link>
            </form>
        </div>
    )
}

export default Register;
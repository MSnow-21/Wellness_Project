import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = ({ handleSubmit, setPassWord, setUserName }) => {
    return (
        <div className='signup-wrapper'>
            <form onSubmit={handleSubmit}>    
                <h2>Sign Up!</h2>
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
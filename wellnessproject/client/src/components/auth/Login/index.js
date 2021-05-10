import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import './login.css';

const Login = () => {
    
    const dispatch = useDispatch();
    let email;
    let password;
    const [errors, setErrors] = useState({});

    const handleEmailChange = event => email = event.target.value;
    const handlePasswordChange = event => password = event.target.value;

    const handleSubmit = event => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        dispatch(loginUser(userData))
    };

    return(
        <div>
            <div className='signup-link'>
                <h3>Dont have an account?</h3>
                <Link
                className='signup-link-bttn' 
                to='/register'>
                    Sign up
                </Link>
            </div>
            <div className='col-md-3 login-form'>
                <form>
                    <h2>Login</h2>
                    <div>
                        <input 
                        id='email'
                        type='email'
                        placeholder='Email'
                        onChange={handleEmailChange}
                        className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                        })}
                        />
                        <span>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>
                    <div>
                        <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                        })}
                        />
                        <span>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>
                    <div>
                        <button
                        type='submit'
                        className='login-bttn'
                        onClick={handleSubmit}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>        
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { loginUser }
) (Login);
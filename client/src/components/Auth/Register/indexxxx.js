<div>
<div className='login-link'>
<h3>Already have an account?</h3>
<Link 
onClick={setBgImage('signup-bg')}
className='login-link-bttn'to='/'>Login</Link>
</div>
<div className='register-form col-md-3'>
        <h2>Sign Up</h2>
        <form>
            <div>
                <input 
                id='name'
                type='text'
                placeholder='Name'
                onChange={handleNameChange}
                className={classnames('', {
                    invalid: errors.name
                })}
                />
                <span>{errors.name}</span>
            </div>
            <div>
                <input
                id='email'
                type='email'
                placeholder='Email' 
                onChange={handleEmailChange}
                className={classnames('', {
                    invalid: errors.email
                })}
                />
                <span>{errors.email}</span>
            </div>
            <div>
                <input
                id='password'
                type='password'
                placeholder='Password'
                onChange={handlePasswordChange}
                className={classnames('', {
                invalid: errors.password
                })}
                />
                <span>{errors.password}</span>
            </div>
            <div>
                <input
                id='password2'
                type='password'
                placeholder='Confirm Password'
                onChange={handlePassword2Change}
                className={classnames('', {
                invalid: errors.password2
                })}
                />
                <span>{errors.password2}</span>
            </div>
            <div>
                <button 
                className='signup-bttn'
                type='submit'
                onClick={handleSubmit}
                >
                Submit
                </button>
            </div>
        </form>
    </div>
</div>

<div>
<div className='signup-link'>
    <h3>Dont have an account?</h3>
    <Link
    onClick={setBgImage('login-bg')}
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
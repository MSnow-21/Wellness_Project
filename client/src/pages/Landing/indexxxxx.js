<div className={bgImage}>
<div className='intro row'>
    <h1 className='col-md-3 app-title'>Well Rouded Fitness</h1>
    <div className='col-md-5'></div>
    <p className='col-md-3 statement'>
        Well rounded fitness is an application designed to help an indevidual improve their overall health based on 
        all aspects of wellness. Login to start improving your well being.
    </p>
</div>
    <Router>
        <Switch>
            <Route exact path={'/'}>
                <Login
                setBgImage={setBgImage} />
            </Route>
            <Route exact path ='/register'>
                <Register
                setBgImage={setBgImage} />
            </Route>
        </Switch>
    </Router>
</div>
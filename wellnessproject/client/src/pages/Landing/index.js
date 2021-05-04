import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import './landing.css'

const Landing = () => {
    return (
        <div className='landing-page'>
            <div className='intro row'>
                <h1 className='col-md-3'>Name Of Our Project</h1>
                <div className='col-md-5'></div>
                <p className='col-md-3 statement'>
                    *Name of App* is an application designed to look at all aspects 
                    of an indeviduals life, and evaluate how they contribute to a person 
                    overall health.
                </p>
            </div>
                <Router>
                    <Switch>
                        <Route exact path={['/', '/login']}>
                            <Login />
                        </Route>
                        <Route exact path ='/register'>
                            <Register />
                        </Route>
                    </Switch>
                </Router>
        </div>
    )
}

export default Landing;
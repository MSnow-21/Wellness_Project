//!!!! !!!! !!!! !!!! !!!!
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter, useHistory, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { registerUser } from "../../../actions/authActions";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      marginTop: theme.spacing(10),
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      backgroundColor: '#2909AE'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#2909AE'
    },
  }));

const Register = () => {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState('');

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);
    const handlePassword2Change = event => setPassword2(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };
       dispatch(registerUser(newUser))
        .then(() => {
            history.push('/')
            console.log("worked")
          //setSuccessful(true);
        })
        .catch(() => {
            console.log("didnt work")
          //setSuccessful(false);
        });
    };
    

    return (
        <div>
    <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="First Name"
                    autoFocus
                    onChange={handleNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="Email"
                    onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="Password"
                    onChange={handlePasswordChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Confirm Password"
                    type="password2"
                    id="password2"
                    autoComplete="Confirm Password"
                    onChange={handlePassword2Change}
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                >
                Sign Up
                </Button>
                <Grid container justify="flex-end">
                <Grid item>
                    <Link to='/'>
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>
        </Container>
        </div>
            
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));
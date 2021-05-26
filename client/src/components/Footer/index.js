import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './styles.css';
const Footer = () => {
    return (
        <footer className='footer'>
            <Typography variant='h4'>
                Well Rounded Wellness
            </Typography>
            <Typography variant='h6'>
                &#169; Chris Curry, Amber VanGieson, Mark Snow, Ryan Wilson.
            </Typography>
        </footer>
    )
}

export default Footer;

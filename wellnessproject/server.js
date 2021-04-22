//Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//Requires our routes
const users = require('./routes/api/users');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config ???

//Connect to MongoDB ???

//Middleware
app.use(passport.initialize());
//Config
require('./config/passport')(passport);
//Routes
app.use('/api/users', users);

const PORT = process.env.PORT || 8080;

app.listen(8080, () => console.log(`Server is running on port ${PORT}.`));


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config ???

// Connect to MongoDB ???

const PORT = process.env.PORT || 8080;

app.listen(8080, () => console.log(`Server is running on port ${PORT}.`));


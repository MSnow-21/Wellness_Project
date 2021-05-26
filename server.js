//Require dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//Requires our routes
const UserRoutes = require('./src/routes/UserRoutes');
//XYZZY
//const FitnessRoutes = require('./src/routes/FitnessRoutes');
const cors = require('cors')

const app = express();

app.use(express.static(path.join(__dirname,"client", "build")));

const corsOptions = {
    origin: '*'
  }
  
  app.use(cors(corsOptions))

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config ???
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhostq/wellness", { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://wellness1234:wellness1234@wellness.fits4.mongodb.net/wellness?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(console.log('Success'));
//Middleware
app.use(passport.initialize());
//Config
require('./src/config/passport')(passport);
//Routes
//require('./src/routes/UserRoutes')(app);
app.use('/api/users', UserRoutes);
//XYZZY
//app.use('/api/fitness', FitnessRoutes)
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client","build", "index.html"));
  });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

 
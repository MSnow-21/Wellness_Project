const bCrypt = require('bcrypt-nodejs');

module.export = function(passport, user) {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
}

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},

function(req, email, password, done) {
    const generateHash = function() {
        const salt = bCrypt.genSaltSync(10);
        const hash = bCrypt.hashSync(password, salt);
        return hash;
    };
}
))


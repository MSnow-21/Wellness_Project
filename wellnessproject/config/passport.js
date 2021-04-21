const bCrypt = require('bcrypt-nodejs');
const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const { db } = require('../models/user');

module.exports = function(passport, user) {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

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
    bd.User.findOne(
        {email: email}
        ).then((user) => {
            if(user) {
                return done(null, false, {
                    message: 'Email Already Exists!'
                })
            } else {
                let password = generateHash(password);
                let data = {
                    email: email,
                    password: password
                };
                db.user.insertOne(data).then((newUser, created) => {
                    if(!newuser) {
                        return done(null, false);
                    }
                    if(newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }));

    passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    
    function(req, email, password, done) {
        const User = user;
        const isValidPassword = (userpass, password) => {
            const result = bCrypt.compareSync(password, userPass);
            return result
        };
        User.findOne({
            email: email
        }).then((user) => {
            if (!user) {
                console.log('invalid user');
                return done(null, false, {
                    message: 'Invalid Login'
                });
            }
            if(!isValidPassword(user.password, password)) {
                console.log('Invalid Password')
                return done(null, false, {
                    message: 'Invalid Login'
                });
            }
            const userInfo = user.get();
            return done(null, userInfo);
        }).catch((err) => {
            return done(null, false, {
                message: 'Something Went Wrong!!'
            });
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        if(user) {
            const userInfo = user.get();
            done(null, userInfo);
        }
    });
};
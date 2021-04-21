const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        required
    },
    password: {
        type: String,
        required
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
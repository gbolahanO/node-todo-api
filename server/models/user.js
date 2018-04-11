const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let User = mongoose.model('User', UserSchema);

// const User = mongoose.model('User', {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
//  });

 module.exports = { User }
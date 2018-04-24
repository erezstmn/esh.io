const mongoose = require('mongoose');

const User = mongoose.model('User', {
    
    user_name: {
        type: String,
        required: true,
        minlength:4,
        trim: true
    },
    password: {
        type: String,
        minlength:4,
        required: true,
        trim: true
    },
    api_key:{
        type: String,
        required: true
    }    
});
module.exports = {User};
const mongoose = require('mongoose');

const Log = mongoose.model('Log', {
    api_key:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true       
    },
    text: {
        type: String,
        minlength:4
    }  
});
module.exports = {Log};
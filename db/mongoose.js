var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://esh-io-admin:admin@ds113849.mlab.com:13849/esh-io-db');

module.exports = {
    mongoose
};
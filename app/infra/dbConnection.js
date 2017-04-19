var mongoose = require('mongoose');

function createDBConnection() {

    mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    return mongoose;
}

module.exports = function(){
  return createDBConnection;
}

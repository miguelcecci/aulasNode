var mongoose = require('mongoose');

function createDBConnection() {

    mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    var kittySchema = mongoose.Schema({
      name: String
    });
    var Kitten = mongoose.model('Kitten', kittySchema);
    mongoose.connection.close();
    return Kitten;
}

module.exports = function(){
  return createDBConnection;
}

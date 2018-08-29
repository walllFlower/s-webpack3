var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

var db = mongoose.connection;

var UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
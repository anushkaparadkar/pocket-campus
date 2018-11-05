var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  link: String,
});

module.exports = mongoose.model('Book', bookSchema);

var mongoose = require('mongoose');

var lectureSchema = new mongoose.Schema({
  description: String,
  date: Date,
  time: Date,
});

module.exports = mongoose.model('Lecture', lectureSchema);

var mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: Date,
});

module.exports = mongoose.model('Reminder', reminderSchema);

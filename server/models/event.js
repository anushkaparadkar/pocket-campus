var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  date: Date,
  eventImage: String,
  host: String,
});

module.exports = mongoose.model('Event', eventSchema);

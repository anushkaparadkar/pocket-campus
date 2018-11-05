var mongoose = require('mongoose');

var submissionSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  completed: Boolean,
  description: String,
});

module.exports = mongoose.model('Submission', submissionSchema);

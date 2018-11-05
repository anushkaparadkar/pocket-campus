var mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
  name: String,
  teacher: String,
  lectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lecture',
    },
  ],
  submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Submission',
    },
  ],
});

module.exports = mongoose.model('Subject', subjectSchema);

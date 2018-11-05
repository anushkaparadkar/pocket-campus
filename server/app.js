const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

//Models
const User = require('./models/user');
const Event = require('./models/event');
const Lecture = require('./models/lecture');
const Reminder = require('./models/reminder');
const Subject = require('./models/subject');
const Submission = require('./models/submission');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
const subjectRoutes = require('./routes/subjects');
const submissionRoutes = require('./routes/submissions');
const eventRoutes = require('./routes/event');
const reminderRoutes = require('./routes/reminders');
const userRoutes = require('./routes/index');
const bookRoutes = require('./routes/books');
const lectureRoutes = require('./routes/lectures');

const port = process.env.PORT || 3000;
const db = process.env.DATABASEURL || 'mongodb://localhost/scheduletracker';

mongoose.connect(db);

//routes
app.use(eventRoutes);
app.use(reminderRoutes);
app.use(subjectRoutes);
app.use(submissionRoutes);
app.use(userRoutes);
app.use(bookRoutes);
app.use(lectureRoutes);

app.listen(port, () => {
  console.log('Server started on ' + port);
});

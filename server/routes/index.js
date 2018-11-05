var express = require('express');
var router = express.Router();
var User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

//register
router.post('/register', function(req, res) {
  var newUser = new User({
    username: req.body.username,
    uImage: req.body.uImage,
    email: req.body.email,
    name: req.body.name,
    collegeName: req.body.collegeName,
    year: req.body.year,
    branch: req.body.branch,
    attendanceCriteria: req.body.attendanceCriteria,
  });
  newUser.isAdmin = false;
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      res.status(403).json(err);
    } else {
      passport.authenticate('local')(req, res, function() {
        res.status(200).json(req.user);
      });
    }
  });
});

//login
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
  }),
  function(req, res) {
    res.status(200).json(req.user);
  }
);

//logout
router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json('Logged Out!');
});

//dashboard
router.get('/users/:id/dashboard', function(req, res) {
  User.findById(req.params.id)
    .populate('subjects')
    .populate('reminders')
    .exec(function(err, user) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(user);
      }
    });
});

//edit
router.get('/users/:id/edit', function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundUser);
    }
  });
});

//update
router.put('/users/:id/edit', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true }, function(
    err,
    updatedUser
  ) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(updatedUser);
    }
  });
});

//attendance
router.get('/users/:id/getAttendance', function(req, res) {
  // TODO: Add Proper Logic
});

module.exports = router;

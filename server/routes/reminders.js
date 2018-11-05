var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');
var User = require('../models/user');

//create new reminder
router.post('/users/:id/reminders/add', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Reminder.create({ title: req.body.reminder.title }, function(
        err,
        reminder
      ) {
        if (err) {
          res.status(500).json(err);
        } else {
          reminder.description = req.body.reminder.description;
          reminder.time = req.body.reminder.time;
          reminder.save();
          user.reminders.push(reminder);
          user.save();
          res.status(200).json(reminder);
        }
      });
    }
  });
});

//Edit
router.get('/users/:id/reminders/:rid/edit', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Reminder.findById(req.params.rid, function(err, foundReminder) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(foundReminder);
        }
      });
    }
  });
});

//Update
router.put('/users/:id/reminders/:rid/edit', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Reminder.findByIdAndUpdate(
        req.params.rid,
        req.body.reminder,
        { new: true },
        function(err, updatedReminder) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(updatedReminder);
          }
        }
      );
    }
  });
});

router.delete('/users/:id/reminders/:rid/delete', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Reminder.findByIdAndRemove(req.params.rid, function(err) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json('Deleted Reminder');
        }
      });
    }
  });
});

module.exports = router;

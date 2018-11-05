var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var User = require('../models/user');
var Reminder = require('../models/reminder');
var transporter = require('../middleware/mailer');

//get all events
router.get('/events', function(req, res) {
  Event.find({}, function(err, events) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(events);
    }
  });
});

//create
router.post('/events/add', function(req, res) {
  Event.create({ name: req.body.event.name }, function(err, event) {
    if (err) {
      res.status(500).json(err);
    } else {
      event.type = req.body.event.type;
      event.description = req.body.event.description;
      event.date = req.body.event.date;
      event.eventImage = req.body.event.eventImage;
      event.host = req.body.event.host;
      event.save();
      res.status(200).json(event);
    }
  });
});

//details page of events
router.get('/events/:id', function(req, res) {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(event);
    }
  });
});

//Edit
router.get('/events/:id/edit', function(req, res) {
  Event.findById(req.params.id, function(err, foundEvent) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundEvent);
    }
  });
});

//Update
router.put('/events/:id/edit', function(req, res) {
  Event.findByIdAndUpdate(
    req.params.id,
    req.body.event,
    { new: true },
    function(err, updatedEvent) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(updatedEvent);
      }
    }
  );
});

router.delete('/events/:id/delete', function(req, res) {
  Event.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted event!');
    }
  });
});

router.post('/events/:id/register', function(req, res) {
  User.findById(req.body.uid, (err, user) => {
    if (err) {
      res.status(500).json(err);
    } else {
      Reminder.create({ title: req.body.event.name }, function(err, reminder) {
        if (err) {
          res.status(500).json(err);
        } else {
          reminder.description = req.body.event.description;
          reminder.time = req.body.event.date;
          reminder.save();
          user.reminders.push(reminder);
          user.save();
        }
      });
      transporter.sendMail({
        from: 'byteme.kjsce@gmail.com',
        to: user.email,
        subject: 'Event Registration Complete',
        html: '<b>Thank you for registering!</b>',
      });
    }
  });
});

module.exports = router;

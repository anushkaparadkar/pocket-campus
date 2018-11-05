var express = require('express');
var router = express.Router();
var Subject = require('../models/subject');
var Submission = require('../models/submission');
var User = require('../models/user');

//create new submission
router.post('/users/:id/subjects/:subject_id/submissions/add', function(
  req,
  res
) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id, function(err, subject) {
        if (err) {
          res.status(500).json(err);
        } else {
          Submission.create({ title: req.body.submission.title }, function(
            err,
            submission
          ) {
            if (err) {
              res.status(500).json(err);
            } else {
              submission.dueDate = req.body.submission.dueDate;
              submission.completed = req.body.submission.completed;
              submission.description = req.body.submission.description;
              submission.save();
              subject.submissions.push(submission);
              subject.save();
            }
          });
          user.save();
          res.status(200).json(user);
        }
      });
    }
  });
});

//Edit
router.get('/users/:id/subjects/:subject_id/submissions/:s_id/edit', function(
  req,
  res
) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id, function(err, foundSubject) {
        if (err) {
          res.status(500).json(err);
        } else {
          Submission.findById(req.params.s_id, function(err, foundSubmission) {
            if (err) {
              res.status(500).json(err);
            } else {
              res.status(200).json(foundSubmission);
            }
          });
        }
      });
    }
  });
});

//Update
router.put('/users/:id/subjects/:subject_id/submissions/:s_id/edit', function(
  req,
  res
) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id, function(err, subject) {
        if (err) {
          res.status(500).json(err);
        } else {
          Submission.findByIdAndUpdate(
            req.params.s_id,
            req.body.submission,
            { new: true },
            function(err, updatedSubmission) {
              if (err) {
                res.status(500).json(err);
              } else {
                res.status(200).json(updatedSubmission);
              }
            }
          );
          subject.save();
        }
      });
      user.save();
    }
  });
});

router.put(
  '/users/:id/subjects/:subject_id/submissions/:s_id/markAsCompleted',
  function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) {
        res.status(500).json(err);
      } else {
        Subject.findById(req.params.subject_id, function(err, subject) {
          if (err) {
            res.status(500).json(err);
          } else {
            Submission.findByIdAndUpdate(
              req.params.s_id,
              req.body.submission,
              { new: true },
              function(err, updatedSubmission) {
                if (err) {
                  res.status(500).json(err);
                } else {
                  res.status(200).json(updatedSubmission);
                }
              }
            );
          }
        });
      }
    });
  }
);

module.exports = router;

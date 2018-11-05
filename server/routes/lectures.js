var express = require('express');
var router = express.Router();
var Subject = require('../models/subject');
var Lecture = require('../models/lecture');
var User = require('../models/user');

//create new lecture
router.post('/users/:id/subjects/:subject_id/lectures/add', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id, function(err, subject) {
        if (err) {
          res.status(500).json(err);
        } else {
          Lecture.create({ date: req.body.lecture.date }, function(
            err,
            lecture
          ) {
            if (err) {
              res.status(500).json(err);
            } else {
              lecture.date = req.body.lecture.date;
              lecture.description = req.body.lecture.description;
              lecture.save();
              subject.lectures.push(lecture);
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
router.get('/users/:id/subjects/:subject_id/lectures/:l_id/edit', function(
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
          Lecture.findById(req.params.l_id, function(err, foundLecture) {
            if (err) {
              res.status(500).json(err);
            } else {
              res.status(200).json(foundLecture);
            }
          });
        }
      });
    }
  });
});

//Update
router.put('/users/:id/subjects/:subject_id/lectures/:l_id/edit', function(
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
          Lecture.findByIdAndUpdate(
            req.params.l_id,
            req.body.lecture,
            { new: true },
            function(err, updatedLecture) {
              if (err) {
                res.status(500).json(err);
              } else {
                res.status(200).json(updatedLecture);
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

//mark as attended
router.get('/users/:id/lectures/:l_id/markAsAttended', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Lecture.findById(req.params.l_id, function(err, lecture) {
        if (err) {
          res.status(500).json(err);
        } else {
          user.attendance.push(lecture);
          user.save();
          res.status(200).json(user);
        }
      });
    }
  });
});

//delete(teacher absent)
router.delete('lectures/:l_id/delete', function(req, res) {
  Lecture.findByIdAndRemove(req.params.l_id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted!');
    }
  });
});

module.exports = router;

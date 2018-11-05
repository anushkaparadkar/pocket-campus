var express = require('express');
var router = express.Router();
var Subject = require('../models/subject');
var User = require('../models/user');

//show all
// router.get('/users/:id/subjects', function(req, res) {
//   User.findById(req.params.id, function(err, user) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       Subject.find({}, function(err, subjects) {
//         if (err) {
//           res.status(500).json(err);
//         } else {
//           res.status(200).json(subjects);
//         }
//       });
//     }
//   });
// });

//create new subject
router.post('/users/:id/subjects/add', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.create({ name: req.body.subject.name }, function(err, subject) {
        if (err) {
          res.status(500).json(err);
        } else {
          subject.teacher = req.body.subject.teacher;
          subject.save();
          user.subjects.push(subject);
          user.save();
          res.status(200).json(subject);
        }
      });
    }
  });
});

//show details of subject
router.get('/users/:id/subjects/:subject_id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id)
        .populate('lectures')
        .populate('submissions')
        .exec(function(err, foundSubject) {
          //Populate Subjects
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(foundSubject);
          }
        });
    }
  });
});

//Edit
router.get('/users/:id/subjects/:subject_id/edit', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findById(req.params.subject_id, function(err, foundSubject) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(foundSubject);
        }
      });
    }
  });
});

//Update
router.put('/users/:id/subjects/:subject_id/edit', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findByIdAndUpdate(
        req.params.subject_id,
        req.body.subject,
        { new: true },
        function(err, updatedSubject) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(updatedSubject);
          }
        }
      );
    }
  });
});

router.delete('/users/:id/subjects/:subject_id/delete', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      Subject.findByIdAndRemove(req.params.subject_id, function(err) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json('Deleted Subject');
        }
      });
    }
  });
});

module.exports = router;

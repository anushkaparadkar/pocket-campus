var express = require('express');
var router = express.Router();
var Book = require('../models/book');

//show all books
router.get('/library/books', function(req, res) {
  Book.find({}, function(err, books) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(books);
    }
  });
});

//create new reminder
router.post('/library/books/add', function(req, res) {
  Book.create({ title: req.body.book.title }, function(err, book) {
    if (err) {
      res.status(500).json(err);
    } else {
      book.description = req.body.book.description;
      book.type = req.body.book.type;
      book.link = req.body.book.link;
      book.save();
      res.status(200).json(book);
    }
  });
});

//Edit
router.get('/books/:id/edit', function(req, res) {
  Book.findById(req.params.id, function(err, foundBook) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundBook);
    }
  });
});

//Update
router.put('/books/:id/edit', function(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body.book, { new: true }, function(
    err,
    updatedBook
  ) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(updatedBook);
    }
  });
});

router.delete('/books/:id/delete', function(req, res) {
  Book.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted Book');
    }
  });
});

module.exports = router;

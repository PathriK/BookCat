const Book = require('../models/Book.js');

exports.getBooks = (req, res) => {
  Book.find((err, docs) => {
    res.render('book/books', { books: docs });
  });
};

exports.createBooks = (req, res) => {
    const book = new Book({
        name: req.body.name
    });

    book.save(err => {
        res.redirect('/books');
    })
}

exports.updateBooks = (req, res) => {
    Book.findById(req.body.id, (err, book) => {
        if (err) { return next(err); }
        book.name = req.body.name;
        book.save(err => {
            if (err) { return next(err); }
            res.redirect('/books');
        })
    });    
}

exports.deleteBooks = (req, res) => {
    res.redirect('/books');
}
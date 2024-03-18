let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function (res) {
  BookInstance.find({ 'status': { $eq: 'Available' } })
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) {
        res.send('No books found');
      }
      let books_status = list_bookinstances.map(function (bookinstance) {
        return bookinstance.book.title + ' : ' + bookinstance.status;
      });
      res.send(books_status);
    });
}
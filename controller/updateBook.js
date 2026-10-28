const mongoose = require('mongoose');
const Book = require('../models/bookschema');

const updateBook = async (req, res) => {
  const { availability } = req.body || {};

  if (typeof availability!=='boolean') {
    return res.status(400).json({ message: 'Availability must be true or false' });
  }

  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }

  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { availability },
      { returnDocument: 'after', runValidators: true }
    );

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
  } catch (error) {
    console.error('Unable to update book:', error);
    return res.status(500).json({ message: 'Unable to update book' });
  }
};

module.exports = updateBook;

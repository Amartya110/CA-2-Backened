const Book = require('../models/bookschema');

const addBook = async (req, res) => {
  const { title, author, category } = req.body || {};

  if (typeof title!=='string'||!title.trim()){
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const book = await Book.create({ title, author, category });
    return res.status(201).json(book);
  } 
  catch(error){
    console.error('Unable to create book:', error);
    return res.status(500).json({ message: 'Unable to create book' });
  }
};

module.exports = addBook;

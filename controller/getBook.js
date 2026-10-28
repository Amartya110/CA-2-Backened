const Book = require('../models/bookschema');

const getBooks =async (req,res)=>{
  let {page,limit}=req.query;
  page=parseInt(page,10)||1;
  limit=parseInt(limit, 10)||10;

  const safePage=page<1?1:page;
  const safeLimit=limit<1?10:limit;

  try {
    const totalBooks=await Book.countDocuments();
    const books=await Book.find()
      .skip((safePage-1)*safeLimit)
      .limit(safeLimit);

    return res.json({
      books,
      currentPage: safePage,
      totalBooks,
      totalPages: Math.ceil(totalBooks / safeLimit)
    });
  } 
  catch(error){
    console.error('Unable to find books:', error);
    return res.status(500).json({ message: 'Unable to find books' });
  }
};

module.exports = getBooks;


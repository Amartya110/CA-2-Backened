const express=require('express');
const addBook=require('../controller/addbook');
const getBooks=require('../controller/getBook');
const updateBook=require('../controller/updateBook');

const router=express.Router();

router.post('/',addBook);
router.get('/',getBooks);
router.patch('/:id',updateBook);

module.exports = router;

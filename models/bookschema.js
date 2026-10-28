const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    category: true
  },
  author:{
    type: String,
    category: true
  },
  category:{
    type: String,
    category: true
  },
  availability:{
    type: Boolean,
    default: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports=mongoose.model('Book',bookSchema);

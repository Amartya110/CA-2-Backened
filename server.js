const express=require('express');
const mongoose=require('mongoose');
const bookRoutes=require('./Route/bookroute');

const app=express();
const port=process.env.PORT||3000;
const mongoUri=process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/library';

app.use(express.json());
app.use('/api/books',bookRoutes);

mongoose.connect(mongoUri)
  .then(()=>{
    app.listen(port,()=>{
      console.log(`Library API is running on port ${port}`);
    });
  })
  .catch((error)=>{
    console.error('Unable to connect to MongoDB:',error);
    process.exit(1);
  });

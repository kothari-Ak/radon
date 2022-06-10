const mongoose = require('mongoose');

const ObjectId=mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
  name:String,
  author_id:{type:String,ref:"newAuthor"},
  price: Number,
  ratings:String,
  publisher_id:{type:String,ref:"newPublisher"}

}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema) 

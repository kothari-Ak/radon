const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const publisherModel=require("../models/publisherModel.js")
const authorModel=require("../models/authorModel.js")
const BookController= require("../controllers/BookController")




router.post("/AuthorCreated",BookController.AuthorCreated)
router.post("/createbookbydetails",BookController.createbookbydetails)
router.post("/createPublisher", BookController.createPublisher)
router.get("/getBooksdata", BookController.getBooksdata)
module.exports = router;
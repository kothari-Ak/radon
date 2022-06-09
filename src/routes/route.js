const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook)
router.post("/createAuthor", BookController.createAuthor)
router.get("/getId", BookController.getId)
router.get("/getAuthorData", BookController.getAuthorData)
router.get("/authorOfBook", BookController.authorOfBook)

    
  
module.exports = router;
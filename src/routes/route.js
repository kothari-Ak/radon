const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookController")



router.post("/getBooksInYear", BookController.getBooksInYear)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.get("/getRandomBooks", BookController.getRandomBooks)

router.get("/getParticularBooks", BookController.getParticularBooks)

module.exports = router;
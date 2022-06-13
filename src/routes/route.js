const express = require('express');
const router = express.Router();
const userModel= require("../models/userModel.js")
const productModel=require("../models/productModel.js")
const orderModel=require("../models/orderModel.js")
const UserController= require("../controllers/UserController")
const midware= require("../middleWare/midware")

router.post("/UserCreated",midware.midware1,UserController.usercreated)
router.post("/OrderPurchase",midware.midware1,midware.midware2,midware.midware3,UserController.orderpurchase)


// router.put("/updatedbooks/:books",BookController.updatedbooks)
router.post("/AuthorCreated",UserController.AuthorCreated)
router.post("/createbookbydetails",UserController.createbookbydetails)
router.post("/createProduct", UserController.createProduct)
router.get("/getBooksdata", UserController.getBooksdata)
module.exports = router;
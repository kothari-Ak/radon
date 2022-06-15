const express = require('express');
const router = express.Router();

const userController= require("../controllers/UserController")

const midware = require("../middleWare/midware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/products", userController.createProduct)
router.post("/users",midware.midware1, userController.createUser)
router.post("/orders", midware.midware1, userController.createOrder)

module.exports = router;
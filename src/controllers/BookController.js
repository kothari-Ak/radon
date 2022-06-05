const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book= req.body
    let createdBook= await BookModel.create(book)
    res.send({msg: createdBook})
}

const getBooksList= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
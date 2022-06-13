const userModel= require("../models/userModel")
const productModel=require("../models/productModel")
const orderModel=require("../models/orderModel")
const midware=require("../middleWare/midware")

const usercreated=async function (req,res){
    res.send({msg:"request is missing a mandatory header"})
}

const orderpurchase=async function (req,res){
   
}



// problem 1
const AuthorCreated= async function (req, res) {
    let author=req.body
    let createdAuthor= await authorModel.create(author)
    res.send({msg: createdAuthor})  
}
// problem 2
const createProduct= async function(req,res){
    let product=req.body
    let pro=await productModel.create(product)
    res.send({msg:product})
}




//problem 3
const createbookbydetails=async function(req,res){
    let Book=req.body
 //problem 3(a)
    if(!Book.author_id) {
        res.send({msg:"author_id is required"})
    }  
//problem 3(b)
    let AuthorChecked=await authorModel.findById(Book.author_id)
    if(!AuthorChecked){
        res.send({msg:"author is not present"})
    }
//problem 3(c)
if(!Book.publisher_id){
   res.send({msg:"publisher_id is required"})
}
//problem 3(d)
let PublisherChecked=await publisherModel.findById(Book.publisher_id)
    if(!PublisherChecked){
    res.send({msg:"publisher is not present"})
}   
}
//problem 4
const getBooksdata=async function(req,res){
    let getBook=await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({msg:getBook})
}
module.exports.orderpurchase=orderpurchase
module.exports.usercreated=usercreated  
module.exports.getBooksdata=getBooksdata
module.exports.createbookbydetails=createbookbydetails
module.exports.AuthorCreated=AuthorCreated
module.exports.createProduct=createProduct
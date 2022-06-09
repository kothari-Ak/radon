const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
} 

const getId=async function(req,res){
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookdata=await BookModel.findOne({author_id:data[0].author_id}).select({name:1,_id:0})
    
    res.send({msg:bookdata})
}

const authorOfBook=async function(req,res){
    let data=await BookModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{new:true})
    console.log(data)
    let savedData=await AuthorModel.find({author_id:data.author_id}).select({author_name:1,_id:0})
    let prices=data.price
    res.send({msg:savedData,prices})
}

const getAuthorData=async function(req,res){
    let data=await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let authorname = await AuthorModel.find({$or:data}).select({author_name:1,_id:0})
    res.send({msg:authorname})
}



module.exports.authorOfBook=authorOfBook
module.exports.getAuthorData=getAuthorData
module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.getId=getId
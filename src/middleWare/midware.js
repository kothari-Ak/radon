const orderModel = require("../models/orderModel.js")
const userModel= require("../models/userModel.js")

const midware1=async function(req,res,next){
let usercreate=req.body
let user=await userModel.create(usercreate)
let orderpurchase=await orderModel(usercreate)
if(req.headers.isfreeappuser)
        {res.send(orderpurchase,user)}
    else{next()}
}

const midware2=async function(req,res){
    let checkuser=await userModel.findById(userId)
    if (!checkuser){
        res.send({error:"user doesn't exist"})}
    else{next()}

    let checkproduct=await productModel.findById(productId)
    if(!checkproduct)
    {res.send({error:"product doesn't exist"})
}
    else{next()}
}

const midware3=async function(req,res){
   
}

module.exports.midware1=midware1
module.exports.midware2=midware2
module.exports.midware3=midware3
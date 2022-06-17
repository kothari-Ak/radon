const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const validateToken = function(req, res, next) {
    try{
      let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
  
    let decodedToken = jwt.verify(token, "functionup-thorium");
    console.log(decodedToken)
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
   next()}

    catch(err){
      console.log(err.message)
      res.status(500).send(err.message)}
}

const authorise =  async function(req, res, next) {
  
  try{
  // comapre the logged in user's id and the id in request
  let token = req.headers["x-Auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
let userTobeModified=req.params.userId
  let userLoggedIn=decodedToken.userId

  if(userTobeModified!=userLoggedIn) return res.send({status:false,msg:"User logged is not allowed to modify the requested users data"})

  let user=await userModel.findById(req.params.userId)
  if(!user) return res.send({status:false,msg:"No such user exists"})
  next()}

  catch(err)
  {
    console.log(err.message)
    res.status(500).send({error:err.message})}
}

module.exports.authorise = authorise
module.exports.validateToken = validateToken
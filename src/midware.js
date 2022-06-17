

const midware1 = function(res,req,next){
let headers=req.headers
let token = req.headers["x-Auth-token"];
if (!token)
 token = req.headers["x-auth-token"];

//If no token is present in the request header return error
if (!token) return res.send({ status: false, msg: "token must be present" });
else{res.send(token)}
next()
}

const midware2 = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}

module.exports.midware2=midware2
module.exports.midware1=midware1
const{next_id}=require("process")

function midware(req,res,next){
    let currentTime =new Date
    let ip=req.ip
    let url=req.protocol +'://'+req.get('host')+ req.originalUrl
    console.log(`${currentTime},${ip} , ${url}`)
    next()
}

// const midware= function ( req, res, next) {
//     req.body= "hi there. i am adding something new to the req object"
//     console.log("This is Anjali")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.midware=midware
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

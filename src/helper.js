const printDate=function(){

    const pd=new Date()
    console.log(pd.getMonth())
}
module.exports.printDate=printDate

const printMonth=function(){
    console.log("JUNE")
}
module.exports.printMonth=printMonth

const getBatchInfo=function(){
    console.log("Radon,W3D3, the topic for today is nodejs module system")
}
module.exports.getBatchInfo=getBatchInfo    



const welcome=function() {
    console.log("Welcome to my application. I am Anjali and a part of FunctionUp Radon cohort.")
}
module.exports.welcome=welcome

const array=function(array,size){
    let a=[]
    for (let i=0;i<array.length;i+=size){
    
        const ch= array.slice(i, i+size)
        console.log(ch)   
    }
 return a
    }
    module.exports.array=array

    


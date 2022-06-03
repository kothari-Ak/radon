const express = require('express');
const externalModule = require('../logger/logger')
const dateModule=require('../helper')
const caseModule=require('../formatter')
const lodash=require('lodash')
const router = express.Router();


router.get('/test-me', function (req, res){
     externalModule.welcome()
     dateModule.printDate()
     dateModule.printMonth()
     dateModule.getBatchInfo()
     caseModule.trim()
     caseModule.changeToLowerCase()
     caseModule.changeToUpperCase()
     res.send('my first ever api')
})

router.get('/hello',function(req, res){
   
   const tail=lodash.tail([1,3,5,7,9,11,13,15,17,19]);
   console.log(tail)

   const chunk=lodash.chunk(["January","February","March","April","May","June","July","August","September","October","November","December"],3)
   console.log(chunk)

   const merge=lodash.union([6,9,4],[4,9,4],[3,7,5],[2,7,1],[0,8,1])
   console.log(merge)

   const pairs=[["name","Anjali"],["age",22]]
   const z=lodash.fromPairs(pairs)
   console.log(z)

   res.send("hello")
})




module.exports = router;
// adding this comment for no reason
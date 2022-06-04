const express = require('express');
const router = express.Router();
let players = [{
      "name":"Anjali",
      "dob":"7/11/1999",
      "gender":"male",
      "city":"jalandhar",
      "sports":[
         "swimmimg"
      ]},

      {
            "name":"Krishna",
            "dob":"7/11/1999",
            "gender":"male",
            "city":"jalandhar",
            "sports":[
               "swimmimg"
      ]},
      
      {
         "name":"Shree",
         "dob":"7/11/1999",
         "gender":"male",
         "city":"jalandhar",
         "sports":[
            "swimmimg"
         ]},
      ]


router.post("/players", function(req, res){
   let explayer= req.body
   let isNameRepeat=false

  for (let i=0;i<players.length;i++){
     if(players[i].name==explayer.name){
        isNameRepeat=true;
        break;
     }
  }
  
  if(isNameRepeat){
     res.send("This is already existed")
  }
  else{
     players.push(explayer)
   res.send({data:players,status:true})}
  })
module.exports = router;
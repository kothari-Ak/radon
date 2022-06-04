const express = require('express');
const router = express.Router();

router.post("/players", function(req, res){
   let players=[]
   let explayer= req.body
   let explayerName = explayer.name
   let isNameRepeat=false

  for (let i=0;i<players.length;i++){
     if(players[i].name==explayerName){
        isNameRepeat=true;
        break;
     }
  }
  
  if(isNameRepeat){
     res.send("This is already existed")
  }
  else{
     players.push(explayer)
   res.send(players)}
  })
module.exports = router;


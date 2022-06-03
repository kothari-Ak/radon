const express = require('express');
const router = express.Router();

router.post("/players", function(req, res){

   
   let explayer= req.body
   let explayerName = explayername
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
  }  res.send(players)})

   
   players.push(data)
   res.send( { data : players,status :true } )


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/movie', function(req, res){
   // console.log('The request objects is '+ JSON.stringify(req.params))
   movie=["shreekrishna","dhoom","afsana","gehraiyan"]
   res.send(movie)})
   //for(indexnumber=0;indexnumber<movies.length;indexnumber++){   
   
 router.get('/movies/:indexnumber',function(req,res) {
   movies=["shreekrishna","dhoom","afsana","gehraiyan"]
   if(req.params.indexnumber<movies.length===true)
   {
      console.log(movies[req.params.indexnumber]+' index number is '+req.params.indexnumber)
   }
   else{
   res.send("Error:Use a valid index")}
  
})

router.get('/films',function(req,res) {
   const films=[
      {
     "id":1,
     "name":"shreekrishna"
  },
  {
     "id":2,
     "name":"dhoom",
  },
  {  "id":3,
     "name":"afsana"
  },
  {  "id":4,
     "name":"gehraiyan"}]
   res.send(films)})


router.get('/films/:filmId',function(req,res) {
   const films=[
      {
     "id":1,
     "name":"shreekrishna"
  },
  {
     "id":2,
     "name":"dhoom",
  },
  {  "id":3,
     "name":"afsana"
  },
  {  "id":4,
     "name":"gehraiyan"}]

   let obj=films[req.params.filmId-1]
   if(obj!==films.length){
      res.send(obj||"No movie exists with this is id")
   }
})
   module.exports = router;
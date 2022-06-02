const express = require('express');
const externalModule = require('../logger/logger')
const dateModule=require('../helper')
const caseModule=require('../formatter')

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

module.exports = router;
// adding this comment for no reason